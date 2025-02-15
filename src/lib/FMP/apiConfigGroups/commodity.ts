import { BASE_URL, apiConfigInterface, paramDescriptionInterface } from "../apiConfig";

export const commodityConfig: apiConfigInterface = {
    commoditiesList: {
        endpoint: `${BASE_URL}/commodities-list`,
        queryParams: [],
        required: [],
        description:
            "Access an extensive list of tracked commodities across various sectors, including energy, metals, and agricultural products. The FMP Commodities List API provides essential data on tradable commodities, giving investors the ability to explore market options in real-time."
    },
    commoditiesQuote: {
        endpoint: `${BASE_URL}/quote`,
        queryParams: ["symbol"],
        required: ["symbol"],
        description:
            "Access real-time price quotes for all commodities traded worldwide with the FMP Global Commodities Quotes API. Track market movements and identify investment opportunities with comprehensive price data."
    },
    commoditiesQuoteShort: {
        endpoint: `${BASE_URL}/quote-short`,
        queryParams: ["symbol"],
        required: ["symbol"],
        description:
            "Get fast and accurate quotes for commodities with the FMP Commodities Quick Quote API. Instantly access the current price, recent changes, and trading volume for various commodities in real-time."
    },
    realTimeBatchCommoditiesQuotes: {
        endpoint: `${BASE_URL}/batch-commodity-quotes`,
        queryParams: ["short"],
        required: ["short"],
        description:
            "Access real-time quotes for multiple commodities at once with the FMP Real-Time Batch Commodities Quotes API. Instantly track price changes, volume, and other key metrics for a broad range of commodities."
    },
    historicalLightChart: {
        endpoint: `${BASE_URL}/historical-price-eod/light`,
        queryParams: ["symbol", "from", "to"],
        required: ["symbol", "from", "to"],
        description:
            "Access historical end-of-day prices for various commodities with the FMP Historical Commodities Price API. Analyze past price movements, trading volume, and trends to support informed decision-making."
    },
    historicalFullChart: {
        endpoint: `${BASE_URL}/historical-price-eod/full`,
        queryParams: ["symbol", "from", "to"],
        required: ["symbol", "from", "to"],
        description:
            "Access full historical end-of-day price data for commodities with the FMP Comprehensive Commodities Price API. This API enables users to analyze long-term price trends, patterns, and market movements in great detail."
    },
    historicalChart1min: {
        endpoint: `${BASE_URL}/historical-chart/1min`,
        queryParams: ["symbol", "from", "to"],
        required: ["symbol", "from", "to"],
        description:
            "Track real-time, short-term price movements for commodities with the FMP 1-Minute Interval Commodities Chart API. This API provides detailed 1-minute interval data, enabling precise monitoring of intraday market changes."
    },
    historicalChart5min: {
        endpoint: `${BASE_URL}/historical-chart/5min`,
        queryParams: ["symbol", "from", "to"],
        required: ["symbol", "from", "to"],
        description:
            "Monitor short-term price movements with the FMP 5-Minute Interval Commodities Chart API. This API provides detailed 5-minute interval data, enabling users to track near-term price trends for more strategic trading and investment decisions."
    },
    historicalChart1hour: {
        endpoint: `${BASE_URL}/historical-chart/1hour`,
        queryParams: ["symbol", "from", "to"],
        required: ["symbol", "from", "to"],
        description:
            "Monitor hourly price movements and trends with the FMP 1-Hour Interval Commodities Chart API. This API provides hourly data, offering a detailed look at price fluctuations throughout the trading day to support mid-term trading strategies and market analysis."
    }
};

export const commodityParam: paramDescriptionInterface = {
    symbol: {
        type: "string",
        description: "Example: GCUSD"
    },
    from: {
        type: "date",
        description: "Example: 2024-11-04"
    },
    to: {
        type: "date",
        description: "Example: 2025-02-04"
    },
    short: {
        type: "boolean",
        description: "Example: true"
    }
};
