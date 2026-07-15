"use client";

import FavoritesList from "@/components/favorites/FavoritesList";
import useFavorites from "@/hooks/useFavorites";
import HeroSection from "@/components/home/HeroSection";

export default function FavoritePage() {
  
  const { favorites, removeFavorite, } = useFavorites();
  
  

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 text-slate-900 dark:bg-slate-950 dark:text-white">

      <HeroSection />

      <div className="mt-12">
        <FavoritesList
          favorites={favorites}
          removeFavorite={removeFavorite}
          
        />
      </div>

    </div>
  );
}