"use client";

import MarketTicker from "@/components/ticker/MarketTicker";


export default function market() {
  
  
  return (
    <div className="rounded-3xl border border-slate-200 dark:border-slate-700 bg-blue-800 mt-20 mx-15 p-6 shadow-sm">
      <div className="mx-2">
        <MarketTicker />
      </div>
      

    </div>
  );
}