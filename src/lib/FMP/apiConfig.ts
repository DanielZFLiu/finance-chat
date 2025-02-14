const BASE_URL = "https://financialmodelingprep.com/stable";

export const API_CONFIG = {
    stockSymbolSearch: {
        endpoint: `${BASE_URL}/search-symbol`,
        queryParams: ["query", "limit", "exchange"],
        required: ["query"],
        description: "Easily find the ticker symbol of any stock with the FMP Stock Symbol Search API. Search by company name or symbol across multiple global markets."
    },
    companyNameSearch: {
        endpoint: `${BASE_URL}/search-name`,
        queryParams: ["query", "limit", "exchange"],
        required: ["query"],
        description: "Search for ticker symbols, company names, and exchange details for equity securities and ETFs listed on various exchanges with the FMP Name Search API. This endpoint is useful for retrieving ticker symbols when you know the full or partial company or asset name but not the symbol identifier."
    },
};

export const PARAM_DESCRIPTIONS: { [key: string]: { type: string; description: string } }  = {
    query: {
        type: "string",
        description: "Example: AAPL"
    },
    limit: {
        type: "number",
        description: "Example: 50"
    },
    exchange: {
        type: "string",
        description: "Example: NASDAQ"
    }
}