"use client";

import Link from "next/link";

export default function Home() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10 text-slate-900 dark:bg-slate-950 dark:text-white">
      {/* Hero */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-green-500 via-green-600 to-emerald-700 px-6 py-16 text-white shadow-xl transition-all duration-300 dark:from-slate-900 dark:via-slate-800 dark:to-slate-950 md:px-12 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <span className="rounded-full bg-white/20 px-4 py-2 text-sm">
              🚀 Frontend Mentor Hackathon
            </span>

            <h1 className="mt-6 text-5xl font-extrabold md:text-7xl">
              Currency Conversion
              <br />
              Made Simple
            </h1>

            <p className="mt-6 text-lg text-green-100">
              Convert currencies in real time,
              track exchange rates, compare markets,
              save favorites and analyze trends.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/dashboard"
                className="rounded-2xl bg-white px-8 py-4 font-semibold text-green-700 transition hover:scale-105"
              >
                Open Dashboard
              </Link>

              <Link
                href="/signup"
                className="rounded-2xl border border-white px-8 py-4 font-semibold transition hover:bg-white hover:text-green-700"
              >
                Create Account
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold">
            Everything You Need
          </h2>

          <p className="mt-4 text-slate-600 dark:text-slate-400">
            Powerful tools for tracking currencies.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-3xl border bg-white p-6 shadow-sm dark:bg-slate-900">
            <h3 className="text-xl font-bold">
              💱 Converter
            </h3>

            <p className="mt-3">
              Convert currencies instantly using
              live exchange rates.
            </p>
          </div>

          <div className="rounded-3xl border bg-white p-6 shadow-sm dark:bg-slate-900">
            <h3 className="text-xl font-bold">
              📈 Charts
            </h3>

            <p className="mt-3">
              Analyze historical exchange rate
              movements.
            </p>
          </div>

          <div className="rounded-3xl border bg-white p-6 shadow-sm dark:bg-slate-900">
            <h3 className="text-xl font-bold">
              ⭐ Favorites
            </h3>

            <p className="mt-3">
              Save your most-used currency pairs.
            </p>
          </div>

          <div className="rounded-3xl border bg-white p-6 shadow-sm dark:bg-slate-900">
            <h3 className="text-xl font-bold">
              📝 History
            </h3>

            <p className="mt-3">
              Track previous conversions and rates.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="rounded-3xl bg-green-600 dark:bg-slate-900 px-6 py-20 text-center text-white">
        <h2 className="text-4xl font-bold">
          Ready to start?
        </h2>

        <p className="mt-4 text-green-100">
          Access the dashboard and begin tracking
          exchange rates today.
        </p>

        <Link
          href="/dashboard"
          className="mt-8 inline-block rounded-2xl bg-white px-8 py-4 font-semibold text-green-700"
        >
          Launch Dashboard
        </Link>
      </section>
    </main>
  );
}