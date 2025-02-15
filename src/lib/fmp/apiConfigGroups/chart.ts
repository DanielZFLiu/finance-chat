import { BASE_URL, apiConfigInterface, paramDescriptionInterface } from "../apiConstant";

export const chartConfig: apiConfigInterface = {
    basicStockChart: {
        endpoint: `${BASE_URL}/historical-price-eod/light`,
        queryParams: ["symbol", "from", "to"],
        required: ["symbol"],
        description:
            "Access simplified stock chart data using the FMP Basic Stock Chart API. This API provides essential charting information, including date, price, and trading volume, making it ideal for tracking stock performance with minimal data and creating basic price and volume charts."
    },
    stockPriceVolumeData: {
        endpoint: `${BASE_URL}/historical-price-eod/full`,
        queryParams: ["symbol", "from", "to"],
        required: ["symbol"],
        description:
            "Access full price and volume data for any stock symbol using the FMP Comprehensive Stock Price and Volume Data API. Get detailed insights, including open, high, low, close prices, trading volume, price changes, percentage changes, and volume-weighted average price (VWAP)."
    },
    unadjustedStockPrice: {
        endpoint: `${BASE_URL}/historical-price-eod/non-split-adjusted`,
        queryParams: ["symbol", "from", "to"],
        required: ["symbol"],
        description:
            "Access stock price and volume data without adjustments for stock splits with the FMP Unadjusted Stock Price Chart API. Get accurate insights into stock performance, including open, high, low, and close prices, along with trading volume, without split-related changes."
    },
    dividendAdjustedPriceChart: {
        endpoint: `${BASE_URL}/historical-price-eod/dividend-adjusted`,
        queryParams: ["symbol", "from", "to"],
        required: ["symbol"],
        description:
            "Analyze stock performance with dividend adjustments using the FMP Dividend-Adjusted Price Chart API. Access end-of-day price and volume data that accounts for dividend payouts, offering a more comprehensive view of stock trends over time."
    },
    oneMinIntervalStockChart: {
        endpoint: `${BASE_URL}/historical-chart/1min`,
        queryParams: ["symbol", "from", "to", "nonadjusted"],
        required: ["symbol"],
        description:
            "Access precise intraday stock price and volume data with the FMP 1-Minute Interval Stock Chart API. Retrieve real-time or historical stock data in 1-minute intervals, including key information such as open, high, low, close prices, and trading volume for each minute."
    },
    fiveMinIntervalStockChart: {
        endpoint: `${BASE_URL}/historical-chart/5min`,
        queryParams: ["symbol", "from", "to", "nonadjusted"],
        required: ["symbol"],
        description:
            "Access stock price and volume data with the FMP 5-Minute Interval Stock Chart API. Retrieve detailed stock data in 5-minute intervals, including open, high, low, and close prices, along with trading volume for each 5-minute period, ideal for short-term trading analysis."
    },
    fifteenMinIntervalStockChart: {
        endpoint: `${BASE_URL}/historical-chart/15min`,
        queryParams: ["symbol", "from", "to", "nonadjusted"],
        required: ["symbol"],
        description:
            "Access stock price and volume data with the FMP 15-Minute Interval Stock Chart API. Retrieve detailed stock data in 15-minute intervals, including open, high, low, close prices, and trading volume, making it ideal for creating intraday charts and analyzing medium-term trends."
    },
    thirtyMinIntervalStockChart: {
        endpoint: `${BASE_URL}/historical-chart/30min`,
        queryParams: ["symbol", "from", "to", "nonadjusted"],
        required: ["symbol"],
        description:
            "Access stock price and volume data with the FMP 30-Minute Interval Stock Chart API. Retrieve essential stock data in 30-minute intervals, including open, high, low, close prices, and trading volume, perfect for tracking medium-term price movements."
    },
    oneHourIntervalStockChart: {
        endpoint: `${BASE_URL}/historical-chart/1hour`,
        queryParams: ["symbol", "from", "to", "nonadjusted"],
        required: ["symbol"],
        description:
            "Track stock price movements over hourly intervals with the FMP 1-Hour Interval Stock Chart API. Access essential stock price and volume data, including open, high, low, and close prices for each hour, to analyze broader intraday trends with precision."
    },
    fourHourIntervalStockChart: {
        endpoint: `${BASE_URL}/historical-chart/4hour`,
        queryParams: ["symbol", "from", "to", "nonadjusted"],
        required: ["symbol"],
        description:
            "Analyze stock price movements over extended intraday periods with the FMP 4-Hour Interval Stock Chart API. Access key stock price and volume data in 4-hour intervals, perfect for tracking longer intraday trends and understanding broader market movements."
    },
    batchEod: {
        endpoint: `${BASE_URL}/batch-eod`,
        queryParams: ["date", "symbols"],
        required: ["date"],
        description:
            "Retrieve end-of-day data for multiple stocks with the FMP Batch Eod API. Specify a particular date and a comma-separated list of stock symbols to access comprehensive EOD information including open, high, low, close prices, adjusted close, and trading volume."
    }
};

export const chartParam: paramDescriptionInterface = {
    symbol: {
        type: "string",
        description: "Example: AAPL"
    },
    from: {
        type: "date",
        description: "Example: 2024-11-04"
    },
    to: {
        type: "date",
        description: "Example: 2025-02-04"
    },
    nonadjusted: {
        type: "boolean",
        description: "Example: false"
    },
    date: {
        type: "string",
        description: "Example: 2024-10-22"
    },
    symbols: {
        type: "string",
        description: "Example: AAPL,GOOGL,AMZN"
    }
};
