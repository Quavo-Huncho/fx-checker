"use client";

import { useEffect, useState } from "react";

export default function useFavorites() {
  const [favorites, setFavorites] = useState(() => {
    if (typeof window === "undefined") {
      return [];
    }

    const saved = localStorage.getItem(
      "fx-favorites"
    );

    return saved
      ? JSON.parse(saved)
      : [];
  });

  useEffect(() => {
    localStorage.setItem(
      "fx-favorites",
      JSON.stringify(favorites)
    );
  }, [favorites]);

  function addFavorite(from, to) {
    const pair = `${from}-${to}`;

    setFavorites((prev) => {
      if (prev.includes(pair)) {
        return prev;
      }

      return [...prev, pair];
    });
  }

  function removeFavorite(pair) {
    setFavorites((prev) =>
      prev.filter(
        (item) => item !== pair
      )
    );
  }

  function clearFavorites() {
    setFavorites([]);
  }

  return {
    favorites,
    addFavorite,
    removeFavorite,
    clearFavorites,
  };
}