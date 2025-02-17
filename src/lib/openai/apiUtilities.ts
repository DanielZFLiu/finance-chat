import { z } from "zod";

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