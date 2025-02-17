import { BASE_URL, BASE_URL_V4, apiConfigInterface, paramDescriptionInterface } from "../apiConstant";

export const companyConfig: apiConfigInterface = {
    companyProfileData: {
        endpoint: `${BASE_URL}/profile`,
        queryParams: ["symbol"],
        required: ["symbol"],
        description:
            "Access detailed company profile data with the FMP Company Profile Data API. This API provides key financial and operational information for a specific stock symbol, including the company's market capitalization, stock price, industry, and much more."
    },
    companyProfileByCik: {
        endpoint: `${BASE_URL}/profile-cik`,
        queryParams: ["cik"],
        required: ["cik"],
        description:
            "Retrieve detailed company profile data by CIK (Central Index Key) with the FMP Company Profile by CIK API. This API allows users to search for companies using their unique CIK identifier and access a full range of company data, including stock price, market capitalization, industry, and much more."
    },
    companyNotes: {
        endpoint: `${BASE_URL}/company-notes`,
        queryParams: ["symbol"],
        required: ["symbol"],
        description:
            "Retrieve detailed information about company-issued notes with the FMP Company Notes API. Access essential data such as CIK number, stock symbol, note title, and the exchange where the notes are listed."
    },
    stockPeerComparison: {
        endpoint: `${BASE_URL}/stock-peers`,
        queryParams: ["symbol"],
        required: ["symbol"],
        description:
            "Identify and compare companies within the same sector and market capitalization range using the FMP Stock Peer Comparison API. Gain insights into how a company stacks up against its peers on the same exchange."
    },
    delistedCompanies: {
        endpoint: `${BASE_URL}/delisted-companies`,
        queryParams: ["limit", "page"],
        required: [],
        description:
            "Stay informed with the FMP Delisted Companies API. Access a comprehensive list of companies that have been delisted from US exchanges to avoid trading in risky stocks and identify potential financial troubles."
    },
    companyEmployeeCount: {
        endpoint: `${BASE_URL}/employee-count`,
        queryParams: ["symbol", "limit"],
        required: ["symbol"],
        description:
            "Retrieve detailed workforce information for companies, including employee count, reporting period, and filing date, using the FMP Company Employee Count API. The API also provides direct links to official SEC documents for further verification and in-depth research."
    },
    companyHistoricalEmployeeCount: {
        endpoint: `${BASE_URL}/historical-employee-count`,
        queryParams: ["symbol", "limit", "page"],
        required: ["symbol"],
        description:
            "Access historical employee count data for a company based on specific reporting periods with the FMP Company Historical Employee Count API. Analyze growth trends and operational changes over time."
    },
    companyMarketCap: {
        endpoint: `${BASE_URL}/market-capitalization`,
        queryParams: ["symbol"],
        required: ["symbol"],
        description:
            "Retrieve the market capitalization for a specific company on any given date using the FMP Company Market Capitalization API. This API provides essential data to assess the size and value of a company in the stock market."
    },
    batchMarketCap: {
        endpoint: `${BASE_URL}/market-capitalization-batch`,
        queryParams: ["symbols"],
        required: ["symbols"],
        description:
            "Retrieve market capitalization data for multiple companies in a single request with the FMP Batch Market Capitalization API. Compare the market size of various companies simultaneously."
    },
    historicalMarketCap: {
        endpoint: `${BASE_URL}/historical-market-capitalization`,
        queryParams: ["symbol", "limit", "from", "to"],
        required: ["symbol", "from", "to"],
        description:
            "Access historical market capitalization data for a company using the FMP Historical Market Capitalization API. Track changes in market value over time to assess long-term growth or decline."
    },
    companyShareFloatAndLiquidity: {
        endpoint: `${BASE_URL}/shares-float`,
        queryParams: ["symbol"],
        required: ["symbol"],
        description:
            "Understand the liquidity and volatility of a stock with the FMP Company Share Float and Liquidity API. Access data on free float, float shares, and outstanding shares for a comprehensive liquidity analysis."
    },
    allSharesFloat: {
        endpoint: `${BASE_URL}/shares-float-all`,
        queryParams: [],
        required: [],
        description:
            "Access comprehensive shares float data for all available companies with the FMP All Shares Float API. Retrieve critical information such as free float, float shares, and outstanding shares."
    },
    latestMergersAcquisitions: {
        endpoint: `${BASE_URL}/mergers-acquisitions-latest`,
        queryParams: ["page", "limit"],
        required: [],
        description:
            "Access real-time data on the latest mergers and acquisitions with the FMP Latest Mergers and Acquisitions API. Get key information such as transaction date, company names, and links to detailed filing information."
    },
    searchMergersAcquisitions: {
        endpoint: `${BASE_URL}/mergers-acquisitions-search`,
        queryParams: ["name"],
        required: ["name"],
        description:
            "Search for specific mergers and acquisitions data with the FMP Search Mergers and Acquisitions API. Retrieve detailed information on M&A activity, including acquiring and targeted companies, transaction dates, and links to official SEC filings."
    },
    companyExecutives: {
        endpoint: `${BASE_URL}/key-executives`,
        queryParams: ["symbol", "active"],
        required: ["symbol"],
        description:
            "Retrieve detailed information on company executives with the FMP Company Executives API. Access essential data about key executives including their name, title, compensation, and demographic details."
    },
    // executiveCompensation: {
    //     endpoint: `${BASE_URL}/governance-executive-compensation`,
    //     queryParams: ["symbol"],
    //     required: ["symbol"],
    //     description:
    //         "Retrieve comprehensive compensation data for company executives with the FMP Executive Compensation API. Access detailed information on salaries, stock awards, total compensation, and other financial data along with filing details and links to official documents."
    // },
    executiveCompensation: {
        endpoint: `${BASE_URL_V4}/governance/executive_compensation`,
        queryParams: ["symbol"],
        required: ["symbol"],
        description:
            "Understand how a company compensates its executives with our Executive Compensation endpoint. This endpoint provides information such as salary, bonus, and stock options for each executive."
    },
    // executiveCompensationBenchmark: {
    //     endpoint: `${BASE_URL}/executive-compensation-benchmark`,
    //     queryParams: ["year"],
    //     required: ["year"],
    //     description:
    //         "Gain access to average executive compensation data across various industries with the FMP Executive Compensation Benchmark API. Compare executive pay by industry and understand compensation trends and benchmarks."
    // },
    executiveCompensationBenchmark: {
        endpoint: `${BASE_URL_V4}/executive-compensation-benchmark`,
        queryParams: ["year"],
        required: ["year"],
        description:
            "Compare a company's executive compensation to other companies in the same industry with our Compensation Benchmark endpoint. This endpoint can help you understand how competitive a company's executive compensation is."
    }
};

export const companyParam: paramDescriptionInterface = {
    symbol: {
        type: "string",
        description: "Example: AAPL"
    },
    cik: {
        type: "string",
        description: "Example: 320193"
    },
    limit: {
        type: "number",
        description: "Example: 100"
    },
    page: {
        type: "number",
        description: "Example: 0"
    },
    from: {
        type: "date",
        description: "Example: 2024-01-01"
    },
    to: {
        type: "date",
        description: "Example: 2024-03-01"
    },
    symbols: {
        type: "string",
        description: "Example: AAPL,MSFT,GOOG"
    },
    name: {
        type: "string",
        description: "Example: Apple"
    },
    active: {
        type: "string",
        description: "Example: TRUE"
    },
    year: {
        type: "string",
        description: "Example: 2023"
    }
};
