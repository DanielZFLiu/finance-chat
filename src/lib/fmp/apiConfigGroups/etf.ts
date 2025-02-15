import { BASE_URL, apiConfigInterface, paramDescriptionInterface } from "../apiConstant";

export const etfConfig: apiConfigInterface = {
    etfFundHoldings: {
        endpoint: `${BASE_URL}/etf/holdings`,
        queryParams: ["symbol"],
        required: ["symbol"],
        description:
            "Get a detailed breakdown of the assets held within ETFs and mutual funds using the FMP ETF & Fund Holdings API. Access real-time data on the specific securities and their weights in the portfolio, providing insights into asset composition and fund strategies."
    },
    etfFundInfo: {
        endpoint: `${BASE_URL}/etf/info`,
        queryParams: ["symbol"],
        required: ["symbol"],
        description:
            "Access comprehensive data on ETFs and mutual funds with the FMP ETF & Mutual Fund Information API. Retrieve essential details such as ticker symbol, fund name, expense ratio, assets under management, and more."
    },
    etfFundCountryAllocation: {
        endpoint: `${BASE_URL}/etf/country-weightings`,
        queryParams: ["symbol"],
        required: ["symbol"],
        description:
            "Gain insight into how ETFs and mutual funds distribute assets across different countries with the FMP ETF & Fund Country Allocation API. This tool provides detailed information on the percentage of assets allocated to various regions, helping you make informed investment decisions."
    },
    etfAssetExposure: {
        endpoint: `${BASE_URL}/etf/asset-exposure`,
        queryParams: ["symbol"],
        required: ["symbol"],
        description:
            "Discover which ETFs hold specific stocks with the FMP ETF Asset Exposure API. Access detailed information on market value, share numbers, and weight percentages for assets within ETFs."
    },
    etfSectorWeighting: {
        endpoint: `${BASE_URL}/etf/sector-weightings`,
        queryParams: ["symbol"],
        required: ["symbol"],
        description:
            "The FMP ETF Sector Weighting API provides a breakdown of the percentage of an ETF's assets that are invested in each sector. For example, an investor may want to invest in an ETF that has a high exposure to the technology sector if they believe that the technology sector is poised for growth."
    },
    mutualFundEtfDisclosure: {
        endpoint: `${BASE_URL}/funds/disclosure-holders-latest`,
        queryParams: ["symbol"],
        required: ["symbol"],
        description:
            "Access the latest disclosures from mutual funds and ETFs with the FMP Mutual Fund & ETF Disclosure API. This API provides updates on filings, changes in holdings, and other critical disclosure data for mutual funds and ETFs."
    },
    mutualFundDisclosures: {
        endpoint: `${BASE_URL}/funds/disclosure`,
        queryParams: ["symbol", "year", "quarter", "cik"],
        required: ["symbol", "year", "quarter"],
        description:
            "Access comprehensive disclosure data for mutual funds with the FMP Mutual Fund Disclosures API. Analyze recent filings, balance sheets, and financial reports to gain insights into mutual fund portfolios."
    },
    mutualFundEtfDisclosureNameSearch: {
        endpoint: `${BASE_URL}/funds/disclosure-holders-search`,
        queryParams: ["name"],
        required: ["name"],
        description:
            "Easily search for mutual fund and ETF disclosures by name using the Mutual Fund & ETF Disclosure Name Search API. This API allows you to find specific reports and filings based on the fund or ETF name, providing essential details like CIK number, entity information, and reporting file number."
    },
    fundEtfDisclosuresByDate: {
        endpoint: `${BASE_URL}/funds/disclosure-dates`,
        queryParams: ["symbol", "cik"],
        required: ["symbol"],
        description:
            "Retrieve detailed disclosures for mutual funds and ETFs based on filing dates with the FMP Fund & ETF Disclosures by Date API. Stay current with the latest filings and track regulatory updates effectively."
    }
};

export const etfParam: paramDescriptionInterface = {
    symbol: {
        type: "string",
        description: "Example: SPY"
    },
    year: {
        type: "string",
        description: "Example: 2023"
    },
    quarter: {
        type: "string",
        description: "Example: 4"
    },
    cik: {
        type: "string",
        description: "Example: 0000036405"
    },
    name: {
        type: "string",
        description:
            "Example: Federated Hermes Government Income Securities, Inc."
    }
};
