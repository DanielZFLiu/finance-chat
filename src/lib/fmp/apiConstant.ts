export const BASE_URL = "https://financialmodelingprep.com/stable";
export const BASE_URL_V3 = "https://financialmodelingprep.com/api/v3";
export const BASE_URL_V4 = "https://financialmodelingprep.com/api/v4";

export interface apiConfigInterface {
    [key: string]: {
        endpoint: string;
        queryParams: string[];
        pathParams?: string[];
        required: string[];
        description: string;
    }
}

export interface paramDescriptionInterface { [key: string]: { type: string; description: string } }

export const today = new Date().toISOString().split('T')[0];