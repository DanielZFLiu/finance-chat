import { NextRequest, NextResponse } from "next/server";
import { fetchWrapper } from "@/lib/FMP/fetchWrapper";

export async function GET(req: NextRequest) {
    try {
        const { searchParams } = req.nextUrl;
        const type = searchParams.get("type");

        if (!type) {
            return NextResponse.json({ error: "Missing 'type' parameter" }, { status: 400 });
        }

        // convert searchParams
        const params: Record<string, string> = {};
        searchParams.forEach((value, key) => {
            params[key] = value;
        });

        // fetch data
        const data = await fetchWrapper(type, params);
        return NextResponse.json({ data });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
