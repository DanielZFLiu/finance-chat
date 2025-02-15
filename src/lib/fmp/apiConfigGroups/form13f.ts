import { BASE_URL, apiConfigInterface, paramDescriptionInterface } from "../apiConfig";

export const form13fConfig: apiConfigInterface = {
    form13fFilings: {
        endpoint: `${BASE_URL}/institutional-ownership/latest`,
        queryParams: ["page", "limit"],
        required: [],
        description:
            "Stay up to date with the most recent SEC filings related to institutional ownership using the Institutional Ownership Filings API. This tool allows you to track the latest reports and disclosures from institutional investors, giving you a real-time view of major holdings and regulatory submissions."
    },
    secFilingsExtract: {
        endpoint: `${BASE_URL}/institutional-ownership/extract`,
        queryParams: ["cik", "year", "quarter"],
        required: ["cik", "year", "quarter"],
        description:
            "Extract detailed data directly from official SEC filings with the SEC Filings Extract API. Access key information such as company shares, security details, and filing links to analyze corporate disclosures effectively."
    },
    form13FFilingsDates: {
        endpoint: `${BASE_URL}/institutional-ownership/dates`,
        queryParams: ["cik"],
        required: ["cik"],
        description:
            "Retrieve the dates associated with Form 13F filings by institutional investors using the Form 13F Filings Dates API. This endpoint helps track stock holdings at specific points in time, offering valuable insights into institutional investment strategies."
    },
    filingsExtractAnalyticsByHolder: {
        endpoint: `${BASE_URL}/institutional-ownership/extract-analytics/holder`,
        queryParams: ["symbol", "year", "quarter"],
        required: ["symbol", "year", "quarter"],
        description:
            "Gain an analytical breakdown of institutional filings with the Filings Extract With Analytics By Holder API. This endpoint provides insights into stock movements, strategies, and portfolio changes by major institutional holders."
    },
    holderPerformanceSummary: {
        endpoint: `${BASE_URL}/institutional-ownership/holder-performance-summary`,
        queryParams: ["cik", "page"],
        required: ["cik"],
        description:
            "Track the performance of institutional investors with the Holder Performance Summary API. Monitor portfolio changes, market value fluctuations, and performance metrics to assess how institutional holders are faring over time."
    },
    holdersIndustryBreakdown: {
        endpoint: `${BASE_URL}/institutional-ownership/holder-industry-breakdown`,
        queryParams: ["cik", "year", "quarter"],
        required: ["cik", "year", "quarter"],
        description:
            "Analyze how institutional investors distribute their holdings across different sectors with the Holders Industry Breakdown API. This endpoint provides insights into industry investments and changes in investment strategies over time."
    },
    positionsSummary: {
        endpoint: `${BASE_URL}/institutional-ownership/symbol-positions-summary`,
        queryParams: ["symbol", "year", "quarter"],
        required: ["symbol", "year", "quarter"],
        description:
            "Obtain a comprehensive snapshot of institutional holdings for a specific stock using the Positions Summary API. Track key metrics such as the number of investors, share changes, total investment, and ownership percentages over time."
    },
    industryPerformanceSummary: {
        endpoint: `${BASE_URL}/institutional-ownership/industry-summary`,
        queryParams: ["year", "quarter"],
        required: ["year", "quarter"],
        description:
            "Explore the financial performance of various industries with the Industry Performance Summary API. This endpoint provides an overview of industry values over a specific period, helping investors assess sector health and make informed investment decisions."
    }
};

export const form13fParam: paramDescriptionInterface = {
    page: {
        type: "number",
        description: "Example: 0"
    },
    limit: {
        type: "number",
        description: "Example: 100"
    },
    cik: {
        type: "string",
        description: "Example: 0001388838"
    },
    year: {
        type: "string",
        description: "Example: 2023"
    },
    quarter: {
        type: "string",
        description: "Example: 3"
    },
    symbol: {
        type: "string",
        description: "Example: AAPL"
    }
};
