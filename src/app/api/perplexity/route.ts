/**
 * Non streaming perplexity endpoint
 */

import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
    try {
        // JSON payload 
        const body = await req.json();

        // send request to perplexity endpoint
        const res = await fetch('https://api.perplexity.ai/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${process.env.PERPLEXITY_API_KEY}`
            },
            body: JSON.stringify(body)
        });

        // get response
        const data = await res.json();

        // handle error
        if (!res.ok) {
            return NextResponse.json(
                { error: 'Error from Perplexity API', details: data },
                { status: res.status }
            );
        }

        // return response
        return NextResponse.json(data);
    }

    catch (error) {
        if (error instanceof Error) {
            return NextResponse.json({ error: error.message }, { status: 500 });
        } else {
            return NextResponse.json({ error: "An unknown error occurred" }, { status: 500 });
        }
    }
}
