import { BASE_URL, BASE_URL_V4, apiConfigInterface, paramDescriptionInterface } from "../apiConstant";

export const stateConfig: apiConfigInterface = {
    senateLatestDisclosures: {
        endpoint: `${BASE_URL}/senate-latest`,
        queryParams: ["page", "limit"],
        required: ["page", "limit"],
        description:
            "Access the latest financial disclosures from U.S. Senate members with the FMP Latest Senate Financial Disclosures API. Track recent trades, asset ownership, and transaction details for enhanced transparency in government financial activities. The page parameter cannot equal to 0."
    },
    houseLatestDisclosures: {
        endpoint: `${BASE_URL}/house-latest`,
        queryParams: ["page", "limit"],
        required: ["page", "limit"],
        description:
            "Access real-time financial disclosures from U.S. House members with the FMP Latest House Financial Disclosures API. Track recent trades, asset ownership, and financial holdings for enhanced visibility into political figures' financial activities."
    },
    // senateTradingActivity: {
    //     endpoint: `${BASE_URL}/senate-trades`,
    //     queryParams: ["symbol"],
    //     required: ["symbol"],
    //     description:
    //         "Monitor the trading activity of US Senators with the FMP Senate Trading Activity API. Access detailed information on trades made by Senators, including trade dates, assets, amounts, and potential conflicts of interest."
    // },
    senateTradingActivity: {
        endpoint: `${BASE_URL_V4}/senate-trading`,
        queryParams: ["symbol"],
        required: ["symbol"],
        description:
            "Track the trading activity of US Senators and identify potential conflicts of interest with the FMP Senate Trading endpoint. This endpoint provides a list of all the trades that have been made by US Senators, including the date of the trade, the asset traded, the amount traded, and the price per share."
    },
    senateTradesByName: {
        endpoint: `${BASE_URL}/senate-trades-by-name`,
        queryParams: ["name"],
        required: ["name"],
        description:
            "Retrieve Senate trades by name using the FMP Senate Trades By Name API. Filter trade data by a senator's name to access detailed information on their financial activities."
    },
    houseTrades: {
        endpoint: `${BASE_URL}/house-trades`,
        queryParams: ["symbol"],
        required: ["symbol"],
        description:
            "Track the financial trades made by U.S. House members and their families with the FMP U.S. House Trades API. Access real-time information on stock sales, purchases, and other investment activities to gain insight into their financial decisions."
    },
    houseTradesByName: {
        endpoint: `${BASE_URL}/house-trades-by-name`,
        queryParams: ["name"],
        required: ["name"],
        description:
            "Retrieve House trades by name using the FMP House Trades By Name API. Filter trade data by a representative's name to access detailed information on their financial trading activities."
    }
};

export const stateParam: paramDescriptionInterface = {
    symbol: {
        type: "string",
        description: "Example: AAPL"
    },
    limit: {
        type: "number",
        description: "Example: 100"
    },
    page: {
        type: "number",
        description: "Example: 0"
    },
    name: {
        type: "string",
        description: "Example: Jerry"
    }
};
