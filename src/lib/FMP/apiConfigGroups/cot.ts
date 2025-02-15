import { BASE_URL, apiConfigInterface, paramDescriptionInterface } from "../apiConfig";

// Commitment of Traders (COT)
export const cotConfig: apiConfigInterface = {
    cotReport: {
        endpoint: `${BASE_URL}/commitment-of-traders-report`,
        queryParams: ["symbol", "from", "to"],
        required: ["symbol", "from", "to"],
        description:
            "Access comprehensive Commitment of Traders (COT) reports with the FMP COT Report API. This API provides detailed information about long and short positions across various sectors, helping you assess market sentiment and track positions in commodities, indices, and financial instruments."
    },
    cotAnalysis: {
        endpoint: `${BASE_URL}/commitment-of-traders-analysis`,
        queryParams: ["symbol", "from", "to"],
        required: ["symbol", "from", "to"],
        description:
            "Gain in-depth insights into market sentiment with the FMP COT Report Analysis API. Analyze the Commitment of Traders (COT) reports for a specific date range to evaluate market dynamics, sentiment, and potential reversals across various sectors."
    },
    cotSymbolList: {
        endpoint: `${BASE_URL}/commitment-of-traders-list`,
        queryParams: [],
        required: [],
        description:
            "Access a comprehensive list of available Commitment of Traders (COT) reports by commodity or futures contract using the FMP COT Report List API. This API provides an overview of different market segments, allowing users to retrieve and explore COT reports for a wide variety of commodities and financial instruments."
    }
};

export const cotParam: paramDescriptionInterface = {
    symbol: {
        type: "string",
        description: "Example: AAPL"
    },
    from: {
        type: "date",
        description: "Example: 2024-01-01"
    },
    to: {
        type: "date",
        description: "Example: 2024-03-01"
    }
};
