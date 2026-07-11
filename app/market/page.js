"use client";

import MarketTicker from "@/components/ticker/MarketTicker";


export default function market() {
  
  
  return (
    <div className="mx-auto max-w-7xl px-4 py-10 text-slate-900 dark:bg-slate-950 dark:text-white">
      <div className="mx-2">
        <MarketTicker />
      </div>
      

    </div>
  );
}