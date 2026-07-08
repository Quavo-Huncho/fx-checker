"use client";

import { useState } from "react";

export default function ConversionHistory({ history, removeHistory, clearHistory,
}) {
  
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">
          📝 Conversion History
        </h2>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-sm font-medium text-blue-600 hover:text-blue-800 cursor-pointer"
        >
          {isOpen ? "Hide" : "Show"}
        </button>
      </div>

      {isOpen && (
        <div className="mt-4">
          {history.length === 0 ? (
            <p className="text-slate-500">
              No conversions yet.
            </p>
          ) : (
            <>
              <div className="space-y-3">
                {history.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between rounded-xl bg-slate-50 p-3"
                  >
                    <div>
                      <p className="font-medium">
                        {item.amount} {item.from}
                      </p>

                      <p className="text-sm text-slate-500">
                        {item.result} {item.to}
                      </p>
                    </div>

                    <button
                      onClick={() =>
                        removeHistory(index)
                      }
                      className="text-sm text-red-500 hover:text-red-700 cursor-pointer"
                    >
                      Remove
                    </button>
                  </div>
                ))}
              </div>

              <button
                onClick={clearHistory}
                className="mt-4 rounded-xl bg-red-100 px-4 py-2 text-sm font-medium text-red-600 hover:text-red-800 cursor-pointer"
              >
                Clear All
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
}