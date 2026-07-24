"use client";

import { useState } from "react";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

import useRateHistory from "@/hooks/useRateHistory";

export default function RateHistoryChart({
  from,
  to,
}) {
  const [range, setRange] =
    useState("1M");

  const {
    data,
    loading,
  } = useRateHistory(
    from,
    to,
    range
  );

  const ranges = [
    "1W",
    "1M",
    "3M",
    "1Y",
    "5Y",
  ];

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">
      <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">
            📈 Exchange Rate History
          </h2>

          <p className="text-sm text-slate-500 dark:text-slate-400">
            {from} → {to}
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {ranges.map((item) => (
            <button
              key={item}
              onClick={() =>
                setRange(item)
              }
              className={`rounded-xl px-4 py-2 text-sm font-medium transition cursor-pointer ${
                range === item
                  ? "bg-blue-600 text-white"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      {loading ? (
        <div className="flex h-80 items-center justify-center">
          <p>
            Loading chart...
          </p>
        </div>
      ) : data.length === 0 ? (
        <div className="flex h-80 flex-col items-center justify-center text-center">
          <div className="text-5xl mb-3">
            📉
          </div>

          <p className="font-medium text-slate-600 dark:text-slate-300">
            Historical data is not available
          </p>

          <p className="mt-2 text-sm text-slate-500">
            This currency pair is not supported by
            the historical rates provider.
          </p>
        </div>
      ) : (
        <div className="h-80">
          <ResponsiveContainer
            width="100%"
            height="100%"
          >
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />

              <XAxis
                dataKey="date"
              />

              <YAxis />

              <Tooltip />

              <Line
                type="monotone"
                dataKey="rate"
                stroke="#2563eb"
                strokeWidth={3}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      )}
    </div>
  );
}