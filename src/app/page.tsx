"use client";
import { useEffect } from "react";
// import { determineInternetUse, getRelevantEndpoints } from "@/lib/pipeline";


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
      // console.log(await getRelevantEndpoints("What are Mark Zuckerberg's and Satya Nadella's recent comments about AI?"));
      // console.log(await determineInternetUse("What is the weather in london right now?"));
    };
    fetchData();
  }, []);

  return <div>Test</div>;
}