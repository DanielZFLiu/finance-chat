/**
 * Non streaming chat completion endpoint
 */

import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";
import { zodResponseFormat } from "openai/helpers/zod";
import { ChatCompletionCreateParams } from "openai/resources/chat/completions/completions";
import { getResponseFormat, Tool, getMessages, addMessage } from "@/lib/openai/apiVariables";


const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: NextRequest) {
    try {
        // JSON payload with message, tools, and formatted
        const body = await req.json();
        const { message, tools, formatted }: { message: string, tools: Tool[], formatted: boolean } = body;

        if (tools && formatted) {
            return NextResponse.json(
                { error: "Either provide 'tools' or set 'formatted' to true, not both." },
                { status: 400 }
            );
        }

        addMessage({ role: "user", content: message });
        const params: ChatCompletionCreateParams = {
            model: "gpt-4o",
            messages: getMessages(),
        }

        if (tools) {
            params.tools = tools;
        } else if (formatted) {
            params.response_format = zodResponseFormat(getResponseFormat(), "response_format");
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
