import { BASE_URL, apiConfigInterface, paramDescriptionInterface } from "../apiConstant";

export const directoryConfig: apiConfigInterface = {
    companySymbolsList: {
        endpoint: `${BASE_URL}/stock-list`,
        queryParams: [],
        required: [],
        description:
            "Easily retrieve a comprehensive list of financial symbols with the FMP Company Symbols List API. Access a broad range of stock symbols and other tradable financial instruments from various global exchanges, helping you explore the full range of available securities."
    },
    financialStatementSymbolsList: {
        endpoint: `${BASE_URL}/financial-statement-symbol-list`,
        queryParams: [],
        required: [],
        description:
            "Access a comprehensive list of companies with available financial statements through the FMP Financial Statement Symbols List API. Find companies listed on major global exchanges and obtain up-to-date financial data including income statements, balance sheets, and cash flow statements."
    },
    cikList: {
        endpoint: `${BASE_URL}/cik-list`,
        queryParams: ["limit"],
        required: ["limit"],
        description:
            "Access a comprehensive database of CIK (Central Index Key) numbers for SEC-registered entities with the FMP CIK List API. Essential for regulatory compliance, financial transactions, and investment research."
    },
    symbolChangesList: {
        endpoint: `${BASE_URL}/symbol-change`,
        queryParams: ["invalid", "limit"],
        required: ["limit"],
        description:
            "Stay informed about the latest stock symbol changes with the FMP Stock Symbol Changes API. Track changes due to mergers, acquisitions, stock splits, and name changes for accurate trading and analysis."
    },
    etfSymbolSearch: {
        endpoint: `${BASE_URL}/etf-list`,
        queryParams: [],
        required: [],
        description:
            "Quickly find ticker symbols and company names for Exchange Traded Funds (ETFs) using the FMP ETF Symbol Search API. Simplify identifying specific ETFs by name or ticker."
    },
    activelyTradingList: {
        endpoint: `${BASE_URL}/actively-trading-list`,
        queryParams: [],
        required: [],
        description:
            "List all actively trading companies and financial instruments with the FMP Actively Trading List API. Access real-time market activity for publicly traded securities."
    },
    // earningsTranscriptList: {
    //     endpoint: `${BASE_URL}/earnings-transcript-list`,
    //     queryParams: [],
    //     required: [],
    //     description:
    //         "Access available earnings transcripts for companies with the FMP Earnings Transcript List API. Retrieve companies along with the count of available earnings transcripts."
    // },
    availableExchanges: {
        endpoint: `${BASE_URL}/available-exchanges`,
        queryParams: [],
        required: [],
        description:
            "Access a complete list of supported stock exchanges using the FMP Available Exchanges API. Identify where securities are traded and filter data by exchange for further analysis."
    },
    availableSectors: {
        endpoint: `${BASE_URL}/available-sectors`,
        queryParams: [],
        required: [],
        description:
            "Access a complete list of industry sectors using the FMP Available Sectors API. Categorize and filter companies based on sectors for deeper market analysis."
    },
    availableIndustries: {
        endpoint: `${BASE_URL}/available-industries`,
        queryParams: [],
        required: [],
        description:
            "Access a comprehensive list of industries where stock symbols are available using the FMP Available Industries API. Filter and categorize companies by industry for focused research."
    },
    availableCountries: {
        endpoint: `${BASE_URL}/available-countries`,
        queryParams: [],
        required: [],
        description:
            "Access a comprehensive list of countries where stock symbols are available with the FMP Available Countries API. Filter and analyze securities based on country of origin or primary market."
    }
};

export const directoryParam: paramDescriptionInterface = {
    limit: {
        type: "number",
        description: "Example: 1000"
    },
    invalid: {
        type: "string",
        description: "Example: false"
    }
};
