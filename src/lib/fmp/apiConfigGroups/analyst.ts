import { BASE_URL, BASE_URL_V3, apiConfigInterface, paramDescriptionInterface } from "../apiConstant";

export const analystConfig: apiConfigInterface = {
    // financialEstimates: {
    //     endpoint: `${BASE_URL}/analyst-estimates`,
    //     queryParams: ["symbol", "period", "page", "limit"],
    //     required: ["symbol"],
    //     description:
    //         "Retrieve analyst financial estimates for stock symbols with the FMP Financial Estimates API. Access projected figures like revenue, earnings per share (EPS), and other key financial metrics as forecasted by industry analysts to inform your investment decisions."
    // },
    analystEstimates:{
        endpoint: `${BASE_URL_V3}/analyst-estimates`,
        queryParams: ["period", "Limit"],
        pathParams: ["symbol"],
        required: ["symbol"],
        description:
            "The FMP Analyst Estimates endpoint provides analyst estimates for a company's future earnings and revenue. Investors can use this information to get a sense of what analysts expect from a company and to identify potential investment opportunities."
    },
    ratingsSnapshot: {
        endpoint: `${BASE_URL}/ratings-snapshot`,
        queryParams: ["symbol", "limit"],
        required: ["symbol"],
        description:
            "Quickly assess the financial health and performance of companies with the FMP Ratings Snapshot API. This API provides a comprehensive snapshot of financial ratings for stock symbols in our database, based on various key financial ratios."
    },
    historicalRatings: {
        endpoint: `${BASE_URL}/ratings-historical`,
        queryParams: ["symbol", "limit"],
        required: ["symbol"],
        description:
            "Track changes in financial performance over time with the FMP Historical Ratings API. This API provides access to historical financial ratings for stock symbols in our database, allowing users to view ratings and key financial metric scores for specific dates."
    },
    priceTargetSummary: {
        endpoint: `${BASE_URL}/price-target-summary`,
        queryParams: ["symbol", "limit", "page"],
        required: ["symbol"],
        description:
            "Gain insights into analysts' expectations for stock prices with the FMP Price Target Summary API. This API provides access to average price targets from analysts across various timeframes, helping investors assess future stock performance based on expert opinions."
    },
    priceTargetConsensus: {
        endpoint: `${BASE_URL}/price-target-consensus`,
        queryParams: ["symbol", "limit", "page"],
        required: ["symbol"],
        description:
            "Access analysts' consensus price targets with the FMP Price Target Consensus API. This API provides high, low, median, and consensus price targets for stocks, offering investors a comprehensive view of market expectations for future stock prices."
    },
    priceTargetNews: {
        endpoint: `${BASE_URL}/price-target-news`,
        queryParams: ["symbol", "limit", "page"],
        required: ["symbol"],
        description:
            "Stay informed with real-time updates on analysts' price targets for stocks using the FMP Price Target News API. Access the latest forecasts, stock prices at the time of the update, and direct links to trusted news sources for deeper insights."
    },
    priceTargetLatestNews: {
        endpoint: `${BASE_URL}/price-target-latest-news`,
        queryParams: ["limit", "page"],
        required: ["limit", "page"],
        description:
            "Stay updated with the most recent analyst price target updates for all stock symbols using the FMP Price Target Latest News API. Get access to detailed forecasts, stock prices at the time of the update, analyst insights, and direct links to news sources for deeper analysis."
    },
    // stockGrades: {
    //     endpoint: `${BASE_URL}/grades`,
    //     queryParams: ["symbol"],
    //     required: ["symbol"],
    //     description:
    //         "Access the latest stock grades from top analysts and financial institutions with the FMP Grades API. Track grading actions, such as upgrades, downgrades, or maintained ratings, for specific stock symbols, providing valuable insight into how experts evaluate companies over time."
    // },
    stockGrades: {
        endpoint: `${BASE_URL_V3}/grade`,
        queryParams: ["limit"],
        pathParams: ["symbol"],
        required: ["symbol"],
        description:
            "Get a sense of how professional investors view a company with our Stock Grade endpoint. This endpoint provides a rating of a company given by hedge funds, investment firms, and analysts."
    },
    historicalStockGrades: {
        endpoint: `${BASE_URL}/grades-historical`,
        queryParams: ["symbol", "limit"],
        required: ["symbol"],
        description:
            "Access a comprehensive record of analyst grades with the FMP Historical Grades API. This tool allows you to track historical changes in analyst ratings for specific stock symbols."
    },
    stockGradesSummary: {
        endpoint: `${BASE_URL}/grades-consensus`,
        queryParams: ["symbol", "page", "limit"],
        required: ["symbol"],
        description:
            "Quickly access an overall view of analyst ratings with the FMP Grades Summary API. This API provides a consolidated summary of market sentiment for individual stock symbols, including the total number of strong buy, buy, hold, sell, and strong sell ratings."
    },
    stockGradeNews: {
        endpoint: `${BASE_URL}/grades-news`,
        queryParams: ["symbol", "page", "limit"],
        required: ["symbol"],
        description:
            "Stay informed on the latest analyst grade changes with the FMP Grade News API. This API provides real-time updates on stock rating changes, including the grading company, previous and new grades, and the action taken."
    },
    stockGradeLatestNews: {
        endpoint: `${BASE_URL}/grades-latest-news`,
        queryParams: ["page", "limit"],
        required: ["page", "limit"],
        description:
            "Stay informed on the latest stock rating changes with the FMP Grade Latest News API. This API provides the most recent updates on analyst ratings for all stock symbols, including links to the original news sources."
    }
};

export const analystParam: paramDescriptionInterface = {
    symbol: {
        type: "string",
        description: "Example: AAPL"
    },
    period: {
        type: "string",
        description: "Example: annual"
    },
    page: {
        type: "number",
        description: "Example: 1"
    },
    limit: {
        type: "number",
        description: "Example: 10"
    },
    Limit: {
        type: "number",
        description: "Example: 30"
    }
};
