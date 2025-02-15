import { BASE_URL, apiConfigInterface, paramDescriptionInterface } from "../apiConstant";

export const searchConfig: apiConfigInterface = {
    stockSymbolSearch: {
        endpoint: `${BASE_URL}/search-symbol`,
        queryParams: ["query", "limit", "exchange"],
        required: ["query"],
        description:
            "Easily find the ticker symbol of any stock with the FMP Stock Symbol Search API. Search by company name or symbol across multiple global markets."
    },
    companyNameSearch: {
        endpoint: `${BASE_URL}/search-name`,
        queryParams: ["query", "limit", "exchange"],
        required: ["query"],
        description:
            "Search for ticker symbols, company names, and exchange details for equity securities and ETFs listed on various exchanges with the FMP Name Search API. This endpoint is useful for retrieving ticker symbols when you know the full or partial company or asset name but not the symbol identifier."
    },
    cikSearch: {
        endpoint: `${BASE_URL}/search-cik`,
        queryParams: ["cik", "limit"],
        required: ["cik"],
        description:
            "Easily retrieve the Central Index Key (CIK) for publicly traded companies with the FMP CIK API. Access unique identifiers needed for SEC filings and regulatory documents for a streamlined compliance and financial analysis process."
    },
    cusipSearch: {
        endpoint: `${BASE_URL}/search-cusip`,
        queryParams: ["cusip"],
        required: ["cusip"],
        description:
            "Easily search and retrieve financial securities information by CUSIP number using the FMP CUSIP API. Find key details such as company name, stock symbol, and market capitalization associated with the CUSIP."
    },
    isinSearch: {
        endpoint: `${BASE_URL}/search-isin`,
        queryParams: ["isin"],
        required: ["isin"],
        description:
            "Easily search and retrieve the International Securities Identification Number (ISIN) for financial securities using the FMP ISIN API. Find key details such as company name, stock symbol, and market capitalization associated with the ISIN."
    },
    stockScreener: {
        endpoint: `${BASE_URL}/company-screener`,
        queryParams: [
            "marketCapMoreThan",
            "marketCapLowerThan",
            "sector",
            "industry",
            "betaMoreThan",
            "betaLowerThan",
            "priceMoreThan",
            "priceLowerThan",
            "dividendMoreThan",
            "dividendLowerThan",
            "volumeMoreThan",
            "volumeLowerThan",
            "exchange",
            "country",
            "isEtf",
            "isFund",
            "isActivelyTrading",
            "limit",
            "includeAllShareClasses"
        ],
        required: [],
        description:
            "Discover stocks that align with your investment strategy using the FMP Stock Screener API. Filter stocks based on market cap, price, volume, beta, sector, country, and more to identify the best opportunities."
    },
    exchangeVariantsSearch: {
        endpoint: `${BASE_URL}/search-exchange-variants`,
        queryParams: ["symbol"],
        required: ["symbol"],
        description:
            "Search across multiple public exchanges to find where a given stock symbol is listed using the FMP Exchange Variants API. This allows users to quickly identify all the exchanges where a security is actively traded."
    }
};

export const searchParam: paramDescriptionInterface = {
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
    },
    cik: {
        type: "string",
        description: "Example: 320193"
    },
    cusip: {
        type: "string",
        description: "Example: 037833100"
    },
    isin: {
        type: "string",
        description: "Example: US0378331005"
    },
    marketCapMoreThan: {
        type: "number",
        description: "Example: 1000000"
    },
    marketCapLowerThan: {
        type: "number",
        description: "Example: 1000000000"
    },
    sector: {
        type: "string",
        description: "Example: Technology"
    },
    industry: {
        type: "string",
        description: "Example: Consumer Electronics"
    },
    betaMoreThan: {
        type: "number",
        description: "Example: 0.5"
    },
    betaLowerThan: {
        type: "number",
        description: "Example: 1.5"
    },
    priceMoreThan: {
        type: "number",
        description: "Example: 10"
    },
    priceLowerThan: {
        type: "number",
        description: "Example: 200"
    },
    dividendMoreThan: {
        type: "number",
        description: "Example: 0.5"
    },
    dividendLowerThan: {
        type: "number",
        description: "Example: 2"
    },
    volumeMoreThan: {
        type: "number",
        description: "Example: 1000"
    },
    volumeLowerThan: {
        type: "number",
        description: "Example: 1000000"
    },
    country: {
        type: "string",
        description: "Example: US"
    },
    isEtf: {
        type: "boolean",
        description: "Example: false"
    },
    isFund: {
        type: "boolean",
        description: "Example: false"
    },
    isActivelyTrading: {
        type: "boolean",
        description: "Example: true"
    },
    includeAllShareClasses: {
        type: "boolean",
        description: "Example: false"
    },
    symbol: {
        type: "string",
        description: "Example: AAPL"
    }
};
