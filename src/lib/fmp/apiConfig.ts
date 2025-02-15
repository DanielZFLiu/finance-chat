import { searchConfig, searchParam } from "./apiConfigGroups/search";
import { directoryConfig, directoryParam } from "./apiConfigGroups/directory";
import { analystConfig, analystParam } from "./apiConfigGroups/analyst";
import { calendarConfig, calendarParam } from "./apiConfigGroups/calendar";
import { chartConfig, chartParam } from "./apiConfigGroups/chart";
import { companyConfig, companyParam } from "./apiConfigGroups/company";
import { cotConfig, cotParam } from "./apiConfigGroups/cot";
import { economicsConfig, economicsParam } from "./apiConfigGroups/economics";
import { esgConfig, esgParam } from "./apiConfigGroups/esg";
import { dcfConfig, dcfParam } from "./apiConfigGroups/dcf";
import { statementsConfig, statementsParam } from "./apiConfigGroups/statements";
import { form13fConfig, form13fParam } from "./apiConfigGroups/form13f";
import { indexConfig, indexParam } from "./apiConfigGroups";
import { insiderTradesConfig, insiderTradesParam } from "./apiConfigGroups/insiderTrades";
import { marketPerformanceConfig, marketPerformanceParam } from "./apiConfigGroups/marketPerformance";
import { marketHoursConfig, marketHoursParam } from "./apiConfigGroups/marketHours";
import { etfConfig, etfParam } from "./apiConfigGroups/etf";
import { commodityConfig, commodityParam } from "./apiConfigGroups/commodity";
import { fundraisersConfig, fundraisersParam } from "./apiConfigGroups/fundraisers";
import { cryptoConfig, cryptoParam } from "./apiConfigGroups/crypto";
import { forexConfig, forexParam } from "./apiConfigGroups/forex";
import { newsConfig, newsParam } from "./apiConfigGroups/news";
import { technicalIndicatorsConfig, technicalIndicatorsParam } from "./apiConfigGroups/technicalIndicators";
import { quoteConfig, quoteParam } from "./apiConfigGroups/quote";
import { secConfig, secParam } from "./apiConfigGroups/sec";
import { earningsConfig, earningsParam } from "./apiConfigGroups/earnings";
import { stateConfig, stateParam } from "./apiConfigGroups/senate";
import { apiConfigInterface, paramDescriptionInterface } from "./apiConstant";

export const API_CONFIG: apiConfigInterface = {
    ...searchConfig,
    ...directoryConfig,
    ...analystConfig,
    ...calendarConfig,
    ...chartConfig,
    ...companyConfig,
    ...cotConfig,
    ...economicsConfig,
    ...esgConfig,
    ...dcfConfig,
    ...statementsConfig,
    ...form13fConfig,
    ...indexConfig,
    ...insiderTradesConfig,
    ...marketPerformanceConfig,
    ...marketHoursConfig,
    ...etfConfig,
    ...commodityConfig,
    ...fundraisersConfig,
    ...cryptoConfig,
    ...forexConfig,
    ...newsConfig,
    ...technicalIndicatorsConfig,
    ...quoteConfig,
    ...secConfig,
    ...earningsConfig,
    ...stateConfig,
};

export const PARAM_DESCRIPTIONS: paramDescriptionInterface = {
    ...searchParam,
    ...directoryParam,
    ...analystParam,
    ...calendarParam,
    ...chartParam,
    ...companyParam,
    ...cotParam,
    ...economicsParam,
    ...esgParam,
    ...dcfParam,
    ...statementsParam,
    ...form13fParam,
    ...indexParam,
    ...insiderTradesParam,
    ...marketPerformanceParam,
    ...marketHoursParam,
    ...etfParam,
    ...commodityParam,
    ...fundraisersParam,
    ...cryptoParam,
    ...forexParam,
    ...newsParam,
    ...technicalIndicatorsParam,
    ...quoteParam,
    ...secParam,
    ...earningsParam,
    ...stateParam,
};
