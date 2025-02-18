"use client";
import { useEffect, useState  } from "react";
import { determineInternetUse, getRelevantEndpoints, askPerplexity, prepareCallingFMP, callFmpEndpoints, getResponse, prompt } from "@/lib/pipeline";


// test fmp api
// async function fetchCompanyData() {
//   const res = await fetch("/api/fmp?type=fmpArticles&page=1&limit=5");
//   const data = await res.json();
//   console.log(data);
// }

// test perplexity api
// async function askPerplexity() {
//   const response = await fetch("/api/perplexity", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       model: "sonar-pro",
//       messages: [
//         {
//           role: "user",
//           content: "How big is the universe?"
//         }
//       ]
//     }),
//   });
//   const data = await response.json();
//   console.log(data);
// }

export default function Page() {
  const [progress, setProgress] = useState("test");

  useEffect(() => {
    const fetchData = async () => {
      // let query = "Summarize Spotify's latest conference call. use earningsTranscript.";
      // const endpoints = await getRelevantEndpoints(query);
      // let relevantFunctions = endpoints.relevantFunctions;
      // console.log(relevantFunctions);
      // // console.log(await determineInternetUse("What is the weather in london right now?"));
      // // console.log(await askPerplexity("How big is the universe?"));
      // let functionCalls = await prepareCallingFMP(query, relevantFunctions);
      // console.log(functionCalls);
      // let relevantData = await callFmpEndpoints(functionCalls);
      // console.log(relevantData);
      // let response = await getResponse(query, JSON.stringify(relevantData), true);
      // console.log(await prompt("What are Mark Zuckerberg's and Satya Nadella's recent comments about AI?", setProgress));
    };
    fetchData();
    // prompt("Summarize Spotify's latest conference call. use earningsTranscript.", setProgress);
  }, []);
 

  return <div>{progress}</div>;
}