"use client";

import ConversionHistory from "@/components/history/ConversionHistory";
import useHistory from "@/hooks/useHistory";


export default function HistoryPage() {
  
  const { history, removeHistory, clearHistory, } = useHistory();
  

  return (
    <div className="rounded-3xl border border-slate-200 bg-blue-800 mt-20 mx-15 p-6 shadow-sm">

      <ConversionHistory
        history={history}
        removeHistory={removeHistory}
        clearHistory={clearHistory}
      />

    </div>
  );
}