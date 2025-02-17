import { BASE_URL, today, apiConfigInterface, paramDescriptionInterface } from "../apiConstant";

export const economicsConfig: apiConfigInterface = {
    treasuryRates: {
        endpoint: `${BASE_URL}/treasury-rates`,
        queryParams: ["from", "to"],
        required: ["from", "to"],
        description:
            `Access real-time and historical Treasury rates for all maturities with the FMP Treasury Rates API. Track key benchmarks for interest rates across the economy. Notice that you may only Retrieve historical values up to 5 years; today's date is ${today}. Notice that you may only retrieve a range up to 5 years.`
    },
    economicIndicators: {
        endpoint: `${BASE_URL}/economic-indicators`,
        queryParams: ["name", "from", "to"],
        required: ["name"],
        description:
            `Access real-time and historical economic data for key indicators like GDP, unemployment, and inflation with the FMP Economic Indicators API. Use this data to measure economic performance and identify growth trends. Notice that you may only Retrieve historical values up to 5 years; today's date is ${today}.`
    },
    economicCalendar: {
        endpoint: `${BASE_URL}/economic-calendar`,
        queryParams: ["from", "to"],
        required: ["from", "to"],
        description:
            `Stay informed with the FMP Economic Data Releases Calendar API. Access a comprehensive calendar of upcoming economic data releases to prepare for market impacts and make informed investment decisions. Notice that you may only Retrieve historical values up to 5 years; today's date is ${today}.`
    },
    marketRiskPremium: {
        endpoint: `${BASE_URL}/market-risk-premium`,
        queryParams: [],
        required: [],
        description:
            "Access the market risk premium for specific dates with the FMP Market Risk Premium API. Use this key financial metric to assess the additional return expected from investing in the stock market over a risk-free investment."
    }
};

export const economicsParam: paramDescriptionInterface = {
    from: {
        type: "date",
        description: "Example: 2024-01-01"
    },
    to: {
        type: "date",
        description: "Example: 2024-03-01"
    },
    name: {
        type: "string",
        description: "Example: GDP"
    }
};
