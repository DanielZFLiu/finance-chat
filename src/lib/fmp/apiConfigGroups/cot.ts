import { BASE_URL, today, apiConfigInterface, paramDescriptionInterface } from "../apiConstant";

// Commitment of Traders (COT)
export const cotConfig: apiConfigInterface = {
    // cotReport: {
    //     endpoint: `${BASE_URL}/commitment-of-traders-report`,
    //     queryParams: ["symbol", "from", "to"],
    //     required: ["symbol", "from", "to"],
    //     description:
    //         "Access comprehensive Commitment of Traders (COT) reports with the FMP COT Report API. This API provides detailed information about long and short positions across various sectors, helping you assess market sentiment and track positions in commodities, indices, and financial instruments."
    // },
    cotAnalysis: {
        endpoint: `${BASE_URL}/commitment-of-traders-analysis`,
        queryParams: ["symbol", "from", "to"],
        required: [],
        description:
            `Gain in-depth insights into market sentiment with the FMP COT Report Analysis API. Analyze the Commitment of Traders (COT) reports for a specific date range to evaluate market dynamics, sentiment, and potential reversals across various sectors. Symbol Limited to AAPL, TSLA, AMZN, MSFT, NVDA, GOOGL, META, NFLX, JPM, V, BAC, AMD, PYPL, DIS, T, PFE, COST, INTC, KO, TGT, NKE, SPY, BA, BABA, XOM, WMT, GE, CSCO, VZ, JNJ, CVX, PLTR, SQ, SHOP, SBUX, SOFI, HOOD, RBLX, SNAP, AMD, UBER, FDX, ABBV, ETSY, MRNA, LMT, GM, F, RIVN, LCID, CCL, DAL, UAL, AAL, TSM, SONY, ET, NOK, MRO, COIN, RIVN, SIRI, SOFI, RIOT, CPRX, PYPL, TGT, VWO, SPYG, NOK, ROKU, HOOD, VIAC, ATVI, BIDU, DOCU, ZM, PINS, TLRY, WBA, VIAC, MGM, NFLX, NIO, C, GS, WFC, ADBE, PEP, UNH, CARR, FUBO, HCA, TWTR, BILI, SIRI, VIAC, FUBO, RKT, BTCUSD, ETHUSD, USDTUSD, BNBUSD, SOLUSD, USDCUSD, XRPUSD, DOGEUSD, TONUSD, TRXUSD, ADAUSD, AVAXUSD, SHIBUSD, LINKUSD, DOTUSD, BCHUSD, DAIUSD, LEOUSD, LTCUSD, NEARUSD, KASUSD, UNIUSD, ICPUSD, FETUSD, XMRUSD, PEPEUSD, SUIUSD, APTUSD, XLMUSD, POLUSD, FDUSD, ETCUSD, OKBUSD, STXUSD, TAOUSD, CROUSD, AAVEUSD, FILUSD, IMXUSD, HBARUSD, MNTUSD, INJUSD, ARBUSD, VETUSD, OPUSD, ATOMUSD, WIFUSD, FTMUSD, MKRUSD, GRTUSD, RUNEUSD, THETAUSD, BGBUSD, ARUSD, MATICUSD, HNTUSD, BONKUSD, FLOKIUSD, ALGOUSD, SEIUSD, PYTHUSD, JUPUSD, TIAUSD, JASMYUSD, KCSUSD, BSVUSD, OMUSD, LDOUSD, QNTUSD, ONDOUSD, BTTUSD, FLOWUSD, COREUSD, PYUSD, NOTUSD, BRETTUSD, USDDUSD, GTUSD, EOSUSD, FLRUSD, BEAMUSD, CKBUSD, POPCATUSD, STRKUSD, EGLDUSD, AXSUSD, NEOUSD, ORDIUSD, WLDUSD, XTZUSD, GALAUSD, XECUSD, CFXUSD, AKTUSD, SANDUSD, DYDXUSD, BNXUSD, USDCAD, EURUSD, GBPUSD, USDJPY, AUDUSD, USDCHF, NZDUSD, USDCNY, USDMXN, USDINR, ^GSPC, ^DJI, ^IXIC, ^RUT, ^FTSE, ^N225, ^HSI, ^STOXX50E, ^VIX, BZUSD, SIUSD, ESUSD, GCUSD. Notice that you may only Retrieve historical values up to 1 month; today's date is ${today}. Notice that you may only retrieve a range up to 1 month.`
    },
    cotSymbolList: {
        endpoint: `${BASE_URL}/commitment-of-traders-list`,
        queryParams: [],
        required: [],
        description:
            "Access a comprehensive list of available Commitment of Traders (COT) reports by commodity or futures contract using the FMP COT Report List API. This API provides an overview of different market segments, allowing users to retrieve and explore COT reports for a wide variety of commodities and financial instruments."
    }
};

export const cotParam: paramDescriptionInterface = {
    symbol: {
        type: "string",
        description: "Example: AAPL"
    },
    from: {
        type: "date",
        description: "Example: 2024-01-01"
    },
    to: {
        type: "date",
        description: "Example: 2024-03-01"
    }
};
