import { BASE_URL, apiConfigInterface, paramDescriptionInterface } from "../apiConstant";

export const forexConfig: apiConfigInterface = {
    forexCurrencyPairs: {
        endpoint: `${BASE_URL}/forex-list`,
        queryParams: [],
        required: [],
        description:
            "Access a comprehensive list of all currency pairs traded on the forex market with the FMP Forex Currency Pairs API. Analyze and track the performance of currency pairs to make informed investment decisions."
    },
    forexQuote: {
        endpoint: `${BASE_URL}/quote`,
        queryParams: ["symbol"],
        required: ["symbol"],
        description:
            "Access real-time forex quotes for currency pairs with the Forex Quote API. Retrieve up-to-date information on exchange rates and price changes to help monitor market movements."
    },
    forexQuoteSnapshot: {
        endpoint: `${BASE_URL}/quote-short`,
        queryParams: ["symbol"],
        required: ["symbol"],
        description:
            "Quickly access concise forex pair quotes with the Forex Quote Snapshot API. Get a fast look at live currency exchange rates, price changes, and volume in real time."
    },
    batchForexQuotes: {
        endpoint: `${BASE_URL}/batch-forex-quotes`,
        queryParams: ["short"],
        required: ["short"],
        description:
            "Easily access real-time quotes for multiple forex pairs simultaneously with the Batch Forex Quotes API. Stay updated on global currency exchange rates and monitor price changes across different markets."
    },
    historicalForexLightChart: {
        endpoint: `${BASE_URL}/historical-price-eod/light`,
        queryParams: ["symbol", "from", "to"],
        required: ["symbol", "from", "to"],
        description:
            "Access historical end-of-day forex prices with the Historical Forex Light Chart API. Track long-term price trends across different currency pairs to enhance your trading and analysis strategies."
    },
    fullHistoricalForexChart: {
        endpoint: `${BASE_URL}/historical-price-eod/full`,
        queryParams: ["symbol", "from", "to"],
        required: ["symbol", "from", "to"],
        description:
            "Access comprehensive historical end-of-day forex price data with the Full Historical Forex Chart API. Gain detailed insights into currency pair movements, including open, high, low, close (OHLC) prices, volume, and percentage changes."
    },
    oneMinuteForexIntervalChart: {
        endpoint: `${BASE_URL}/historical-chart/1min`,
        queryParams: ["symbol", "from", "to"],
        required: ["symbol", "from", "to"],
        description:
            "Access real-time 1-minute intraday forex data with the 1-Minute Forex Interval Chart API. Track short-term price movements for precise, up-to-the-minute insights on currency pair fluctuations."
    },
    fiveMinuteForexIntervalChart: {
        endpoint: `${BASE_URL}/historical-chart/5min`,
        queryParams: ["symbol", "from", "to"],
        required: ["symbol", "from", "to"],
        description:
            "Track short-term forex trends with the 5-Minute Forex Interval Chart API. Access detailed 5-minute intraday data to monitor currency pair price movements and market conditions in near real-time."
    },
    oneHourForexIntervalChart: {
        endpoint: `${BASE_URL}/historical-chart/1hour`,
        queryParams: ["symbol", "from", "to"],
        required: ["symbol", "from", "to"],
        description:
            "Track forex price movements over the trading day with the 1-Hour Forex Interval Chart API. This tool provides hourly intraday data for currency pairs, giving a detailed view of trends and market shifts."
    }
};

export const forexParam: paramDescriptionInterface = {
    symbol: {
        type: "string",
        description: "Example: EURUSD"
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
