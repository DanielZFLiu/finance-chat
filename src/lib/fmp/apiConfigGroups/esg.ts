import { BASE_URL, BASE_URL_V4, apiConfigInterface, paramDescriptionInterface } from "../apiConstant";

export const esgConfig: apiConfigInterface = {
    // esgDisclosures: {
    //     endpoint: `${BASE_URL}/esg-disclosures`,
    //     queryParams: ["symbol"],
    //     required: ["symbol"],
    //     description:
    //         "Align your investments with your values using the FMP ESG Investment Search API. Discover companies and funds based on Environmental, Social, and Governance (ESG) scores, performance, controversies, and business involvement criteria."
    // },
    esgSearch: {
        endpoint: `${BASE_URL_V4}/esg-environmental-social-governance-data`,
        queryParams: ["symbol"],
        required: ["symbol"],
        description:
            "Find companies and funds that align with your ESG values with FMP's ESG Search tool. Search by ESG rating, performance, controversies, and business involvement screens."
    },
    // esgRatings: {
    //     endpoint: `${BASE_URL}/esg-ratings`,
    //     queryParams: ["symbol"],
    //     required: ["symbol"],
    //     description:
    //         "Access comprehensive ESG ratings for companies and funds with the FMP ESG Ratings API. Make informed investment decisions based on environmental, social, and governance (ESG) performance data."
    // },
    esgRatings: {
        endpoint: `${BASE_URL_V4}/esg-environmental-social-governance-data-ratings`,
        queryParams: ["symbol"],
        required: ["symbol"],
        description:
            "Get ESG ratings for companies and funds to make informed investment decisions. FMP's ESG Ratings are based on a variety of data sources, including corporate sustainability reports, ESG research firms, and government agencies."
    },
    // esgBenchmark: {
    //     endpoint: `${BASE_URL}/esg-benchmark`,
    //     queryParams: ["year"],
    //     required: ["year"],
    //     description:
    //         "Evaluate the ESG performance of companies and funds with the FMP ESG Benchmark Comparison API. Compare ESG leaders and laggards within industries to make informed and responsible investment decisions."
    // },
    esgBenchmark: {
        endpoint: `${BASE_URL_V4}/esg-environmental-social-governance-sector-benchmark`,
        queryParams: ["year"],
        required: ["year"],
        description:
            "Compare the ESG performance of companies and funds to their peers with FMP's ESG Benchmark tool. Identify ESG leaders and laggards to make informed investment decisions."
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
