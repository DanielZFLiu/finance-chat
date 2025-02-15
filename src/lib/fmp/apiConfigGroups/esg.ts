import { BASE_URL, apiConfigInterface, paramDescriptionInterface } from "../apiConfig";

export const esgConfig: apiConfigInterface = {
    esgDisclosures: {
        endpoint: `${BASE_URL}/esg-disclosures`,
        queryParams: ["symbol"],
        required: ["symbol"],
        description:
            "Align your investments with your values using the FMP ESG Investment Search API. Discover companies and funds based on Environmental, Social, and Governance (ESG) scores, performance, controversies, and business involvement criteria."
    },
    esgRatings: {
        endpoint: `${BASE_URL}/esg-ratings`,
        queryParams: ["symbol"],
        required: ["symbol"],
        description:
            "Access comprehensive ESG ratings for companies and funds with the FMP ESG Ratings API. Make informed investment decisions based on environmental, social, and governance (ESG) performance data."
    },
    esgBenchmark: {
        endpoint: `${BASE_URL}/esg-benchmark`,
        queryParams: ["year"],
        required: ["year"],
        description:
            "Evaluate the ESG performance of companies and funds with the FMP ESG Benchmark Comparison API. Compare ESG leaders and laggards within industries to make informed and responsible investment decisions."
    }
};

export const esgParam: paramDescriptionInterface = {
    symbol: {
        type: "string",
        description: "Example: AAPL"
    },
    year: {
        type: "string",
        description: "Example: 2023"
    }
};
