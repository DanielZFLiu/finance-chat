import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";
import { API_CONFIG, PARAM_DESCRIPTIONS } from "@/lib/fmp/apiConfig";

interface Tool {
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

const tools: Tool[] = [];

for (const key in API_CONFIG) {
    tools.push(
        {
            type: "function",
            function: {
                name: key,
                description: API_CONFIG[key].description,
                parameters: {
                    type: "object",
                    properties: Object.fromEntries(
                        API_CONFIG[key].queryParams.map((param) => [
                            param,
                            {
                                type: PARAM_DESCRIPTIONS[param].type,
                                description: PARAM_DESCRIPTIONS[param].description,
                            },
                        ])
                    ),
                    required: API_CONFIG[key].required,
                    additionalProperties: false
                }
            }
        }
    );
}

console.log(tools);

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: NextRequest) {
    try {
        // JSON payload with message field
        const body = await req.json();
        const { message } = body;

        const completion = await openai.chat.completions.create({
            model: "gpt-4o",
            messages: [
                {
                    role: "user",
                    content: message || "Write a haiku about recursion in programming.",
                },
            ],
            tools
        });

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
