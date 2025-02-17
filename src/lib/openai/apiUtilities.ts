import { z } from "zod";
import { API_CONFIG, PARAM_DESCRIPTIONS } from "@/lib/fmp/apiConfig";

// the tool interface
export interface Tool {
    type: "function";
    function: {
        name: string;
        description: string;
        parameters: {
            type: string;
            properties: Record<string, { type: string; description: string }>;
            required: string[];
            additionalProperties: boolean;
        };
    };
}

// format the function config in a way openai endpoint can understand
export function getTools(toolNames: string[]) {
    const tools: Tool[] = [];
    for (const key of toolNames) {
        const config = API_CONFIG[key];

        // get query properties
        const queryProperties = config.queryParams.map((param) => [
            param,
            {
                type: PARAM_DESCRIPTIONS[param].type === "date" ? "string" : PARAM_DESCRIPTIONS[param].type,
                description: PARAM_DESCRIPTIONS[param].description,
            },
        ]);

        // get path properties
        const pathProperties = config.pathParams
            ? config.pathParams.map((param) => [
                param,
                {
                    type: PARAM_DESCRIPTIONS[param].type === "date" ? "string" : PARAM_DESCRIPTIONS[param].type,
                    description: PARAM_DESCRIPTIONS[param].description,
                },
            ])
            : [];

        // merge
        const properties = Object.fromEntries([...queryProperties, ...pathProperties]);

        tools.push({
            type: "function",
            function: {
                name: key,
                description: config.description,
                parameters: {
                    type: "object",
                    properties,
                    required: config.required,
                    additionalProperties: false,
                },
            },
        });
    }
    return tools;
}

// format the endpoints in for chatgpt to understand
interface endpoint {
    name: string,
    description: string,
    parameters: {
        name: string,
        type: string,
        description: string
    }[]
};

export function getEndpointDescriptions() {
    const endpoints: endpoint[] = [];

    for (const key in API_CONFIG) {
        const config = API_CONFIG[key];

        // Map query parameters.
        const queryParams = config.queryParams.map((param) => ({
            name: param,
            type: PARAM_DESCRIPTIONS[param].type,
            description: PARAM_DESCRIPTIONS[param].description,
        }));

        // Map path parameters if they exist.
        const pathParams = config.pathParams
            ? config.pathParams.map((param) => ({
                name: param,
                type: PARAM_DESCRIPTIONS[param].type,
                description: PARAM_DESCRIPTIONS[param].description,
            }))
            : [];

        endpoints.push({
            name: key,
            description: config.description,
            parameters: [...queryParams, ...pathParams],
        });
    }

    return endpoints;
}


// dynamically build zod schema
export function buildZodSchema(desc: Record<string, string>) {
    const shape: Record<string, z.ZodTypeAny> = {};

    for (const key in desc) {
        const type = desc[key];
        let isArray = false;
        let baseType = type;

        // check if array, e.g. string[]
        if (type.endsWith("[]")) {
            isArray = true;
            baseType = type.slice(0, -2);
        }

        // build base type
        let zodType;
        switch (baseType) {
            case "boolean":
                zodType = z.boolean();
                break;
            case "string":
                zodType = z.string();
                break;
            case "number":
                zodType = z.number();
                break;
            default:
                throw new Error(`Unsupported type: ${baseType}`);
        }

        // wrap in array
        if (isArray) {
            zodType = z.array(zodType);
        }

        shape[key] = zodType;
    }

    return z.object(shape);
}