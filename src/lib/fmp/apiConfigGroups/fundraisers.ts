import { BASE_URL, apiConfigInterface, paramDescriptionInterface } from "../apiConstant";

export const fundraisersConfig: apiConfigInterface = {
    latestCrowdfundingCampaigns: {
        endpoint: `${BASE_URL}/crowdfunding-offerings-latest`,
        queryParams: ["page", "limit"],
        required: ["page", "limit"],
        description:
            "Discover the most recent crowdfunding campaigns with the FMP Latest Crowdfunding Campaigns API. Stay informed on which companies and projects are actively raising funds, their financial details, and offering terms."
    },
    crowdfundingCampaignSearch: {
        endpoint: `${BASE_URL}/crowdfunding-offerings-search`,
        queryParams: ["name"],
        required: ["name"],
        description:
            "Search for crowdfunding campaigns by company name, campaign name, or platform with the FMP Crowdfunding Campaign Search API. Access detailed information to track and analyze crowdfunding activities."
    },
    crowdfundingByCik: {
        endpoint: `${BASE_URL}/crowdfunding-offerings`,
        queryParams: ["cik"],
        required: ["cik"],
        description:
            "Access detailed information on all crowdfunding campaigns launched by a specific company with the FMP Crowdfunding By CIK API."
    },
    equityOfferingUpdates: {
        endpoint: `${BASE_URL}/fundraising-latest`,
        queryParams: ["page", "limit", "cik"],
        required: ["page", "limit", "cik"],
        description:
            "Stay informed about the latest equity offerings with the FMP Equity Offering Updates API. Track new shares being issued by companies and get insights into exempt offerings and amendments."
    },
    equityOfferingSearch: {
        endpoint: `${BASE_URL}/fundraising-search`,
        queryParams: ["name"],
        required: ["name"],
        description:
            "Easily search for equity offerings by company name or stock symbol with the FMP Equity Offering Search API. Access detailed information about recent share issuances to stay informed on company fundraising activities."
    },
    equityOfferingByCik: {
        endpoint: `${BASE_URL}/fundraising`,
        queryParams: ["cik"],
        required: ["cik"],
        description:
            "Access detailed information on equity offerings announced by specific companies with the FMP Company Equity Offerings by CIK API. Track offering activity and identify potential investment opportunities."
    }
};

export const fundraisersParam: paramDescriptionInterface = {
    page: {
        type: "number",
        description: "Example: 1"
    },
    limit: {
        type: "number",
        description: "Example: 100"
    },
    name: {
        type: "string",
        description: "Example: NJOY"
    },
    cik: {
        type: "string",
        description: "Example: 0001916078"
    }
};
