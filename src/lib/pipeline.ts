/**
 * The pipeline for the finance chat:
 * 1. Send the users query and the list of fmp endpoints to gpt. Gpt will return a list of the most relevant functions.
 * This is necessary as the max amount of tools thats accepted by gpt is 128, and we have ~250 fmp endpoints.
 * 2.1. If list is empty, ask gpt to determine whether to search the internet or not (perplexity)
 * 2.2. If list is non empty, use gpt function calling to decide which fmp endpoint(s) to call
 * 3. Call the relevant endpoints (fmp endpoint(s) or perplexity endpoint, or none) to get relevant data
 * 4. send the data (if there are any) and the query to gpt to get a response
 */

// 1
export async function getRelevantFunctions(){}

// 2.1


// 2.2
export async function getFmpEndpoints(){}

// 3
export async function callEndpoints(){} 

// 4
export async function getResponse(){}