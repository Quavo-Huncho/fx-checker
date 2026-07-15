"use client";

import ConversionHistory from "@/components/history/ConversionHistory";
import useHistory from "@/hooks/useHistory";
import HeroSection from "@/components/home/HeroSection";


export default function HistoryPage() {
  
  const { history, removeHistory, clearHistory, } = useHistory();
  

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 text-slate-900 dark:bg-slate-950 dark:text-white">

      <HeroSection />

      <div className="mt-12">
        <ConversionHistory
          history={history}
          removeHistory={removeHistory}
          clearHistory={clearHistory}
        />
      </div>

    </div>
  );
}