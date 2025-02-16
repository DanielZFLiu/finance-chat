import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";
import { zodResponseFormat } from "openai/helpers/zod";
import { responseFormat, Tool } from "@/lib/openai/apiConstant";


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

        let params: any = {
            model: "gpt-4o",
            messages: [
                {
                    role: "user",
                    content: message,
                },
            ]
        }

        if (tools) {
            params.tools = tools;
        } else if (formatted) {
            params.response_format = zodResponseFormat(responseFormat, "response_format");
        }

        const completion = await openai.chat.completions.create(params);

        return NextResponse.json({ response: completion.choices[0].message });
    }

    catch (error) {
        if (error instanceof Error) {
            return NextResponse.json({ error: error.message }, { status: 500 });
        } else {
            return NextResponse.json({ error: "An unknown error occurred" }, { status: 500 });
        }
    }
}
