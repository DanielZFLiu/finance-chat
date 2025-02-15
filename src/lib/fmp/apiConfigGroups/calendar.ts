import { BASE_URL, apiConfigInterface, paramDescriptionInterface } from "../apiConstant";

export const calendarConfig: apiConfigInterface = {
    dividendsCompany: {
        endpoint: `${BASE_URL}/dividends`,
        queryParams: ["symbol", "limit"],
        required: ["symbol"],
        description:
            "Stay informed about upcoming dividend payments with the FMP Dividends Company API. This API provides essential dividend data for individual stock symbols, including record dates, payment dates, declaration dates, and more."
    },
    dividendsCalendar: {
        endpoint: `${BASE_URL}/dividends-calendar`,
        queryParams: ["from", "to"],
        required: ["from", "to"],
        description:
            "Stay informed on upcoming dividend events with the Dividend Events Calendar API. Access a comprehensive schedule of dividend-related dates for all stocks, including record dates, payment dates, declaration dates, and dividend yields."
    },
    earningsReport: {
        endpoint: `${BASE_URL}/earnings`,
        queryParams: ["symbol", "limit"],
        required: ["symbol"],
        description:
            "Retrieve in-depth earnings information with the FMP Earnings Report API. Gain access to key financial data for a specific stock symbol, including earnings report dates, EPS estimates, and revenue projections to help you stay on top of company performance."
    },
    earningsCalendar: {
        endpoint: `${BASE_URL}/earnings-calendar`,
        queryParams: ["from", "to"],
        required: ["from", "to"],
        description:
            "Stay informed on upcoming and past earnings announcements with the FMP Earnings Calendar API. Access key data, including announcement dates, estimated EPS, and actual EPS for publicly traded companies."
    },
    iposCalendar: {
        endpoint: `${BASE_URL}/ipos-calendar`,
        queryParams: ["from", "to"],
        required: ["from", "to"],
        description:
            "Access a comprehensive list of all upcoming initial public offerings (IPOs) with the FMP IPO Calendar API. Stay up to date on the latest companies entering the public market, with essential details on IPO dates, company names, expected pricing, and exchange listings."
    },
    iposDisclosure: {
        endpoint: `${BASE_URL}/ipos-disclosure`,
        queryParams: ["from", "to"],
        required: ["from", "to"],
        description:
            "Access a comprehensive list of disclosure filings for upcoming IPOs with the FMP IPO Disclosures API. Stay updated on regulatory filings, including filing dates, effectiveness dates, CIK numbers, and form types, with direct links to official SEC documents."
    },
    iposProspectus: {
        endpoint: `${BASE_URL}/ipos-prospectus`,
        queryParams: ["from", "to", "page", "limit"],
        required: ["from", "to"],
        description:
            "Access comprehensive information on IPO prospectuses with the FMP IPO Prospectus API. Get key financial details, such as public offering prices, discounts, commissions, and proceeds before expenses, along with links to official SEC prospectuses."
    },
    stockSplitDetails: {
        endpoint: `${BASE_URL}/splits`,
        queryParams: ["symbol", "limit"],
        required: ["symbol"],
        description:
            "Access detailed information on stock splits for a specific company using the FMP Stock Split Details API. This API provides essential data, including the split date and the split ratio, helping users understand changes in a company's share structure."
    },
    stockSplitsCalendar: {
        endpoint: `${BASE_URL}/splits-calendar`,
        queryParams: ["from", "to"],
        required: ["from", "to"],
        description:
            "Stay informed about upcoming stock splits with the FMP Stock Splits Calendar API. This API provides essential data on upcoming stock splits across multiple companies, including the split date and ratio."
    }
};

export const calendarParam: paramDescriptionInterface = {
    symbol: {
        type: "string",
        description: "Example: AAPL"
    },
    limit: {
        type: "number",
        description: "Example: 50"
    },
    from: {
        type: "date",
        description: "Example: 2024-11-04"
    },
    to: {
        type: "date",
        description: "Example: 2025-02-04"
    },
    page: {
        type: "number",
        description: "Example: 0"
    }
};
