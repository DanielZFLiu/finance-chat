import { z } from "zod";

export const responseFormat = z.object({
    relevantFunctions: z.array(z.string()),
});

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
