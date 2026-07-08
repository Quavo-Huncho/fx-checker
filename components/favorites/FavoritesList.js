"use client";

import { useState } from "react";

export default function FavoritesList({ favorites, removeFavorite }) {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">
          ⭐ Favorite Pairs
        </h3>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-sm font-medium text-blue-600 hover:text-blue-800 cursor-pointer"
        >
          {isOpen ? "Hide" : "Show"}
        </button>
      </div>

     {isOpen && (
        <div className="mt-4 space-y-3">
          {favorites.length === 0 ? (
            <p className="text-slate-500">
              No favorites yet.
            </p>
          ) : (
            favorites.map((pair) => (
              <div
                key={pair}
                className="flex items-center justify-between rounded-xl bg-slate-50 p-3"
              >
                <span>
                  ⭐ {pair}
                </span>

                <button
                  onClick={() =>
                    removeFavorite(pair)
                  }
                  className="text-red-500 hover:text-red-700 cursor-pointer"
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