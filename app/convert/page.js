"use client";

import { useState } from "react";
import useFavorites from "@/hooks/useFavorites";
import useHistory from "@/hooks/useHistory";
import ConverterCard from "@/components/converter/ConverterCard";
import FavoritesList from "@/components/favorites/FavoritesList";
import ConversionHistory from "@/components/history/ConversionHistory";

export default function FavoritePage() {
  
  const [from, setFrom] = useState("EUR");
  const [to, setTo] = useState("USD");
  const { favorites, addFavorite, removeFavorite, } = useFavorites();
  const { history, addHistory, removeHistory, clearHistory, } = useHistory();

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 text-slate-900 dark:bg-slate-950 dark:text-white">

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
  );
}