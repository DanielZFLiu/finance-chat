import { API_CONFIG, PARAM_DESCRIPTIONS } from "./apiConfig";

function checkParamType(key: string, value: string) {
    const expectedType = PARAM_DESCRIPTIONS[key].type;

    const isNumeric = (val: string) => val !== "" && !isNaN(+val);

    // validation functions
    const validators: Record<string, (val: string) => boolean> = {
        number: (val) => isNumeric(val),
        string: () => true,
        boolean: (val) => val === "true" || val === "false",
        date: (val) => !isNaN(Date.parse(val)),
    };

    // run the validator
    if (!validators[expectedType]?.(value)) {
        throw new Error(`Invalid type for parameter ${key}. Expected ${expectedType}.`);
    }
}


export async function fetchWrapper(type: string, params: Record<string, string>) {
    const apiKey = process.env.FMP_API_KEY;
    if (!apiKey) throw new Error("Missing FMP_API_KEY");

    const config = API_CONFIG[type as keyof typeof API_CONFIG];
    if (!config) throw new Error(`Invalid API type: ${type}`);

    let endpoint = config.endpoint;

    // collect path parameters
    if (config.pathParams) {
        for (const pathParam of config.pathParams) {
            if (params[pathParam] === undefined) {
                throw new Error(`Missing required path parameter: ${pathParam}`);
            }
            checkParamType(pathParam, params[pathParam]);
            // append path parameter
            endpoint += `/${encodeURIComponent(params[pathParam])}`;
            // remove path param from params
            delete params[pathParam];
        }
    }

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
    console.log(url);

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
