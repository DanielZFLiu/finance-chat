import { BASE_URL, apiConfigInterface, paramDescriptionInterface } from "../apiConfig";

export const insiderTradesConfig: apiConfigInterface = {
    latestInsiderTrading: {
        endpoint: `${BASE_URL}/insider-trading/latest`,
        queryParams: ["date", "page", "limit"],
        required: ["date"],
        description:
            "Access the latest insider trading activity using the Latest Insider Trading API. Track which company insiders are buying or selling stocks and analyze their transactions."
    },
    searchInsiderTrades: {
        endpoint: `${BASE_URL}/insider-trading/search`,
        queryParams: ["symbol", "page", "limit", "reportingCik", "companyCik", "transactionType"],
        required: ["symbol"],
        description:
            "Search insider trading activity by company or symbol using the Search Insider Trades API. Find specific trades made by corporate insiders, including executives and directors."
    },
    searchInsiderTradesByReportingName: {
        endpoint: `${BASE_URL}/insider-trading/reporting-name`,
        queryParams: ["name"],
        required: ["name"],
        description:
            "Search for insider trading activity by reporting name using the Search Insider Trades by Reporting Name API. Track trading activities of specific individuals or groups involved in corporate insider transactions."
    },
    insiderTransactionTypes: {
        endpoint: `${BASE_URL}/insider-trading-transaction-type`,
        queryParams: [],
        required: [],
        description:
            "Access a comprehensive list of insider transaction types with the All Insider Transaction Types API. This API provides details on various transaction actions, including purchases, sales, and other corporate actions involving insider trading."
    },
    insiderTradeStatistics: {
        endpoint: `${BASE_URL}/insider-trading/statistics`,
        queryParams: ["symbol"],
        required: ["symbol"],
        description:
            "Analyze insider trading activity with the Insider Trade Statistics API. This API provides key statistics on insider transactions, including total purchases, sales, and trends for specific companies or stock symbols."
    },
    acquisitionOwnership: {
        endpoint: `${BASE_URL}/acquisition-of-beneficial-ownership`,
        queryParams: ["symbol", "limit"],
        required: ["symbol"],
        description:
            "Track changes in stock ownership during acquisitions using the Acquisition Ownership API. This API provides detailed information on how mergers, takeovers, or beneficial ownership changes impact the stock ownership structure of a company."
    }
};

export const insiderTradesParam: paramDescriptionInterface = {
    date: {
        type: "date",
        description: "Example: 2024-01-01"
    },
    page: {
        type: "number",
        description: "Example: 0"
    },
    limit: {
        type: "number",
        description: "Example: 100 or 2000 depending on the endpoint"
    },
    reportingCik: {
        type: "string",
        description: "Example: 0001496686"
    },
    companyCik: {
        type: "string",
        description: "Example: 0000320193"
    },
    transactionType: {
        type: "string",
        description: "Example: S-Sale"
    },
    name: {
        type: "string",
        description: "Example: Zuckerberg"
    }
};
