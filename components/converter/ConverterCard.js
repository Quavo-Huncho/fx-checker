"use client";

import { useEffect, useState } from "react";
import {
  convertCurrency,
  getCurrencies,
} from "@/lib/api";

import CurrencySelect from "@/components/ui/CurrencySelect";

export default function ConverterCard({
  from,
  setFrom,
  to,
  setTo,
  addFavorite,
  favorites,
  addHistory,
}) {
  const [currencies, setCurrencies] =
    useState([]);

  const [amount, setAmount] =
    useState(1);

  const [result, setResult] =
    useState(null);

  const [loading, setLoading] =
    useState(false);

  useEffect(() => {
    async function fetchCurrencies() {
      try {
        const data =
          await getCurrencies();

        setCurrencies(data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchCurrencies();
  }, []);


  async function handleConvert() {
    if (!amount || amount <= 0) {
      setResult(null);
      return;
    }

    try {
      setLoading(true);

      const convertedAmount =
        await convertCurrency(
          amount,
          from,
          to
        );

      setResult(convertedAmount);

      addHistory({
        amount,
        from,
        to,
        result:
          convertedAmount.toFixed(2),
      });
    } catch (error) {
      console.error(error);
      setResult(null);
    } finally {
      setLoading(false);
    }
  }

  function swapCurrencies() {
    setFrom(to);
    setTo(from);
  }

  if (currencies.length === 0) {
    return (
      <div className="rounded-3xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-8">
        Loading currencies...
      </div>
    );
  }

  return (
    <div className="rounded-3xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-8 shadow-sm">
      <h2 className="mb-6 text-2xl font-bold text-slate-900 dark:text-white">
        Currency Converter
      </h2>

      <div className="space-y-5">
        <input
          type="number"
          min="1"
          value={amount}
          onChange={(e) =>
            setAmount(
              Number(
                e.target.value
              )
            )
          }
          className="w-full rounded-2xl border border-slate-300 p-4 text-lg outline-none focus:border-blue-500"
        />

        <div className="grid gap-4 md:grid-cols-[1fr_auto_auto_1fr]">
          <CurrencySelect
            currencies={currencies}
            selectedCurrency={from}
            onSelect={setFrom}
          />

          <button
            onClick={swapCurrencies}
            className="cursor-pointer rounded-2xl border border-slate-300 px-4 py-2 font-semibold transition hover:bg-slate-100"
          >
            ⇄
          </button>

          <button
            onClick={handleConvert}
            disabled={loading}
            className="cursor-pointer rounded-2xl bg-blue-500 px-4 py-2 font-semibold text-white transition hover:bg-blue-600 disabled:cursor-not-allowed disabled:bg-slate-400"
          >
            {loading ? "Converting..." : "Convert"}
          </button>

          <CurrencySelect
            currencies={currencies}
            selectedCurrency={to}
            onSelect={setTo}
          />
        </div>

        <div className="rounded-2xl bg-slate-50 dark:bg-slate-800 p-5">
          <p className="text-sm text-slate-900 dark:text-white">
            Converted Amount
          </p>

          {loading ? (
            <p className="mt-2 text-lg font-medium">
              Loading...
            </p>
          ) : (
            <h3 className="mt-2 text-3xl font-bold text-slate-900 dark:text-white">
              {result !== null
                ? `${Number(
                    result
                  ).toLocaleString()} ${to}`
                : "--"}
            </h3>
          )}
        </div>

        <button
          onClick={() =>
            addFavorite(from, to)
          }
          className="cursor-pointer rounded-xl bg-yellow-400 px-4 py-2 font-medium transition hover:bg-yellow-500"
        >
          {favorites.includes(
            `${from}-${to}`
          )
            ? "★ Favorited"
            : "☆ Add Favorite"}
        </button>
      </div>
    </div>
  );
}