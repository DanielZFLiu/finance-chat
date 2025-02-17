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

export async function getRelevantEndpoints(query: string, model?: string) {
    const response = await fetch("/api/openai", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ messages: [{ role: "user", content: `User Query: ${query} \nTask: Return a list of function names that are the most relevant to the user query. Here is the list of functions and their description: ${JSON.stringify(endpoints)}` }], format: { relevantFunctions: "string[]" }, model }),
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
export async function determineInternetUse(query: string, model?: string) {
    const response = await fetch("/api/openai", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ messages: [{ role: "user", content: `User Query: ${query} \nTask: Based on the user query, determine whether searching the internet would benefit your answer or not.` }], format: { searchInternet: "boolean" }, model }),
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
export async function askPerplexity() { }

// 2-b: use gpt function calling to decide which fmp endpoint to call
export async function getFmpEndpoints() { }

// 3-b: call the relevant endpoints to get relevant data
export async function callFmpEndpoints() { }

// end step: send the data and the query to gpt to get a response
export async function getResponse() { }