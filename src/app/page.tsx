"use client";
import { useEffect, useState } from "react";
import { determineInternetUse, getRelevantEndpoints, askPerplexity, prepareCallingFMP, callFmpEndpoints, getResponse, prompt } from "@/lib/pipeline";
import { renderText } from "@/lib/renderer";
import { Tree, TreeNode } from "@/lib/tree";



export default function Page() {
  const [progress, setProgress] = useState("test");
  const [html, setHtml] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      // const response = await prompt("What are Mark Zuckerberg's and Satya Nadella's recent comments about AI?", setProgress);
      // setHtml(await renderText(response));
    };
    fetchData();
    // prompt("Summarize Spotify's latest conference call. use earningsTranscript.", setProgress);
    // Create a new tree and add some nodes.

  }, []);


  return <div dangerouslySetInnerHTML={{ __html: html }}></div>;
}