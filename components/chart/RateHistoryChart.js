"use client";

import { useEffect, useState } from "react";

export default function useRateHistory(
  from,
  to,
  range
) {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchHistory() {
      try {
        const today = new Date();
        const startDate = new Date();

        switch (range) {
          case "1W":
            startDate.setDate(
              today.getDate() - 7
            );
            break;

          case "1M":
            startDate.setMonth(
              today.getMonth() - 1
            );
            break;

          case "3M":
            startDate.setMonth(
              today.getMonth() - 3
            );
            break;

          case "1Y":
            startDate.setFullYear(
              today.getFullYear() - 1
            );
            break;

          case "5Y":
            startDate.setFullYear(
              today.getFullYear() - 5
            );
            break;

          default:
            startDate.setMonth(
              today.getMonth() - 1
            );
        }

        const start =
          startDate
            .toISOString()
            .split("T")[0];

        const end =
          today
            .toISOString()
            .split("T")[0];

        const response = await fetch(
          `https://api.frankfurter.app/${start}..${end}?from=${from}&to=${to}`
        );

        const result =
          await response.json();

        if (!result.rates) {
          setData([]);
          return;
        }

        const chartData = Object.entries(
          result.rates
        ).map(([date, rates]) => ({
          date:
            range === "1W" ||
            range === "1M"
              ? date.slice(5)
              : date,
          rate: rates[to],
        }));

        setData(chartData);
      } catch (error) {
        console.error(
          "Chart Error:",
          error
        );
      }
    }

    fetchHistory();
  }, [from, to, range]);

  return data;
}