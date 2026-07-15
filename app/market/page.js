"use client";

import MarketTicker from "@/components/ticker/MarketTicker";
import HeroSection from "@/components/home/HeroSection";


export default function market() {
  
  
  return (
    <div className="mx-auto max-w-7xl px-4 py-10 text-slate-900 dark:bg-slate-950 dark:text-white">
      <HeroSection />
      <div className="mx-2 mt-12">
        <MarketTicker />
      </div>
      

    </div>
  );
}