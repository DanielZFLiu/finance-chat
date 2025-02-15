import { BASE_URL, apiConfigInterface, paramDescriptionInterface } from "../apiConfig";

export const earningsConfig: apiConfigInterface = {
    earningsTranscriptLatest: {
        endpoint: `${BASE_URL}/earning-call-transcript-latest`,
        queryParams: ["limit", "page"],
        required: [],
        description:
            "Access available earnings transcripts for companies with the FMP Latest Earning Transcripts API. Retrieve a list of companies with earnings transcripts, along with the total number of transcripts available for each company."
    },
    earningsTranscript: {
        endpoint: `${BASE_URL}/earning-call-transcript`,
        queryParams: ["symbol", "limit", "quarter", "year"],
        required: ["symbol"],
        description:
            "Access the full transcript of a company’s earnings call with the FMP Earnings Transcript API. Stay informed about a company’s financial performance, future plans, and overall strategy by analyzing management's communication."
    },
    transcriptsDatesBySymbol: {
        endpoint: `${BASE_URL}/earning-call-transcript-dates`,
        queryParams: ["symbol"],
        required: ["symbol"],
        description:
            "Access earnings call transcript dates for specific companies with the FMP Transcripts Dates By Symbol API. Get a comprehensive overview of earnings call schedules based on fiscal year and quarter."
    },
    availableTranscriptSymbols: {
        endpoint: `${BASE_URL}/earnings-transcript-list`,
        queryParams: [],
        required: [],
        description:
            "Access a complete list of stock symbols with available earnings call transcripts using the FMP Available Earnings Transcript Symbols API. Retrieve information on which companies have earnings transcripts and how many are accessible for detailed financial analysis."
    }
};

export const earningsParam: paramDescriptionInterface = {
    symbol: {
        type: "string",
        description: "Example: AAPL"
    },
    limit: {
        type: "number",
        description: "Example: 100"
    },
    page: {
        type: "string",
        description: "Example: 0"
    },
    quarter: {
        type: "string",
        description: "Example: 3"
    },
    year: {
        type: "string",
        description: "Example: 2020"
    }
};
