import { BASE_URL, apiConfigInterface, paramDescriptionInterface } from "../apiConfig";

export const statementsConfig: apiConfigInterface = {
    realTimeIncomeStatement: {
        endpoint: `${BASE_URL}/income-statement`,
        queryParams: ["symbol", "limit", "period"],
        required: ["symbol"],
        description:
            "Access real-time income statement data for public companies, private companies, and ETFs with the FMP Real-Time Income Statements API. Track profitability, compare competitors, and identify business trends with up-to-date financial data."
    },
    balanceSheetData: {
        endpoint: `${BASE_URL}/balance-sheet-statement`,
        queryParams: ["symbol", "limit", "period"],
        required: ["symbol"],
        description:
            "Access detailed balance sheet statements for publicly traded companies with the Balance Sheet Data API. Analyze assets, liabilities, and shareholder equity to gain insights into a company's financial health."
    },
    cashFlowStatement: {
        endpoint: `${BASE_URL}/cash-flow-statement`,
        queryParams: ["symbol", "limit", "period"],
        required: ["symbol"],
        description:
            "Gain insights into a company's cash flow activities with the Cash Flow Statements API. Analyze cash generated and used from operations, investments, and financing activities to evaluate the financial health and sustainability of a business."
    },
    latestFinancialStatements: {
        endpoint: `${BASE_URL}/latest-financial-statements`,
        queryParams: [],
        required: [],
        description:
            "Retrieve the latest financial statements across companies with the FMP Latest Financial Statements API."
    },
    incomeStatementsTTM: {
        endpoint: `${BASE_URL}/income-statement-ttm`,
        queryParams: ["symbol", "limit"],
        required: ["symbol"],
        description:
            "Access trailing twelve-month (TTM) income statement data with the FMP Income Statements TTM API for comprehensive financial insights."
    },
    balanceSheetStatementsTTM: {
        endpoint: `${BASE_URL}/balance-sheet-statement-ttm`,
        queryParams: ["symbol", "limit"],
        required: ["symbol"],
        description:
            "Access trailing twelve-month (TTM) balance sheet data with the FMP Balance Sheet Statements TTM API to evaluate a company's financial position over the past year."
    },
    cashFlowStatementsTTM: {
        endpoint: `${BASE_URL}/cash-flow-statement-ttm`,
        queryParams: ["symbol", "limit"],
        required: ["symbol"],
        description:
            "Access trailing twelve-month (TTM) cash flow statement data with the FMP Cashflow Statements TTM API to analyze cash flows over the past year."
    },
    keyMetrics: {
        endpoint: `${BASE_URL}/key-metrics`,
        queryParams: ["symbol", "limit", "period"],
        required: ["symbol"],
        description:
            "Access essential financial metrics for a company with the FMP Financial Key Metrics API. Evaluate revenue, net income, P/E ratio, and more to assess performance and compare it to competitors."
    },
    financialRatios: {
        endpoint: `${BASE_URL}/ratios`,
        queryParams: ["symbol", "limit", "period"],
        required: ["symbol"],
        description:
            "Analyze a company's financial performance using the FMP Financial Ratios API, which provides detailed profitability, liquidity, and efficiency ratios."
    },
    keyMetricsTTM: {
        endpoint: `${BASE_URL}/key-metrics-ttm`,
        queryParams: ["symbol", "limit"],
        required: ["symbol"],
        description:
            "Retrieve trailing twelve-month (TTM) key performance metrics with the FMP Key Metrics TTM API to analyze profitability, capital efficiency, and liquidity over the past year."
    },
    ttmRatios: {
        endpoint: `${BASE_URL}/ratios-ttm`,
        queryParams: ["symbol", "limit"],
        required: ["symbol"],
        description:
            "Access trailing twelve-month (TTM) financial ratios with the FMP TTM Ratios API, providing key metrics on profitability, liquidity, and efficiency."
    },
    financialScores: {
        endpoint: `${BASE_URL}/financial-scores`,
        queryParams: ["symbol", "limit"],
        required: ["symbol"],
        description:
            "Assess a company's financial strength using the Financial Health Scores API. This API provides key metrics such as the Altman Z-Score and Piotroski Score, giving users insights into a company’s overall financial health and stability."
    },
    ownerEarnings: {
        endpoint: `${BASE_URL}/owner-earnings`,
        queryParams: ["symbol", "limit"],
        required: ["symbol"],
        description:
            "Retrieve a company's owner earnings with the Owner Earnings API, which provides a more accurate representation of cash available to shareholders by adjusting net income. This metric is crucial for evaluating a company’s profitability from the perspective of investors."
    },
    enterpriseValues: {
        endpoint: `${BASE_URL}/enterprise-values`,
        queryParams: ["symbol", "period", "limit"],
        required: ["symbol", "period"],
        description:
            "Access a company's enterprise value using the Enterprise Values API. This metric offers a comprehensive view of a company's total market value by combining both its equity (market capitalization) and debt, providing a better understanding of its worth."
    },
    incomeStatementGrowth: {
        endpoint: `${BASE_URL}/income-statement-growth`,
        queryParams: ["symbol", "limit", "period"],
        required: ["symbol"],
        description:
            "Track key financial growth metrics with the Income Statement Growth API. Analyze how revenue, profits, and expenses have evolved over time, offering insights into a company’s financial health and operational efficiency."
    },
    balanceSheetStatementGrowth: {
        endpoint: `${BASE_URL}/balance-sheet-statement-growth`,
        queryParams: ["symbol", "limit", "period"],
        required: ["symbol"],
        description:
            "Analyze the growth of key balance sheet items over time with the Balance Sheet Statement Growth API. Track changes in assets, liabilities, and equity to understand the financial evolution of a company."
    },
    cashflowStatementGrowth: {
        endpoint: `${BASE_URL}/cash-flow-statement-growth`,
        queryParams: ["symbol", "limit", "period"],
        required: ["symbol"],
        description:
            "Measure the growth rate of a company’s cash flow with the FMP Cashflow Statement Growth API. Determine how quickly a company’s cash flow is increasing or decreasing over time."
    },
    financialStatementGrowth: {
        endpoint: `${BASE_URL}/financial-growth`,
        queryParams: ["symbol", "limit", "period"],
        required: ["symbol"],
        description:
            "Analyze the growth of key financial statement items across income, balance sheet, and cash flow statements with the Financial Statement Growth API. Track changes over time to understand trends in financial performance."
    },
    financialReportsDates: {
        endpoint: `${BASE_URL}/financial-reports-dates`,
        queryParams: ["symbol"],
        required: ["symbol"],
        description:
            "Retrieve the dates for financial reports using the Financial Reports Dates API. Access report metadata including fiscal year, period, and download links for various formats."
    },
    financialReportsForm10KJSON: {
        endpoint: `${BASE_URL}/financial-reports-json`,
        queryParams: ["symbol", "year", "period"],
        required: ["symbol", "year", "period"],
        description:
            "Access comprehensive annual reports with the FMP Annual Reports on Form 10-K API in JSON format. Obtain detailed information about a company’s financial performance, business operations, and risk factors as reported to the SEC."
    },
    financialReportsForm10KXLSX: {
        endpoint: `${BASE_URL}/financial-reports-xlsx`,
        queryParams: ["symbol", "year", "period"],
        required: ["symbol", "year", "period"],
        description:
            "Download detailed 10-K reports in XLSX format with the Financial Reports Form 10-K XLSX API. Effortlessly access and analyze annual financial data for companies in a spreadsheet-friendly format."
    },
    revenueProductSegmentation: {
        endpoint: `${BASE_URL}/revenue-product-segmentation`,
        queryParams: ["symbol", "period", "structure"],
        required: ["symbol"],
        description:
            "Access detailed revenue breakdowns by product line with the Revenue Product Segmentation API. Understand which products drive a company's earnings and get insights into the performance of individual product segments."
    },
    revenueGeographicSegments: {
        endpoint: `${BASE_URL}/revenue-geographic-segmentation`,
        queryParams: ["symbol", "period", "structure"],
        required: ["symbol"],
        description:
            "Access detailed revenue breakdowns by geographic region with the Revenue Geographic Segments API. Analyze how different regions contribute to a company’s total revenue and identify key markets for growth."
    },
    incomeStatementAsReported: {
        endpoint: `${BASE_URL}/income-statement-as-reported`,
        queryParams: ["symbol", "limit", "period"],
        required: ["symbol"],
        description:
            "Retrieve income statements as they were reported by the company with the As Reported Income Statements API. Access raw financial data directly from official company filings, including revenue, expenses, and net income."
    },
    balanceSheetStatementAsReported: {
        endpoint: `${BASE_URL}/balance-sheet-statement-as-reported`,
        queryParams: ["symbol", "limit", "period"],
        required: ["symbol"],
        description:
            "Access balance sheets as reported by the company with the As Reported Balance Statements API. View detailed financial data on assets, liabilities, and equity directly from official filings."
    },
    cashFlowStatementAsReported: {
        endpoint: `${BASE_URL}/cash-flow-statement-as-reported`,
        queryParams: ["symbol", "limit", "period"],
        required: ["symbol"],
        description:
            "View cash flow statements as reported by the company with the As Reported Cash Flow Statements API. Analyze a company's cash flows related to operations, investments, and financing directly from official reports."
    },
    financialStatementFullAsReported: {
        endpoint: `${BASE_URL}/financial-statement-full-as-reported`,
        queryParams: ["symbol", "limit", "period"],
        required: ["symbol"],
        description:
            "Retrieve comprehensive financial statements as reported by companies with the FMP As Reported Financial Statements API. Access complete data across income, balance sheet, and cash flow statements in their original form for detailed analysis."
    }
};

export const statementsParam: paramDescriptionInterface = {
    symbol: {
        type: "string",
        description: "Example: AAPL"
    },
    limit: {
        type: "number",
        description: "Example: 5 or 10"
    },
    period: {
        type: "string",
        description: "Example: FY, annual"
    },
    year: {
        type: "number",
        description: "Example: 2022"
    },
    structure: {
        type: "string",
        description: "Example: flat"
    }
};
