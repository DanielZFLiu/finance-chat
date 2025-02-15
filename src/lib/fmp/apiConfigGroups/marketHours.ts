import { BASE_URL, apiConfigInterface, paramDescriptionInterface } from "../apiConfig";

export const marketHoursConfig: apiConfigInterface = {
    globalExchangeMarketHours: {
        endpoint: `${BASE_URL}/exchange-market-hours`,
        queryParams: ["exchange"],
        required: ["exchange"],
        description:
            "Retrieve trading hours for specific stock exchanges using the Global Exchange Market Hours API. Find out the opening and closing times of global exchanges to plan your trading strategies effectively."
    },
    allExchangeMarketHours: {
        endpoint: `${BASE_URL}/all-exchange-market-hours`,
        queryParams: [],
        required: [],
        description:
            "View the market hours for all exchanges. Check when different markets are active."
    }
};

export const marketHoursParam: paramDescriptionInterface = {
    exchange: {
        type: "string",
        description: "Example: NASDAQ"
    }
};
