"use client";

import { useState } from "react";

export default function FavoritesList({ favorites, removeFavorite }) {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="rounded-3xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          ⭐ Favorite Pairs
        </h3>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-sm font-medium text-blue-600 hover:text-blue-800 dark:hover:text-blue-400 cursor-pointer"
        >
          {isOpen ? "Hide" : "Show"}
        </button>
      </div>

     {isOpen && (
        <div className="mt-4 space-y-3">
          {favorites.length === 0 ? (
            <p className="text-slate-500 dark:text-slate-400">
              No favorites yet.
            </p>
          ) : (
            favorites.map((pair) => (
              <div
                key={pair}
                className="flex items-center justify-between rounded-xl bg-slate-50 dark:bg-slate-800 p-3"
              >
                <span>
                  ⭐ {pair}
                </span>

                <button
                  onClick={() =>
                    removeFavorite(pair)
                  }
                  className="text-red-500 hover:text-red-700 dark:hover:text-red-400 cursor-pointer"
                >
                  Remove
                </button>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
}