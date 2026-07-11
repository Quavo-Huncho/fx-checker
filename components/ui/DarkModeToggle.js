"use client";

import {
  useEffect,
  useState,
} from "react";

export default function DarkModeToggle() {
  const [darkMode, setDarkMode] =
    useState(false);

  useEffect(() => {
    const savedTheme =
      localStorage.getItem("theme");

    if (savedTheme === "dark") {
      document.documentElement.classList.add(
        "dark"
      );
      setDarkMode(true);
    }
  }, []);

  function toggleTheme() {
    if (darkMode) {
      document.documentElement.classList.remove(
        "dark"
      );

      localStorage.setItem(
        "theme",
        "light"
      );
    } else {
      document.documentElement.classList.add(
        "dark"
      );

      localStorage.setItem(
        "theme",
        "dark"
      );
    }

    setDarkMode(!darkMode);
  }

  return (
    <button
      onClick={toggleTheme}
      className="cursor-pointer rounded-xl bg-white px-4 py-2 text-sm font-medium shadow transition hover:bg-slate-100 dark:bg-slate-800 dark:text-white dark:hover:bg-slate-700"
    >
      {darkMode
        ? "☀️ Light"
        : "🌙 Dark"}
    </button>
  );
}