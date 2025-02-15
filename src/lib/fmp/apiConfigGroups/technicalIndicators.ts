import { BASE_URL, apiConfigInterface, paramDescriptionInterface } from "../apiConstant";

export const technicalIndicatorsConfig: apiConfigInterface = {
    sma: {
        endpoint: `${BASE_URL}/technical-indicators/sma`,
        queryParams: ["symbol", "periodLength", "timeframe", "from", "to"],
        required: ["symbol", "periodLength", "timeframe"],
        description:
            "Retrieve the Simple Moving Average (SMA) for a stock symbol. This API calculates the average price over a specified period and timeframe to help analyze market trends."
    },
    ema: {
        endpoint: `${BASE_URL}/technical-indicators/ema`,
        queryParams: ["symbol", "periodLength", "timeframe", "from", "to"],
        required: ["symbol", "periodLength", "timeframe"],
        description:
            "Retrieve the Exponential Moving Average (EMA) for a stock symbol. This API gives more weight to recent prices, offering a responsive trend indicator."
    },
    wma: {
        endpoint: `${BASE_URL}/technical-indicators/wma`,
        queryParams: ["symbol", "periodLength", "timeframe", "from", "to"],
        required: ["symbol", "periodLength", "timeframe"],
        description:
            "Retrieve the Weighted Moving Average (WMA) for a stock symbol. This API calculates an average that emphasizes more recent data points."
    },
    dema: {
        endpoint: `${BASE_URL}/technical-indicators/dema`,
        queryParams: ["symbol", "periodLength", "timeframe", "from", "to"],
        required: ["symbol", "periodLength", "timeframe"],
        description:
            "Retrieve the Double Exponential Moving Average (DEMA) for a stock symbol. This API provides a smoother moving average by reducing lag compared to traditional averages."
    },
    tema: {
        endpoint: `${BASE_URL}/technical-indicators/tema`,
        queryParams: ["symbol", "periodLength", "timeframe", "from", "to"],
        required: ["symbol", "periodLength", "timeframe"],
        description:
            "Retrieve the Triple Exponential Moving Average (TEMA) for a stock symbol. This API offers an even more responsive indicator by further reducing lag."
    },
    rsi: {
        endpoint: `${BASE_URL}/technical-indicators/rsi`,
        queryParams: ["symbol", "periodLength", "timeframe", "from", "to"],
        required: ["symbol", "periodLength", "timeframe"],
        description:
            "Retrieve the Relative Strength Index (RSI) for a stock symbol. This API measures the speed and change of price movements to identify overbought or oversold conditions."
    },
    standardDeviation: {
        endpoint: `${BASE_URL}/technical-indicators/standarddeviation`,
        queryParams: ["symbol", "periodLength", "timeframe", "from", "to"],
        required: ["symbol", "periodLength", "timeframe"],
        description:
            "Retrieve the Standard Deviation for a stock symbol. This API calculates the dispersion of price data from its average, indicating market volatility."
    },
    williams: {
        endpoint: `${BASE_URL}/technical-indicators/williams`,
        queryParams: ["symbol", "periodLength", "timeframe", "from", "to"],
        required: ["symbol", "periodLength", "timeframe"],
        description:
            "Retrieve the Williams %R indicator for a stock symbol. This API provides a momentum oscillator that identifies overbought and oversold conditions."
    },
    adx: {
        endpoint: `${BASE_URL}/technical-indicators/adx`,
        queryParams: ["symbol", "periodLength", "timeframe", "from", "to"],
        required: ["symbol", "periodLength", "timeframe"],
        description:
            "Retrieve the Average Directional Index (ADX) for a stock symbol. This API measures the strength of a trend in the market, regardless of its direction."
    }
};

export const technicalIndicatorsParam: paramDescriptionInterface = {
    symbol: {
        type: "string",
        description: "Example: AAPL"
    },
    periodLength: {
        type: "number",
        description: "Example: 10"
    },
    timeframe: {
        type: "string",
        description: "Example: 1day (Possible values: 1min,5min,15min,30min,1hour,4hour,1day)"
    },
    from: {
        type: "date",
        description: "Example: 2024-11-04"
    },
    to: {
        type: "date",
        description: "Example: 2025-02-04"
    }
};
