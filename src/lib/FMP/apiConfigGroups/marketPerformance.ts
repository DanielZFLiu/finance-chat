import { BASE_URL, apiConfigInterface, paramDescriptionInterface } from "../apiConfig";

export const marketPerformanceConfig: apiConfigInterface = {
    marketSectorPerformanceSnapshot: {
        endpoint: `${BASE_URL}/sector-performance-snapshot`,
        queryParams: ["date", "exchange", "sector"],
        required: ["date", "sector"],
        description:
            "Get a snapshot of sector performance using the Market Sector Performance Snapshot API. Analyze how different industries are performing in the market based on average changes across sectors."
    },
    industryPerformanceSnapshot: {
        endpoint: `${BASE_URL}/industry-performance-snapshot`,
        queryParams: ["date", "exchange", "industry"],
        required: ["date", "industry"],
        description:
            "Access detailed performance data by industry using the Industry Performance Snapshot API. Analyze trends, movements, and daily performance metrics for specific industries across various stock exchanges."
    },
    historicalMarketSectorPerformance: {
        endpoint: `${BASE_URL}/historical-sector-performance`,
        queryParams: ["sector", "exchange", "from", "to"],
        required: ["sector"],
        description:
            "Access historical sector performance data using the Historical Market Sector Performance API. Review how different sectors have performed over time across various stock exchanges."
    },
    historicalIndustryPerformance: {
        endpoint: `${BASE_URL}/historical-industry-performance`,
        queryParams: ["industry", "exchange", "from", "to"],
        required: ["industry"],
        description:
            "Access historical performance data for industries using the Historical Industry Performance API. Track long-term trends and analyze how different industries have evolved over time across various stock exchanges."
    },
    sectorPESnapshot: {
        endpoint: `${BASE_URL}/sector-pe-snapshot`,
        queryParams: ["date", "exchange", "sector"],
        required: ["date", "sector"],
        description:
            "Retrieve the price-to-earnings (P/E) ratios for various sectors using the Sector P/E Snapshot API. Compare valuation levels across sectors to better understand market valuations."
    },
    industryPESnapshot: {
        endpoint: `${BASE_URL}/industry-pe-snapshot`,
        queryParams: ["date", "exchange", "industry"],
        required: ["date", "industry"],
        description:
            "View price-to-earnings (P/E) ratios for different industries using the Industry P/E Snapshot API. Analyze valuation levels across various industries to understand how each is priced relative to its earnings."
    },
    historicalSectorPE: {
        endpoint: `${BASE_URL}/historical-sector-pe`,
        queryParams: ["sector", "exchange", "from", "to"],
        required: ["sector"],
        description:
            "Access historical price-to-earnings (P/E) ratios for various sectors using the Historical Sector P/E API. Analyze how sector valuations have evolved over time to understand long-term trends and market shifts."
    },
    historicalIndustryPE: {
        endpoint: `${BASE_URL}/historical-industry-pe`,
        queryParams: ["industry", "exchange", "from", "to"],
        required: ["industry"],
        description:
            "Access historical price-to-earnings (P/E) ratios by industry using the Historical Industry P/E API. Track valuation trends across various industries to understand how market sentiment and valuations have evolved over time."
    },
    biggestStockGainers: {
        endpoint: `${BASE_URL}/biggest-gainers`,
        queryParams: [],
        required: [],
        description:
            "Track the stocks with the largest price increases using the Top Stock Gainers API. Identify the companies that are leading the market with significant price surges, offering potential growth opportunities."
    },
    biggestStockLosers: {
        endpoint: `${BASE_URL}/biggest-losers`,
        queryParams: [],
        required: [],
        description:
            "Access data on the stocks with the largest price drops using the Biggest Stock Losers API. Identify companies experiencing significant declines and track the stocks that are falling the fastest in the market."
    },
    topTradedStocks: {
        endpoint: `${BASE_URL}/most-actives`,
        queryParams: [],
        required: [],
        description:
            "View the most actively traded stocks using the Top Traded Stocks API. Identify the companies experiencing the highest trading volumes in the market and track where the most trading activity is happening."
    }
};

export const marketPerformanceParam: paramDescriptionInterface = {
    date: {
        type: "date",
        description: "Example: 2024-02-01"
    },
    exchange: {
        type: "string",
        description: "Example: NASDAQ"
    },
    sector: {
        type: "string",
        description: "Example: Energy"
    },
    industry: {
        type: "string",
        description: "Example: Biotechnology"
    },
    from: {
        type: "date",
        description: "Example: 2024-02-01"
    },
    to: {
        type: "date",
        description: "Example: 2024-03-01"
    }
};
