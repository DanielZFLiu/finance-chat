"use client";
import { useEffect } from "react";
// import { determineInternetUse, getRelevantEndpoints, askPerplexity, prepareCallingFMP, callFmpEndpoints } from "@/lib/pipeline";


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
  useEffect(() => {
    const fetchData = async () => {
      // const endpoints = await getRelevantEndpoints("Summarize Spotify's latest conference call.", "o3-mini");
      // let relevantFunctions = endpoints.relevantFunctions;
      // console.log(relevantFunctions);
      // console.log(await determineInternetUse("What is the weather in london right now?"));
      // console.log(await askPerplexity("How big is the universe?"));
      // let functionCalls = await prepareCallingFMP("Summarize Spotify's latest conference call.", relevantFunctions, "o3-mini");
      // console.log(functionCalls);
      // console.log(await callFmpEndpoints(functionCalls));
    };
    fetchData();
  }, []);

  return <div>Test</div>;
}