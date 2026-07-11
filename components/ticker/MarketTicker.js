"use client";

import { useEffect, useState } from "react";

export default function MarketTicker() {
  const [markets, setMarkets] = useState([]);

  useEffect(() => {
    async function fetchMarkets() {
      try {
        const pairs = [
          ["EUR", "USD"],
          ["GBP", "USD"],
          ["USD", "JPY"],
          ["EUR", "GBP"],
          ["EUR", "NGN"],
          ["USD", "CAD"],
        ];

        const results = await Promise.all(
          pairs.map(async ([from, to]) => {
            const response = await fetch(
              `https://api.frankfurter.dev/v2/rate/${from}/${to}`
            );

            const data = await response.json();

            // Fake daily movement for now
            const change =
              (Math.random() * 4 - 2).toFixed(2);

            return {
              pair: `${from}/${to}`,
              rate: data.rate,
              change,
            };
          })
        );

        setMarkets(results);
      } catch (error) {
        console.error(error);
      }
    }

    fetchMarkets();

    const interval = setInterval(
      fetchMarkets,
      60000
    );

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="overflow-hidden rounded-3xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-6 shadow-sm">
      <h2 className="mb-6 text-2xl font-bold text-slate-900 dark:text-white">
        ⭐ Markets
      </h2>
      <div className="flex animate-marquee gap-10 whitespace-nowrap">
        {[...markets, ...markets].map(
          (item, index) => (
            <div
              key={`${item.pair}-${index}`}
              className="flex items-center gap-2 text-lg font-medium"
            >
              <span className="text-slate-700 dark:text-white">
                {item.pair}
              </span>

              <span
                className={
                  Number(item.change) >= 0
                    ? "text-green-600"
                    : "text-red-600"
                }
              >
                {Number(item.change) >= 0
                  ? "▲"
                  : "▼"}{" "}
                {Math.abs(item.change)}%
              </span>
            </div>
          )
        )}
      </div>
    </div>
  );
}