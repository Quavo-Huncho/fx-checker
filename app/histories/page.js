"use client";

import ConversionHistory from "@/components/history/ConversionHistory";
import useHistory from "@/hooks/useHistory";
import Link from "next/link";


export default function HistoryPage() {
  
  const { history, removeHistory, clearHistory, } = useHistory();
  

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 text-slate-900 dark:bg-slate-950 dark:text-white">

      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-green-500 via-green-600 to-emerald-700 px-6 py-16 text-white shadow-xl transition-all duration-300 dark:from-slate-900 dark:via-slate-800 dark:to-slate-950 md:px-12 md:py-24">
      {/* Background Blur Effects */}
      <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-white/10 blur-3xl"></div>
      <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-blue-400/20 blur-3xl"></div>

      <div className="relative grid items-center gap-12 lg:grid-cols-2">
        {/* Left Content */}
        <div>
          <span className="rounded-full bg-white/20 px-4 py-2 text-sm font-medium backdrop-blur">
            🚀 Real-Time Exchange Rates
          </span>

          <h1 className="mt-6 text-4xl font-extrabold leading-tight md:text-6xl">
            Convert Currencies
            <br />
            Instantly With
            <span className="text-yellow-300">
              {" "}Live Rates
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg text-green-50 dark:text-slate-300">
            FX Checker helps you convert currencies,
            track market movements, monitor exchange
            rate history, and save your favorite
            currency pairs—all in one modern
            dashboard.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/convert"
              className="rounded-2xl bg-white px-6 py-3 font-semibold text-green-700 transition hover:scale-105"
            >
              Start Converting
            </Link>

            <a
              href="#chart"
              className="rounded-2xl border border-white px-6 py-3 font-semibold transition hover:bg-white hover:text-green-700"
            >
              View Trends
            </a>
          </div>
        </div>

        {/* Right Content */}
        <div className="grid gap-4">
          <div className="rounded-3xl bg-white/10 dark:bg-slate-800/70 p-6 backdrop-blur">
            <p className="text-sm text-green-100 dark:text-slate-400">
              Popular Pair
            </p>

            <h3 className="mt-2 text-3xl font-bold">
              EUR → USD
            </h3>

            <p className="mt-2 text-green-100 dark:text-slate-400">
              Monitor real-time currency movements.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-3xl bg-white/10 dark:bg-slate-800/70 p-6 backdrop-blur">
              <h3 className="text-3xl font-bold">
                30+
              </h3>

              <p className="text-green-100 dark:text-slate-400">
                Supported Currencies
              </p>
            </div>

            <div className="rounded-3xl bg-white/10 dark:bg-slate-800/70 p-6 backdrop-blur">
              <h3 className="text-3xl font-bold">
                Live
              </h3>

              <p className="text-green-100 dark:text-slate-400">
                ECB Exchange Data
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

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