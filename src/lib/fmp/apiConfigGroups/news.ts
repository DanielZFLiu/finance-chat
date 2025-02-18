import { BASE_URL, apiConfigInterface, paramDescriptionInterface } from "../apiConstant";

export const newsConfig: apiConfigInterface = {
    fmpArticles: {
        endpoint: `${BASE_URL}/fmp-articles`,
        queryParams: ["page", "limit"],
        required: [],
        description:
            "Access the latest articles from Financial Modeling Prep with the FMP Articles API. Get comprehensive updates including headlines, snippets, and publication URLs. The parameter page cannot be 0."
    },
    generalNews: {
        endpoint: `${BASE_URL}/news/general-latest`,
        queryParams: ["from", "to", "page", "limit"],
        required: ["from", "to", "page", "limit"],
        description:
            "Access the latest general news articles from a variety of sources with the FMP General News API. Obtain headlines, snippets, and publication URLs for comprehensive news coverage."
    },
    pressReleases: {
        endpoint: `${BASE_URL}/news/press-releases-latest`,
        queryParams: ["from", "to", "page", "limit"],
        required: ["from", "to", "page", "limit"],
        description:
            "Access official company press releases with the FMP Press Releases API. Get real-time updates on corporate announcements, earnings reports, mergers, and more."
    },
    stockNews: {
        endpoint: `${BASE_URL}/news/stock-latest`,
        queryParams: ["from", "to", "page", "limit"],
        required: ["from", "to", "page", "limit"],
        description:
            "Stay informed with the latest stock market news using the FMP Stock News Feed API. Access headlines, snippets, publication URLs, and ticker symbols for the most recent articles from a variety of sources."
    },
    cryptoNews: {
        endpoint: `${BASE_URL}/news/crypto-latest`,
        queryParams: ["from", "to", "page", "limit"],
        required: ["from", "to", "page", "limit"],
        description:
            "Stay informed with the latest cryptocurrency news using the FMP Crypto News API. Access a curated list of articles from various sources, including headlines, snippets, and publication URLs."
    },
    forexNews: {
        endpoint: `${BASE_URL}/news/forex-latest`,
        queryParams: ["from", "to", "page", "limit"],
        required: ["from", "to", "page", "limit"],
        description:
            "Stay updated with the latest forex news articles from various sources using the FMP Forex News API. Access headlines, snippets, and publication URLs for comprehensive market insights."
    },
    searchPressReleases: {
        endpoint: `${BASE_URL}/news/press-releases`,
        queryParams: ["symbols", "from", "to", "page", "limit"],
        required: ["symbols", "from", "to", "page", "limit"],
        description:
            "Search for company press releases with the FMP Search Press Releases API. Find specific corporate announcements and updates by entering a stock symbol or company name."
    },
    searchStockNews: {
        endpoint: `${BASE_URL}/news/stock`,
        queryParams: ["symbols", "from", "to", "page", "limit"],
        required: ["symbols", "from", "to", "page", "limit"],
        description:
            "Search for stock-related news using the FMP Search Stock News API. Find specific stock news by entering a ticker symbol or company name to track the latest developments."
    },
    searchCryptoNews: {
        endpoint: `${BASE_URL}/news/crypto`,
        queryParams: ["symbols", "from", "to", "page", "limit"],
        required: ["symbols", "from", "to", "page", "limit"],
        description:
            "Search for cryptocurrency news using the FMP Search Crypto News API. Retrieve news related to specific coins or tokens by entering their name or symbol."
    },
    searchForexNews: {
        endpoint: `${BASE_URL}/news/forex`,
        queryParams: ["symbols", "from", "to", "page", "limit"],
        required: ["symbols", "from", "to", "page", "limit"],
        description:
            "Search for foreign exchange news using the FMP Search Forex News API. Find targeted news on specific currency pairs by entering their symbols for focused updates."
    }
};

export const newsParam: paramDescriptionInterface = {
    page: {
        type: "number",
        description: "Example: 1"
    },
    limit: {
        type: "number",
        description: "Example: 20"
    },
    from: {
        type: "date",
        description: "Example: 2024-11-04"
    },
    to: {
        type: "date",
        description: "Example: 2025-02-04"
    },
    symbols: {
        type: "string",
        description: "Comma separated symbols. Example: AAPL,GOOGL,AMZN"
    }
};
