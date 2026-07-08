"use client";

import MarketTicker from "@/components/ticker/MarketTicker";


export default function market() {
  
  
  return (
    <div className="rounded-3xl border border-slate-200 bg-blue-800 mt-20  mx-20 py-5 shadow-sm">
      <div className="mx-5">
        <MarketTicker />
      </div>
      

    </div>
  );
}