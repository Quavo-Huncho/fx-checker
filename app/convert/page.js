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
    <div className="rounded-3xl border border-slate-200 bg-blue-800 mt-20 mx-15 p-6 shadow-sm">

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