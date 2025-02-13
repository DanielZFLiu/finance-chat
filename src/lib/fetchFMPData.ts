// fetch wrapper
export async function fetchFMPData(endpoint: string, params: Record<string, string | number>) {
    const apiKey = process.env.FMP_API_KEY;
    if (!apiKey) throw new Error("Missing FMP_API_KEY");

    const urlParams = new URLSearchParams({ ...params, apikey: apiKey }).toString();
    const url = `${endpoint}?${urlParams}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`FMP API Error: ${response.statusText}`);
        }
        return await response.json();
    } catch (error) {
        console.error("Error fetching from FMP API:", error);
        throw error;
    }
}

// base urls
export const BASE_URL = "https://financialmodelingprep.com/api/v3";
export const BASE_URL_V4 = "https://financialmodelingprep.com/api/v4";