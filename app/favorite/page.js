"use client";

import FavoritesList from "@/components/favorites/FavoritesList";
import useFavorites from "@/hooks/useFavorites";

export default function FavoritePage() {
  
  const { favorites, removeFavorite, } = useFavorites();
  
  

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 text-slate-900 dark:bg-slate-950 dark:text-white">

      <FavoritesList
        favorites={favorites}
        removeFavorite={removeFavorite}
        
      />

    </div>
  );
}