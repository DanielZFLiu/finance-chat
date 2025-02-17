import { BASE_URL, apiConfigInterface, paramDescriptionInterface } from "../apiConstant";

export const form13fConfig: apiConfigInterface = {
    form13fFilings: {
        endpoint: `${BASE_URL}/institutional-ownership/latest`,
        queryParams: ["page", "limit"],
        required: [],
        description:
            "Stay up to date with the most recent SEC filings related to institutional ownership using the Institutional Ownership Filings API. This tool allows you to track the latest reports and disclosures from institutional investors, giving you a real-time view of major holdings and regulatory submissions. The page parameter cannot equal to 0."
    },
    secFilingsExtract: {
        endpoint: `${BASE_URL}/institutional-ownership/extract`,
        queryParams: ["cik", "year", "quarter"],
        required: ["cik", "year", "quarter"],
        description:
            "Extract detailed data directly from official SEC filings with the SEC Filings Extract API. Access key information such as company shares, security details, and filing links to analyze corporate disclosures effectively. Only year = 2025 is available."
    },
    form13FFilingsDates: {
        endpoint: `${BASE_URL}/institutional-ownership/dates`,
        queryParams: ["cik"],
        required: ["cik"],
        description:
            "Retrieve the dates associated with Form 13F filings by institutional investors using the Form 13F Filings Dates API. This endpoint helps track stock holdings at specific points in time, offering valuable insights into institutional investment strategies."
    },
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
