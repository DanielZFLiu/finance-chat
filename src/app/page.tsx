"use client";
import { send } from "process";
import { useEffect } from "react";

// test fmp api
async function fetchCompanyData() {
  const res = await fetch("/api/fmp?type=stockSymbolSearch&query=AAPL&limit=50");
  const data = await res.json();
  console.log(data);
}

// test openai api
async function sendChat() {
  const response = await fetch("/api/openai", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ message: "Tell me a joke." }),
  });
  const data = await response.json();
  console.log(data.response);
}

export default function Page() {
  useEffect(() => {
    // fetchCompanyData();
    sendChat();
  }, []);

  return <div>Test</div>;
}