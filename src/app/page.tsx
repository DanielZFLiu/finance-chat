"use client";
import { useEffect } from "react";

export default function Page() {
  useEffect(() => {
    async function fetchCompanyData() {
      const res = await fetch("/api/fmp?type=stockSymbolSearch&query=AAPL&limit=50");
      const data = await res.json();
      console.log(data);
    }
    fetchCompanyData();
  }, []);

  return <div>Test</div>;
}