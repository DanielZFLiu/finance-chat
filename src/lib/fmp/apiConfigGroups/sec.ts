import { BASE_URL, apiConfigInterface, paramDescriptionInterface } from "../apiConstant";

export const secConfig: apiConfigInterface = {
    latest8kSecFilings: {
        endpoint: `${BASE_URL}/sec-filings-8k`,
        queryParams: ["from", "to", "page", "limit"],
        required: ["from", "to"],
        description:
            "Stay up-to-date with the most recent 8-K filings from publicly traded companies using the FMP Latest 8-K SEC Filings API. Get real-time access to significant company events such as mergers, acquisitions, leadership changes, and other material events that may impact the market."
    },
    latestSecFilings: {
        endpoint: `${BASE_URL}/sec-filings-financials`,
        queryParams: ["from", "to", "page", "limit"],
        required: ["from", "to"],
        description:
            "Stay updated with the most recent SEC filings from publicly traded companies using the FMP Latest SEC Filings API. Access essential regulatory documents, including financial statements, annual reports, 8-K, 10-K, and 10-Q forms."
    },
    secFilingsByFormType: {
        endpoint: `${BASE_URL}/sec-filings-search/form-type`,
        queryParams: ["formType", "from", "to", "page", "limit"],
        required: ["formType", "from", "to"],
        description:
            "Search for specific SEC filings by form type with the FMP SEC Filings By Form Type API. Retrieve filings such as 10-K, 10-Q, 8-K, and others, filtered by the exact type of document you're looking for."
    },
    secFilingsBySymbol: {
        endpoint: `${BASE_URL}/sec-filings-search/symbol`,
        queryParams: ["symbol", "from", "to", "page", "limit"],
        required: ["symbol", "from", "to"],
        description:
            "Search and retrieve SEC filings by company symbol using the FMP SEC Filings By Symbol API. Gain direct access to regulatory filings such as 8-K, 10-K, and 10-Q reports for publicly traded companies."
    },
    secFilingsByCik: {
        endpoint: `${BASE_URL}/sec-filings-search/cik`,
        queryParams: ["cik", "from", "to", "page", "limit"],
        required: ["cik", "from", "to"],
        description:
            "Search for SEC filings using the FMP SEC Filings By CIK API. Access detailed regulatory filings by Central Index Key (CIK) number, enabling you to track all filings related to a specific company or entity."
    },
    secFilingsByName: {
        endpoint: `${BASE_URL}/sec-filings-company-search/name`,
        queryParams: ["company"],
        required: ["company"],
        description:
            "Search for SEC filings by company or entity name using the FMP SEC Filings By Name API. Quickly retrieve official filings for any organization based on its name."
    },
    secCompanySearchBySymbol: {
        endpoint: `${BASE_URL}/sec-filings-company-search/symbol`,
        queryParams: ["symbol"],
        required: ["symbol"],
        description:
            "Find company information and regulatory filings using a stock symbol with the FMP SEC Filings Company Search By Symbol API. Quickly access essential company details based on stock ticker symbols."
    },
    secCompanySearchByCik: {
        endpoint: `${BASE_URL}/sec-filings-company-search/cik`,
        queryParams: ["cik"],
        required: ["cik"],
        description:
            "Easily find company information using a CIK (Central Index Key) with the FMP SEC Filings Company Search By CIK API. Access essential company details and filings linked to a specific CIK number."
    },
    secCompanyFullProfile: {
        endpoint: `${BASE_URL}/sec-profile`,
        queryParams: ["symbol"],
        required: ["symbol"],
        description:
            "Retrieve detailed company profiles, including business descriptions, executive details, contact information, and financial data with the FMP SEC Company Full Profile API."
    },
    industryClassificationList: {
        endpoint: `${BASE_URL}/standard-industrial-classification-list`,
        queryParams: ["industryTitle", "sicCode"],
        required: [],
        description:
            "Retrieve a comprehensive list of industry classifications, including Standard Industrial Classification (SIC) codes and industry titles with the FMP Industry Classification List API."
    },
    industryClassificationSearch: {
        endpoint: `${BASE_URL}/industry-classification-search`,
        queryParams: ["symbol", "cik", "sicCode"],
        required: ["sicCode"],
        description:
            "Search and retrieve industry classification details for companies, including SIC codes, industry titles, and business information, with the FMP Industry Classification Search API."
    },
    allIndustryClassification: {
        endpoint: `${BASE_URL}/all-industry-classification`,
        queryParams: [],
        required: [],
        description:
            "Access comprehensive industry classification data for companies across all sectors with the FMP All Industry Classification API."
    }
};

export const secParam: paramDescriptionInterface = {
    from: {
        type: "date",
        description: "Example: 2024-01-01"
    },
    to: {
        type: "date",
        description: "Example: 2024-03-01"
    },
    page: {
        type: "number",
        description: "Example: 0"
    },
    limit: {
        type: "number",
        description: "Example: 100"
    },
    symbol: {
        type: "string",
        description: "Example: AAPL"
    },
    formType: {
        type: "string",
        description: "Example: 8-K"
    },
    cik: {
        type: "string",
        description: "Example: 0000320193"
    },
    company: {
        type: "string",
        description: "Example: Berkshire"
    },
    industryTitle: {
        type: "string",
        description: "Example: AGRICULTURAL PRODUCTION-CROPS"
    },
    sicCode: {
        type: "string",
        description: "Example: 7371"
    }
};
