"use client";

import FavoritesList from "@/components/favorites/FavoritesList";
import useFavorites from "@/hooks/useFavorites";

export default function FavoritePage() {
  
  const { favorites, removeFavorite, } = useFavorites();
  
  

  return (
    <div className="rounded-3xl border border-slate-200 bg-blue-800 mt-20 mx-15 p-6 shadow-sm">

      <FavoritesList
        favorites={favorites}
        removeFavorite={removeFavorite}
        
      />

    </div>
  );
}