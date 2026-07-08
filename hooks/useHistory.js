"use client";

import { useEffect, useState } from "react";

export default function useHistory() {
  const [history, setHistory] = useState(() => {
    if (typeof window === "undefined") {
      return [];
    }

    const saved = localStorage.getItem(
      "fx-history"
    );

    return saved
      ? JSON.parse(saved)
      : [];
  });

  useEffect(() => {
    localStorage.setItem(
      "fx-history",
      JSON.stringify(history)
    );
  }, [history]);

  function addHistory(record) {
    setHistory((prev) => [
      record,
      ...prev.slice(0, 19),
    ]);
  }

  function removeHistory(index) {
    setHistory((prev) =>
      prev.filter(
        (_, i) => i !== index
      )
    );
  }

  function clearHistory() {
    setHistory([]);
  }

  return {
    history,
    addHistory,
    removeHistory,
    clearHistory,
  };
}