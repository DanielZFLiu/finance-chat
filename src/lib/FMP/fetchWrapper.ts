import { API_CONFIG, PARAM_DESCRIPTIONS } from "./apiConfig";

function checkParamType(key: string, value: string) {
    const expectedType = PARAM_DESCRIPTIONS[key]?.type;

    // check if value is a number
    function isNumeric(value: string): boolean {
        return value !== "" && !isNaN(+value);
    }

    if(expectedType === "number" && !isNumeric(value)){
        throw new Error(`Invalid type for parameter ${key}. Expected ${expectedType}.`);
    }
    else if(expectedType === "string" && isNumeric(value)){
        throw new Error(`Invalid type for parameter ${key}. Expected ${expectedType}.`);
    }
}

export async function fetchWrapper(type: string, params: Record<string, string>) {
    const apiKey = process.env.FMP_API_KEY;
    if (!apiKey) throw new Error("Missing FMP_API_KEY");

    const config = API_CONFIG[type as keyof typeof API_CONFIG];
    if (!config) throw new Error(`Invalid API type: ${type}`);

    const endpoint = config.endpoint;

    // collect query parameters
    const queryParams: Record<string, string> = {};
    for (const queryParam of config.queryParams) {
        if (config.required.includes(queryParam) && params[queryParam] === undefined) {
            throw new Error(`Missing required parameter: ${queryParam}`);
        }
        else if (params[queryParam] !== undefined) {
            checkParamType(queryParam, params[queryParam]);
            queryParams[queryParam] = String(params[queryParam]);
        }
    }

    // append API key to query param
    queryParams["apikey"] = apiKey;

    // construct URL
    const urlParams = new URLSearchParams(queryParams).toString();
    const url = `${endpoint}?${urlParams}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`FMP API Error: ${response.statusText}`);
        }
        return await response.json();
    } catch (error) {
        console.error("Error fetching from FMP API:", error);
        throw error;
    }
}
