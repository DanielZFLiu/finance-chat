import { z, ZodObject, ZodType } from "zod";
import { ChatCompletionMessageParam } from "openai/resources/chat/completions";

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

// the response format
let responseFormat: ZodObject<{
    [key: string]: z.ZodType;
}> = z.object({
    relevantFunctions: z.array(z.string()),
});

export function getResponseFormat() {
    return responseFormat;
}

export function setResponseFormat(
    newSchema: ZodObject<{
        [key: string]: ZodType;
    }>
) {
    responseFormat = newSchema;
}

// the chat messages
let messages: ChatCompletionMessageParam[] = [];

export function getMessages() {
    return messages;
}

export function setMessages(newMessages: ChatCompletionMessageParam[]) {
    messages = newMessages;
}

export function addMessage(newMessage: ChatCompletionMessageParam) {
    messages.push(newMessage);
}