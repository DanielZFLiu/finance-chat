import { BASE_URL, apiConfigInterface, paramDescriptionInterface } from "../apiConstant";

export const quoteConfig: apiConfigInterface = {
    stockQuote: {
        endpoint: `${BASE_URL}/quote`,
        queryParams: ["symbol"],
        required: ["symbol"],
        description:
            "Access real-time stock quotes with the FMP Stock Quote API. Get up-to-the-minute prices, changes, and volume data for individual stocks."
    },
    stockQuoteShort: {
        endpoint: `${BASE_URL}/quote-short`,
        queryParams: ["symbol"],
        required: ["symbol"],
        description:
            "Get quick snapshots of real-time stock quotes with the FMP Stock Quote Short API. Access key stock data like current price, volume, and price changes for instant market insights."
    },
    aftermarketTrade: {
        endpoint: `${BASE_URL}/aftermarket-trade`,
        queryParams: ["symbol"],
        required: ["symbol"],
        description:
            "Track real-time trading activity occurring after regular market hours with the FMP Aftermarket Trade API. Access key details such as trade prices, sizes, and timestamps for trades executed during the post-market session."
    },
    aftermarketQuote: {
        endpoint: `${BASE_URL}/aftermarket-quote`,
        queryParams: ["symbol"],
        required: ["symbol"],
        description:
            "Access real-time aftermarket quotes for stocks with the FMP Aftermarket Quote API. Track bid and ask prices, volume, and other relevant data outside of regular trading hours."
    },
    stockPriceChange: {
        endpoint: `${BASE_URL}/stock-price-change`,
        queryParams: ["symbol"],
        required: ["symbol"],
        description:
            "Track stock price fluctuations in real-time with the FMP Stock Price Change API. Monitor percentage and value changes over various time periods, including daily, weekly, monthly, and long-term."
    },
    stockBatchQuote: {
        endpoint: `${BASE_URL}/batch-quote`,
        queryParams: ["symbols"],
        required: ["symbols"],
        description:
            "Retrieve multiple real-time stock quotes in a single request with the FMP Stock Batch Quote API. Access current prices, volume, and detailed data for multiple companies at once, making it easier to track large portfolios or monitor multiple stocks simultaneously."
    },
    stockBatchQuoteShort: {
        endpoint: `${BASE_URL}/batch-quote-short`,
        queryParams: ["symbols"],
        required: ["symbols"],
        description:
            "Access real-time, short-form quotes for multiple stocks with the FMP Stock Batch Quote Short API. Get a quick snapshot of key stock data such as current price, change, and volume for several companies in one streamlined request."
    },
    batchAftermarketTrade: {
        endpoint: `${BASE_URL}/batch-aftermarket-trade`,
        queryParams: ["symbols"],
        required: ["symbols"],
        description:
            "Retrieve real-time aftermarket trading data for multiple stocks with the FMP Batch Aftermarket Trade API. Track post-market trade prices, volumes, and timestamps across several companies simultaneously."
    },
    batchAftermarketQuote: {
        endpoint: `${BASE_URL}/batch-aftermarket-quote`,
        queryParams: ["symbols"],
        required: ["symbols"],
        description:
            "Retrieve real-time aftermarket quotes for multiple stocks with the FMP Batch Aftermarket Quote API. Access bid and ask prices, volume, and other relevant data for several companies during post-market trading."
    },
    exchangeStockQuotes: {
        endpoint: `${BASE_URL}/batch-exchange-quote`,
        queryParams: ["exchange", "short"],
        required: ["exchange", "short"],
        description:
            "Retrieve real-time stock quotes for all listed stocks on a specific exchange with the FMP Exchange Stock Quotes API. Track price changes and trading activity across the entire exchange."
    },
    mutualFundPriceQuotes: {
        endpoint: `${BASE_URL}/batch-mutualfund-quotes`,
        queryParams: ["short"],
        required: ["short"],
        description:
            "Access real-time quotes for mutual funds with the FMP Mutual Fund Price Quotes API. Track current prices, performance changes, and key data for various mutual funds."
    },
    etfPriceQuotes: {
        endpoint: `${BASE_URL}/batch-etf-quotes`,
        queryParams: ["short"],
        required: ["short"],
        description:
            "Get real-time price quotes for exchange-traded funds (ETFs) with the FMP ETF Price Quotes API. Track current prices, performance changes, and key data for a wide variety of ETFs."
    },
    realTimeCommoditiesQuotes: {
        endpoint: `${BASE_URL}/batch-commodity-quotes`,
        queryParams: ["short"],
        required: ["short"],
        description:
            "Get up-to-the-minute quotes for commodities with the FMP Real-Time Commodities Quotes API. Track the latest prices, changes, and volumes for a wide range of commodities, including oil, gold, and agricultural products."
    },
    fullCryptoQuotes: {
        endpoint: `${BASE_URL}/batch-crypto-quotes`,
        queryParams: ["short"],
        required: ["short"],
        description:
            "Access real-time cryptocurrency quotes with the FMP Full Cryptocurrency Quotes API. Track live prices, trading volumes, and price changes for a wide range of digital assets."
    },
    batchForexQuote: {
        endpoint: `${BASE_URL}/batch-forex-quotes`,
        queryParams: ["short"],
        required: ["short"],
        description:
            "Retrieve real-time quotes for multiple forex currency pairs with the FMP Batch Forex Quote API. Get real-time price changes and updates for a variety of forex pairs in a single request."
    },
    stockMarketIndexQuotes: {
        endpoint: `${BASE_URL}/batch-index-quotes`,
        queryParams: ["short"],
        required: ["short"],
        description:
            "Track real-time movements of major stock market indexes with the FMP Stock Market Index Quotes API. Access live quotes for global indexes and monitor changes in their performance."
    }
};

export const quoteParam: paramDescriptionInterface = {
    symbol: {
        type: "string",
        description: "Example: AAPL"
    },
    symbols: {
        type: "string",
        description: "Example: AAPL,GOOGL,MSFT"
    },
    exchange: {
        type: "string",
        description: "Example: NASDAQ"
    },
    short: {
        type: "boolean",
        description: "Example: true"
    }
};
