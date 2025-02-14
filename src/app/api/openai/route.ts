import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: NextRequest) {
    try {
        // JSON payload with message field
        const body = await req.json();
        const { message } = body;

        const completion = await openai.chat.completions.create({
            model: "gpt-4o-mini", 
            messages: [
                { role: "system", content: "You are a helpful assistant." },
                {
                    role: "user",
                    content: message || "Write a haiku about recursion in programming.",
                },
            ],
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
