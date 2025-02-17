/**
 * Non streaming chat completion endpoint
 */

import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";
import { zodResponseFormat } from "openai/helpers/zod";
import { ChatCompletionCreateParams, ChatCompletionMessageParam } from "openai/resources/chat/completions/completions";
import { Tool, buildZodSchema } from "@/lib/openai/apiUtilities";

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: NextRequest) {
    try {
        // JSON payload with message, tools, and format
        const body = await req.json();
        const { messages, tools, format, model }: { messages: ChatCompletionMessageParam[], tools: Tool[], format: Record<string, string>, model: string } = body;

        if (tools && format) {
            return NextResponse.json(
                { error: "Either provide 'tools' or 'format', not both." },
                { status: 400 }
            );
        }

        const params: ChatCompletionCreateParams = {
            model: model || "gpt-4o",
            messages,
            reasoning_effort: model ? "high" : undefined,
        }

        if (tools) {
            params.tools = tools;
        }
        else if (format) {
            let schema;
            try {
                schema = buildZodSchema(format);
            }
            catch (err) {
                return NextResponse.json(
                    { error: `Invalid schema description: ${err instanceof Error ? err.message : err}` },
                    { status: 400 }
                );
            }
            params.response_format = zodResponseFormat(schema, "response_format");
        }

        const completion = await openai.chat.completions.create(params);

        return NextResponse.json({ response: completion });
    }

    catch (error) {
        if (error instanceof Error) {
            return NextResponse.json({ error: error.message }, { status: 500 });
        } else {
            return NextResponse.json({ error: "An unknown error occurred" }, { status: 500 });
        }
    }
}
