import { BASE_URL, apiConfigInterface, paramDescriptionInterface } from "../apiConstant";

export const cryptoConfig: apiConfigInterface = {
    cryptocurrencyList: {
        endpoint: `${BASE_URL}/cryptocurrency-list`,
        queryParams: [],
        required: [],
        description:
            "Access a comprehensive list of all cryptocurrencies traded on exchanges worldwide with the FMP Cryptocurrencies Overview API. Get detailed information on each cryptocurrency to inform your investment strategies."
    },
    fullCryptoQuote: {
        endpoint: `${BASE_URL}/quote`,
        queryParams: ["symbol"],
        required: ["symbol"],
        description:
            "Access real-time quotes for all cryptocurrencies with the FMP Full Cryptocurrency Quote API. Obtain comprehensive price data including current, high, low, and open prices."
    },
    cryptoQuoteShort: {
        endpoint: `${BASE_URL}/quote-short`,
        queryParams: ["symbol"],
        required: ["symbol"],
        description:
            "Access real-time cryptocurrency quotes with the FMP Cryptocurrency Quick Quote API. Get a concise overview of current crypto prices, changes, and trading volume for a wide range of digital assets."
    },
    realTimeCryptoBatchQuotes: {
        endpoint: `${BASE_URL}/batch-crypto-quotes`,
        queryParams: ["short"],
        required: ["short"],
        description:
            "Access live price data for a wide range of cryptocurrencies with the FMP Real-Time Cryptocurrency Batch Quotes API. Get real-time updates on prices, market changes, and trading volumes for digital assets in a single request."
    },
    historicalCryptoPriceSnapshot: {
        endpoint: `${BASE_URL}/historical-price-eod/light`,
        queryParams: ["symbol", "from", "to"],
        required: ["symbol", "from", "to"],
        description:
            "Access historical end-of-day prices for a variety of cryptocurrencies with the Historical Cryptocurrency Price Snapshot API. Track trends in price and trading volume over time to better understand market behavior."
    },
    fullHistoricalCryptoData: {
        endpoint: `${BASE_URL}/historical-price-eod/full`,
        queryParams: ["symbol", "from", "to"],
        required: ["symbol", "from", "to"],
        description:
            "Access comprehensive end-of-day (EOD) price data for cryptocurrencies with the Full Historical Cryptocurrency Data API. Analyze long-term price trends, market movements, and trading volumes to inform strategic decisions."
    },
    cryptoIntraday1Min: {
        endpoint: `${BASE_URL}/historical-chart/1min`,
        queryParams: ["symbol", "from", "to"],
        required: ["symbol", "from", "to"],
        description:
            "Get real-time, 1-minute interval price data for cryptocurrencies with the 1-Minute Cryptocurrency Intraday Data API. Monitor short-term price fluctuations and trading volume to stay updated on market movements."
    },
    cryptoIntraday5Min: {
        endpoint: `${BASE_URL}/historical-chart/5min`,
        queryParams: ["symbol", "from", "to"],
        required: ["symbol", "from", "to"],
        description:
            "Analyze short-term price trends with the 5-Minute Interval Cryptocurrency Data API. Access real-time, intraday price data for cryptocurrencies to monitor rapid market movements and optimize trading strategies."
    },
    cryptoIntraday1Hour: {
        endpoint: `${BASE_URL}/historical-chart/1hour`,
        queryParams: ["symbol", "from", "to"],
        required: ["symbol", "from", "to"],
        description:
            "Access detailed 1-hour intraday price data for cryptocurrencies with the 1-Hour Interval Cryptocurrency Data API. Track hourly price movements to gain insights into market trends and make informed trading decisions throughout the day."
    }
};

export const cryptoParam: paramDescriptionInterface = {
    symbol: {
        type: "string",
        description: "Example: BTCUSD"
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
