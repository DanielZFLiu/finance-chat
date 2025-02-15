import { BASE_URL, apiConfigInterface, paramDescriptionInterface } from "../apiConstant";

export const indexConfig: apiConfigInterface = {
    stockMarketIndexesList: {
        endpoint: `${BASE_URL}/index-list`,
        queryParams: [], 
        required: [],
        description:
            "Retrieve a comprehensive list of stock market indexes across global exchanges using the FMP Stock Market Indexes List API. This API provides essential information such as the symbol, name, exchange, and currency for each index, helping analysts and investors keep track of various market benchmarks."
    },
    stockIndexQuote: {
        endpoint: `${BASE_URL}/quote`,
        queryParams: ["symbol"],
        required: ["symbol"],
        description:
            "Access real-time stock index quotes with the Stock Index Quote API. Stay updated with the latest price changes, daily highs and lows, volume, and other key metrics for major stock indices around the world."
    },
    stockIndexShortQuote: {
        endpoint: `${BASE_URL}/quote-short`,
        queryParams: ["symbol"],
        required: ["symbol"],
        description:
            "Access concise stock index quotes with the Stock Index Short Quote API. This API provides a snapshot of the current price, change, and volume for stock indexes, making it ideal for a quick overview of market movements."
    },
    allIndexQuotes: {
        endpoint: `${BASE_URL}/batch-index-quotes`,
        queryParams: ["short"],
        required: ["short"],
        description:
            "The All Index Quotes API provides real-time quotes for a wide range of stock indexes in a single request, giving users a broad view of the financial markets."
    },
    historicalStockPriceData: {
        endpoint: `${BASE_URL}/historical-price-eod/light`,
        queryParams: ["symbol", "from", "to"],
        required: ["symbol", "from", "to"],
        description:
            "Retrieve end-of-day historical prices for stock indexes using the Historical Stock Price Data API. This API provides essential data such as date, price, and volume for detailed price movement analysis."
    },
    detailedHistoricalStockPriceData: {
        endpoint: `${BASE_URL}/historical-price-eod/full`,
        queryParams: ["symbol", "from", "to"],
        required: ["symbol", "from", "to"],
        description:
            "Access full historical end-of-day prices for stock indexes using the Detailed Historical Stock Price Data API. Get comprehensive information including open, high, low, close prices, volume, and additional metrics."
    },
    intraday1MinPriceData: {
        endpoint: `${BASE_URL}/historical-chart/1min`,
        queryParams: ["symbol", "from", "to"],
        required: ["symbol", "from", "to"],
        description:
            "Retrieve 1-minute interval intraday data for stock indexes using the Intraday 1-Minute Price Data API. Ideal for tracking short-term price movements and trading volume."
    },
    intraday5MinPriceData: {
        endpoint: `${BASE_URL}/historical-chart/5min`,
        queryParams: ["symbol", "from", "to"],
        required: ["symbol", "from", "to"],
        description:
            "Retrieve 5-minute interval intraday price data for stock indexes using the Intraday 5-Minute Price Data API. Get insights into price movements and trading volume in 5-minute windows."
    },
    intraday1HourPriceData: {
        endpoint: `${BASE_URL}/historical-chart/1hour`,
        queryParams: ["symbol", "from", "to"],
        required: ["symbol", "from", "to"],
        description:
            "Access 1-hour interval intraday data for stock indexes using the Intraday 1-Hour Price Data API. Monitor detailed hourly price movements and trading volume."
    },
    sp500Index: {
        endpoint: `${BASE_URL}/sp500-constituent`,
        queryParams: [],
        required: [],
        description:
            "Access detailed data on the S&P 500 index using the S&P 500 Index API. Track performance and key information of the companies that constitute this major market index."
    },
    nasdaqIndex: {
        endpoint: `${BASE_URL}/nasdaq-constituent`,
        queryParams: [],
        required: [],
        description:
            "Access comprehensive data for the Nasdaq index with the Nasdaq Index API. Monitor real-time movements and track the historical performance of Nasdaq-listed companies."
    },
    dowJonesIndex: {
        endpoint: `${BASE_URL}/dowjones-constituent`,
        queryParams: [],
        required: [],
        description:
            "Access data on the Dow Jones Industrial Average using the Dow Jones API. Get current values, analyze trends, and obtain detailed information about its constituent companies."
    },
    historicalSp500: {
        endpoint: `${BASE_URL}/historical-sp500-constituent`,
        queryParams: [],
        required: [],
        description:
            "Retrieve historical data for the S&P 500 index using the Historical S&P 500 API. Analyze past changes in the index composition, including company additions and removals."
    },
    historicalNasdaq: {
        endpoint: `${BASE_URL}/historical-nasdaq-constituent`,
        queryParams: [],
        required: [],
        description:
            "Access historical data for the Nasdaq index using the Historical Nasdaq API. Examine changes in index composition over time, including company additions and removals."
    },
    historicalDowJones: {
        endpoint: `${BASE_URL}/historical-dowjones-constituent`,
        queryParams: [],
        required: [],
        description:
            "Access historical data for the Dow Jones Industrial Average using the Historical Dow Jones API. Study index composition changes and performance across different periods."
    }
};

export const indexParam: paramDescriptionInterface = {
    symbol: {
        type: "string",
        description: "Example: ^GSPC"
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
