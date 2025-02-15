import { BASE_URL, apiConfigInterface, paramDescriptionInterface } from "../apiConfig";

// discounted cash flow
export const dcfConfig: apiConfigInterface = {
    discountedCashFlow: {
        endpoint: `${BASE_URL}/discounted-cash-flow`,
        queryParams: ["symbol"],
        required: ["symbol"],
        description:
            "Estimate the intrinsic value of a company with the FMP Discounted Cash Flow Valuation API. Calculate the DCF valuation based on expected future cash flows and discount rates."
    },
    leveredDiscountedCashFlow: {
        endpoint: `${BASE_URL}/levered-discounted-cash-flow`,
        queryParams: ["symbol", "limit"],
        required: ["symbol"],
        description:
            "Analyze a company’s value with the FMP Levered Discounted Cash Flow (DCF) API, which incorporates the impact of debt. This API provides post-debt company valuation, offering investors a more accurate measure of a company's true worth by accounting for its debt obligations."
    },
    customDiscountedCashFlow: {
        endpoint: `${BASE_URL}/custom-discounted-cash-flow`,
        queryParams: [
            "symbol",
            "revenueGrowthPct",
            "ebitdaPct",
            "depreciationAndAmortizationPct",
            "cashAndShortTermInvestmentsPct",
            "receivablesPct",
            "inventoriesPct",
            "payablePct",
            "ebitPct",
            "capitalExpenditurePct",
            "operatingCashFlowPct",
            "sellingGeneralAndAdministrativeExpensesPct",
            "taxRate",
            "longTermGrowthRate",
            "costOfDebt",
            "costOfEquity",
            "marketRiskPremium",
            "beta",
            "riskFreeRate"
        ],
        required: ["symbol"],
        description:
            "Run a tailored Discounted Cash Flow (DCF) analysis using the FMP Custom DCF Advanced API. With detailed inputs, this API allows users to fine-tune their assumptions and variables, offering a more personalized and precise valuation for a company."
    },
    customLeveredDiscountedCashFlow: {
        endpoint: `${BASE_URL}/custom-levered-discounted-cash-flow`,
        queryParams: [
            "symbol",
            "revenueGrowthPct",
            "ebitdaPct",
            "depreciationAndAmortizationPct",
            "cashAndShortTermInvestmentsPct",
            "receivablesPct",
            "inventoriesPct",
            "payablePct",
            "ebitPct",
            "capitalExpenditurePct",
            "operatingCashFlowPct",
            "sellingGeneralAndAdministrativeExpensesPct",
            "taxRate",
            "longTermGrowthRate",
            "costOfDebt",
            "costOfEquity",
            "marketRiskPremium",
            "beta",
            "riskFreeRate"
        ],
        required: ["symbol"],
        description:
            "Run a tailored Discounted Cash Flow (DCF) analysis using the FMP Custom Levered DCF API. With detailed inputs, this API allows users to fine-tune their assumptions and variables, offering a more personalized and precise valuation for a company."
    }
};

export const dcfParam: paramDescriptionInterface = {
    symbol: {
        type: "string",
        description: "Example: AAPL"
    },
    limit: {
        type: "number",
        description: "Example: 100"
    },
    revenueGrowthPct: {
        type: "number",
        description: "Example: 0.1094119804597946"
    },
    ebitdaPct: {
        type: "number",
        description: "Example: 0.31273548388"
    },
    depreciationAndAmortizationPct: {
        type: "number",
        description: "Example: 0.0345531631720999"
    },
    cashAndShortTermInvestmentsPct: {
        type: "number",
        description: "Example: 0.2344222126801843"
    },
    receivablesPct: {
        type: "number",
        description: "Example: 0.1533770531229388"
    },
    inventoriesPct: {
        type: "number",
        description: "Example: 0.0155245674227653"
    },
    payablePct: {
        type: "number",
        description: "Example: 0.1614868903169657"
    },
    ebitPct: {
        type: "number",
        description: "Example: 0.2781823207138459"
    },
    capitalExpenditurePct: {
        type: "number",
        description: "Example: 0.0306025847141713"
    },
    operatingCashFlowPct: {
        type: "number",
        description: "Example: 0.2886333485760204"
    },
    sellingGeneralAndAdministrativeExpensesPct: {
        type: "number",
        description: "Example: 0.0662854095187211"
    },
    taxRate: {
        type: "number",
        description: "Example: 0.14919579658453103"
    },
    longTermGrowthRate: {
        type: "number",
        description: "Example: 4"
    },
    costOfDebt: {
        type: "number",
        description: "Example: 3.64"
    },
    costOfEquity: {
        type: "number",
        description: "Example: 9.51168"
    },
    marketRiskPremium: {
        type: "number",
        description: "Example: 4.72"
    },
    beta: {
        type: "number",
        description: "Example: 1.244"
    },
    riskFreeRate: {
        type: "number",
        description: "Example: 3.64"
    }
};
