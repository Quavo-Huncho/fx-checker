"use client";

import { useEffect, useState } from "react";

export default function useRateHistory(
  from,
  to
) {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchHistory() {
      try {
        const today = new Date();

        const oneMonthAgo = new Date();

        oneMonthAgo.setMonth(
          today.getMonth() - 1
        );

        const start =
          oneMonthAgo
            .toISOString()
            .split("T")[0];

        const end =
          today
            .toISOString()
            .split("T")[0];

        const response =
          await fetch(
            `https://api.frankfurter.app/${start}..${end}?from=${from}&to=${to}`
          );

        const data =
          await response.json();

        const chartData =
          Object.entries(
            data.rates
          ).map(
            ([date, rate]) => ({
              date,
              rate:
                rate[to],
            })
          );

        setData(chartData);
      } catch (error) {
        console.error(error);
      }
    }

    fetchHistory();
  }, [from, to]);

  return data;
}