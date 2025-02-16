"use client";
import { useEffect } from "react";
import { API_CONFIG, PARAM_DESCRIPTIONS } from "@/lib/fmp/apiConfig";

interface Tool {
  type: "function";
  function: {
    name: string;
    description: string;
    parameters: {
      type: string;
      properties: Record<string, { type: string; description: string }>;
      required: string[];
      additionalProperties: boolean;
    };
  };
}

const tools: Tool[] = [];

const functions: any[] = []

// test fmp api
// async function fetchCompanyData() {
//   const res = await fetch("/api/fmp?type=fmpArticles&page=1&limit=5");
//   const data = await res.json();
//   console.log(data);
// }

// test openai api
async function sendChat() {
  const response = await fetch("/api/openai", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ message: `User Query: How do you define love? \nTask: Return a list of function names that are the most relevant to the user query. You can return a empty list if there are no relevant functions. Here is the list of functions and their description: ${JSON.stringify(functions)}`, formatted: true }),
  });
  const data = await response.json();
  console.log(data);
}

export default function Page() {
  useEffect(() => {
    for (const key in API_CONFIG) {
      tools.push(
        {
          type: "function",
          function: {
            name: key,
            description: API_CONFIG[key].description,
            parameters: {
              type: "object",
              properties: Object.fromEntries(
                API_CONFIG[key].queryParams.map((param) => [
                  param,
                  {
                    type: PARAM_DESCRIPTIONS[param].type,
                    description: PARAM_DESCRIPTIONS[param].description,
                  },
                ])
              ),
              required: API_CONFIG[key].required,
              additionalProperties: false
            }
          }
        }
      );
    }

    for (const key in API_CONFIG) {
      functions.push({
        name: key,
        description: API_CONFIG[key].description,
        parameters: Object.fromEntries(
          API_CONFIG[key].queryParams.map((param) => [
            param,
            {
              type: PARAM_DESCRIPTIONS[param].type,
              description: PARAM_DESCRIPTIONS[param].description,
            },
          ])
        ),
      });
    }

    // console.log(`User Query: Find the name of AAPL. \nTask: Return a list of function names that are the most relevant to the user query. Here is the list of functions and their description: ${JSON.stringify(functions)}`);


    // fetchCompanyData();
    sendChat();
  }, []);

  return <div>Test</div>;
}