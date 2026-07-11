"use client";

import { useEffect, useState } from "react";

export default function useRateHistory(
  from,
  to,
  range = "1M"
) {
  const [data, setData] = useState([]);
  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    async function fetchHistory() {
      if (!from || !to) {
        setData([]);
        setLoading(false);
        return;
      }

      try {
        setLoading(true);

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

        const url = `/api/history?from=${from}` + `&to=${to}` + `&start=${start}` + `&end=${end}`;
        
        console.log(
          "History URL:",
          url
        );

        const response =
          await fetch(url);

        if (!response.ok) {
          throw new Error(
            `HTTP ${response.status}`
          );
        }

        const result =
          await response.json();

        console.log(
          "History Result:",
          result
        );

        if (
          !result ||
          !result.rates
        ) {
          setData([]);
          return;
        }

        const chartData =
          Object.entries(
            result.rates
          ).map(
            ([date, rates]) => ({
              date:
                range === "1W" ||
                range === "1M"
                  ? date.slice(5)
                  : date,
              rate:
                Number(
                  rates[to]
                ),
            })
          );

        setData(chartData);
      } catch (error) {
        console.error(
          "History Error:",
          error
        );

        setData([]);
      } finally {
        setLoading(false);
      }
    }

    fetchHistory();
  }, [from, to, range]);

  return {
    data,
    loading,
  };
}