"use client";

import { useState } from "react";
import HeroSection from "@/components/home/HeroSection";
import ConverterCard from "@/components/converter/ConverterCard";
import FavoritesList from "@/components/favorites/FavoritesList";
import ConversionHistory from "@/components/history/ConversionHistory";
import MarketTicker from "@/components/ticker/MarketTicker";
import RateHistoryChart from "@/components/chart/RateHistoryChart";

import useFavorites from "@/hooks/useFavorites";
import useHistory from "@/hooks/useHistory";

export default function Home() {
  const [from, setFrom] = useState("EUR");
  const [to, setTo] = useState("USD");

  const {
    favorites,
    addFavorite,
    removeFavorite,
  } = useFavorites();

  const {
    history,
    addHistory,
    removeHistory,
    clearHistory,
  } = useHistory();

  return (
    <main className="mx-auto max-w-7xl px-4 py-10 text-slate-900 dark:bg-slate-950 dark:text-white">

      <HeroSection />

      <div className="mt-8">
        <MarketTicker />
      </div>

      <div id="converter" className="mt-8 grid gap-6 lg:grid-cols-1 mb-15">
        {/* Converter */}
        <div className="lg:col-span-2">
          <ConverterCard
            from={from}
            setFrom={setFrom}
            to={to}
            setTo={setTo}
            addFavorite={addFavorite}
            favorites={favorites}
            addHistory={addHistory}
          />
        </div>
      </div>

        {/* Sidebar */}
        <div className="space-y-15 mb-15">
          <FavoritesList
            favorites={favorites}
            removeFavorite={removeFavorite}
          />

          <ConversionHistory
            history={history}
            removeHistory={removeHistory}
            clearHistory={clearHistory}
          />
        </div>
      

      {/* Chart */}
      <div id="chart" className="mt-6">
        <RateHistoryChart
          from={from}
          to={to}
        />
      </div>
    </main>
  );
}