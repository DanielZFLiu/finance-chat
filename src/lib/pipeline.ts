/**
 * The pipeline for the finance chat:
 * 1. Get list of relevant fmp endpoints
 * 2. Determine whether to search the internet or not (search if relevant fmp endpoints list is empty)
 * 3. Prepare calling fmp endpoints using list of relevant fmp endpoints
 * 4. Call the relevant fmp endpoints
 * 5. Get response
 * 6. If data not sufficient for response, remove called endpoint(s) from list of relevant fmp endpoints; go back to step 2. Else return response.
 */
import { Tool, getTools, getEndpointDescriptions } from "./openai/apiUtilities";
import { Dispatch, SetStateAction } from "react";
import { today } from "./fmp/apiConstant";

// helper functions
function concatMessages(message: { role: string; content: string; }, pastMessages?: { role: string; content: string; }[]) {
    return (pastMessages ? pastMessages : []).concat([message]);
}

function getStucturedOutput(data: { response: { choices: { message: { content: string, refusal: string } }[] } }) {
    if (data.response.choices[0].message.content) {
        return data.response.choices[0].message.content;
    } else {
        return data.response.choices[0].message.refusal;
    }
}

// 1: get relevant fmp endpoints
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
                    content: `${JSON.stringify(getEndpointDescriptions())}\nThe above is a list of functions and their description. \n
                    Here is the user query: ${query} \nReturn the function names (value of the key 'name') that answers the user query. `
                }, pastMessages),
                format: { relevantFunctions: "string[]" },
                model
            }
        ),
    });
    const data = await response.json();
    const structuredOutput = getStucturedOutput(data);

    if (response.ok) {
        return structuredOutput ? JSON.parse(structuredOutput) : { relevantFunctions: [] };
    }
    else {
        console.error("Error from OpenAI API:", data);
    }
}

// 2. determine whether to search the internet or not
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
    const structuredOutput = getStucturedOutput(data);

    if (response.ok) {
        return structuredOutput ? JSON.parse(structuredOutput) : { searchInternet: false };
    }
    else {
        console.error("Error from OpenAI API:", data);
    }
}

// 2. search the internet
export async function askPerplexity(query: string, model?: string, pastMessages?: { role: string; content: string; }[]) {
    const filteredMessages = pastMessages ? pastMessages.filter((message) => message.role !== "developer") : undefined;

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
                    content: `User Query: ${query} \nTask: Research about the user query. Try to list out as much details as possible relevant to the query.`
                },
                filteredMessages
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

// 3. prepare calling fmp endpoints
export async function prepareCallingFMP(query: string, toolNames: string[], model?: string, pastMessages?: { role: string; content: string; }[]) {
    // collect the tools info for openai to digest
    const tools: Tool[] = getTools(toolNames);

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
                    content: `User Query: ${query} \nTask: Call the function(s) that will most likely provide the data needed to answer the user query. You are encouraged to call more than one function to gather the needed information. \nAdditional Information: Today's date is ${today}.`
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

// 4. call the relevant fmp endpoints
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

// 5. get response
export async function getResponse(query: string, relevantData: string, checkMoreInfo: boolean, model?: string, pastMessages?: { role: string; content: string; }[]) {
    let prompt = checkMoreInfo ?
        "If the information above is enough to answer the user query, answer within response and set moreInfo to false.\n\
        If the information above is not enough to answer the user query, keep all relevant information within response, then set moreInfo to true."
        : "Answer the user query using the relevant information provided above.";
    prompt += "Avoid using the single dollar sign (unless you are writing inline latex) in response.";
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

    if (response.ok && checkMoreInfo) {
        const structuredOutput = getStucturedOutput(data);
        return structuredOutput ? JSON.parse(structuredOutput) : { response: "", moreInfo: true };
    }
    else if (response.ok && !checkMoreInfo) {
        return data.response.choices[0].message.content;
    }
    else {
        console.error("Error from OpenAI API:", data);
    }
}

// the entire pipeline
export async function prompt(query: string, setProgress: Dispatch<SetStateAction<string>>, openaiModel?: string, perplexityModel?: string, pastMessages?: { role: string; content: string; }[]): Promise<string> {
    console.log(openaiModel);
    // 1. get relevant fmp endpoints
    setProgress("Step 1: Getting relevant endpoints...");
    const endpoints = await getRelevantEndpoints(query, openaiModel, pastMessages);
    let relevantFunctions = endpoints.relevantFunctions;
    console.log("step 1: list of relevant functions", relevantFunctions);

    let relevantData = "";
    while (true) {
        // 2. potentially search the internet
        if (relevantFunctions.length === 0) {
            setProgress("Step 2a: Determining internet use...");
            const internetUse = await determineInternetUse(query, openaiModel, pastMessages);
            console.log("step 2-a: determine internet use:", internetUse);

            if (internetUse) {
                setProgress("Step 2b: Searching the internet...");
                const perplexityResponse = await askPerplexity(query, perplexityModel, pastMessages);
                relevantData += "Information from the internet: \n";
                relevantData += perplexityResponse;
                console.log("step 2-b: search the internet:", perplexityResponse);
            }

            setProgress("Getting final response...");
            const finalResponse = await getResponse(query, relevantData, false, openaiModel, pastMessages);
            setProgress("");
            return finalResponse;
        }

        // 3. prepare calling fmp
        setProgress("Step 3: Preparing api calls...");
        const functionCalls = await prepareCallingFMP(query, relevantFunctions, openaiModel, pastMessages);
        console.log("step 3: functions prepared:", functionCalls);

        // 4. call the relevant endpoints
        setProgress("Step 4: Calling fmp apis...");
        const fmpData = JSON.stringify(await callFmpEndpoints(functionCalls));
        relevantData = "New Data:\n" + fmpData + "\nRelevant data from before: \n" + relevantData;
        relevantFunctions = relevantFunctions.filter((func: string) => func !== functionCalls[0].function.name);
        console.log("step 4: data retrieved from fmp:", relevantData);

        // 5. get response
        setProgress("Step 5: Getting response... (May continue to step 2 if data not sufficient)");
        const response = await getResponse(query, relevantData, true, openaiModel, pastMessages);
        console.log("step 5: get response:", response);

        if (!response.moreInfo) {
            setProgress("");
            return response.response;
        }
        // 6. if data not sufficient for response, iterate through other relevant endpoints
        else if (response.moreInfo && relevantFunctions.length > 0) {
            relevantData = response.response + "\n";
        }
    }
}