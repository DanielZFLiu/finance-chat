export const BASE_URL = "https://financialmodelingprep.com/stable";

export interface apiConfigInterface {
    [key: string]: {
        endpoint: string;
        queryParams: string[];
        required: string[];
        description: string;
    }
}

export interface paramDescriptionInterface { [key: string]: { type: string; description: string } }