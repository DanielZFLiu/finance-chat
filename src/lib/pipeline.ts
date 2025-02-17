/**
 * quality, time, and cost
 * The pipeline for the finance chat:
 * 1. Send the users query and the list of fmp endpoints to gpt. Gpt will return a list of the
 * most relevant endpoints.
 * This is necessary as the max amount of tools thats accepted by gpt is 128, and we have ~250  
 * fmp endpoints. 
 * 
 * Possibility a:
 * 2-a. If list is empty, ask gpt to determine whether to search the internet or not (perplexity)
 * 3-a. If gpt says to search the internet, call the perplexity endpoint to get the relevant info
 * 
 * Possibility b:
 * 2-b. If list is non empty, use gpt function calling to decide which fmp endpoint(s) to call
 * 3-b. Call the relevant endpoints to get relevant data
 * 4-b. If gpt determines that the data was not enough, call the perplexity endpoint to get more 
 * relevant info.
 * 
 * End Step:
 * Send the data and the query to gpt to get a response.
 */

import { API_CONFIG, PARAM_DESCRIPTIONS } from "@/lib/fmp/apiConfig";
import { Tool } from "./openai/apiUtilities";

// helper functions
function concatMessages(message: { role: string; content: string; }, pastMessages?: { role: string; content: string; }[]) {
    return (pastMessages ? pastMessages : []).concat([message]);
}

// 1: get relevant fmp endpoints
interface endpoint {
    name: string,
    description: string,
    parameters: {
        name: string,
        type: string,
        description: string
    }[]
};
const endpoints: endpoint[] = [];

for (const key in API_CONFIG) {
    endpoints.push({
        name: key,
        description: API_CONFIG[key].description,
        parameters: API_CONFIG[key].queryParams.map((param) => ({
            name: param,
            type: PARAM_DESCRIPTIONS[param].type,
            description: PARAM_DESCRIPTIONS[param].description,
        })),
    });
}

export async function getRelevantEndpoints(query: string, model?: string, pastMessages?: { role: string; content: string; }[]) {
    const response = await fetch("/api/openai", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(
            {
                messages: concatMessages({
                    role: "user",
                    content: `${JSON.stringify(endpoints)}\nThe above is a list of functions and their description. \n
                    Here is the user query: ${query} \nReturn the functions that answers the user query. `
                }, pastMessages),
                format: { relevantFunctions: "string[]" },
                model
            }
        ),
    });
    const data = await response.json();

    if (response.ok) {
        return JSON.parse(data.response.choices[0].message.content);
    }
    else {
        console.error("Error from OpenAI API:", data);
    }
}

// 2-a: determine whether to search the internet or not
export async function determineInternetUse(query: string, model?: string, pastMessages?: { role: string; content: string; }[]) {
    const response = await fetch("/api/openai", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            messages: concatMessages({
                role: "user",
                content: `User Query: ${query} \nTask: Based on the user query, determine whether searching the internet would benefit your answer or not.`
            }, pastMessages),
            format: { searchInternet: "boolean" },
            model
        }),
    });
    const data = await response.json();

    if (response.ok) {
        return JSON.parse(data.response.choices[0].message.content);
    }
    else {
        console.error("Error from OpenAI API:", data);
    }
}

// 3-a: call the perplexity endpoint
export async function askPerplexity(query: string, model?: string, pastMessages?: { role: string; content: string; }[]) {
    const response = await fetch("/api/perplexity", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            model: model || "sonar-pro",
            messages: concatMessages(
                {
                    role: "user",
                    content: `User Query: ${query} \nTask: Research about the user query and list out the related facts.`
                },
                pastMessages
            )
        }),
    });

    const data = await response.json();
    if (response.ok) {
        return data.choices[0].message.content;
    }
    else {
        console.error("Error from Perplexity API:", data);
    }
}

// 2-b: use gpt function calling to decide which fmp endpoint to call
export async function prepareCallingFMP(query: string, toolNames: string[], model?: string, pastMessages?: { role: string; content: string; }[]) {
    // collect the tools info for openai to digest
    const tools: Tool[] = [];
    for (const key of toolNames) {
        tools.push(
            {
                type: "function",
                function: {
                    name: key,
                    description: API_CONFIG[key].description,
                    parameters: {
                        type: "object",
                        properties: Object.fromEntries(
                            API_CONFIG[key].queryParams.map((param) => [
                                param,
                                {
                                    type: PARAM_DESCRIPTIONS[param].type === "date" ? "string" : PARAM_DESCRIPTIONS[param].type,
                                    description: PARAM_DESCRIPTIONS[param].description,
                                },
                            ])
                        ),
                        required: API_CONFIG[key].required,
                        additionalProperties: false
                    }
                }
            }
        );
    }

    console.log(tools);

    const response = await fetch("/api/openai", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(
            {
                messages: concatMessages({
                    role: "user",
                    content: `User Query: ${query} \nTask: Call the function(s) that will most likely provide the data needed to answer the user query.`
                }, pastMessages),
                tools,
                model
            }
        ),
    });
    const data = await response.json();

    if (response.ok) {
        return data.response.choices[0].message.tool_calls;
    }
    else {
        console.error("Error from OpenAI API:", data);
    }
}

// 3-b: call the relevant endpoints to get relevant data
export async function callFmpEndpoints(toolCalls: { function: { arguments: string, name: string }, id: string, type: string }[]) {
    const responses = [];
    for (const toolCall of toolCalls) {
        const response = await fetch(`/api/fmp?type=${toolCall.function.name}&${new URLSearchParams(JSON.parse(toolCall.function.arguments)).toString()}`);
        const data = await response.json();

        if (response.ok) {
            responses.push(data);
        }
        else {
            console.error("Error from FMP API:", data);
        }
    }
    return responses;
}

// end step: send the data and the query to gpt to get a response
export async function getResponse(query: string, relevantData: string, checkMoreInfo: boolean, model?: string, pastMessages?: { role: string; content: string; }[]) {
    const prompt = checkMoreInfo ? 
        "If the information above is enough to answer the question, answer within response and set moreInfo to false.\n\
        If the information above is not enough to answer the question, set moreInfo to true and leave response empty." 
        : "Answer the user query using the relevant information provided above.";
    const format = checkMoreInfo ? { response: "string", moreInfo: "boolean" } : undefined;

    const response = await fetch("/api/openai", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(
            {
                messages: concatMessages({
                    role: "user",
                    content: `Relevant Information: ${relevantData} \nUser Query: ${query} \n${prompt}`
                }, pastMessages),
                format,
                model
            }
        ),
    });
    const data = await response.json();

    if (response.ok) {
        return JSON.parse(data.response.choices[0].message.content);
    }
    else {
        console.error("Error from OpenAI API:", data);
    }
} 