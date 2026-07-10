"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] =
    useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-green-600 bg-green-500 shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white">
            ↗
          </div>

          <h1 className="text-2xl font-bold text-slate-900">
            FX Checker
          </h1>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden gap-8 text-sm font-medium text-slate-800 md:flex">
          <Link href="/" className="hover:text-blue-700">
            Home
          </Link>

          <Link
            href="/convert"
            className="hover:text-blue-700"
          >
            Converter
          </Link>

          <Link
            href="/market"
            className="hover:text-blue-700"
          >
            Markets
          </Link>

          <Link
            href="/histories"
            className="hover:text-blue-700"
          >
            History
          </Link>

          <Link
            href="/favorite"
            className="hover:text-blue-700"
          >
            Favorites
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() =>
            setIsOpen(!isOpen)
          }
          className="rounded-lg p-2 text-slate-900 md:hidden"
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="border-t border-green-600 bg-green-500 md:hidden">
          <div className="flex flex-col px-6 py-4 text-sm font-medium text-slate-900">
            <Link
              href="/"
              className="py-3"
              onClick={() =>
                setIsOpen(false)
              }
            >
              Home
            </Link>

            <Link
              href="/convert"
              className="py-3"
              onClick={() =>
                setIsOpen(false)
              }
            >
              Converter
            </Link>

            <Link
              href="/market"
              className="py-3"
              onClick={() =>
                setIsOpen(false)
              }
            >
              Markets
            </Link>

            <Link
              href="/histories"
              className="py-3"
              onClick={() =>
                setIsOpen(false)
              }
            >
              History
            </Link>

            <Link
              href="/favorite"
              className="py-3"
              onClick={() =>
                setIsOpen(false)
              }
            >
              Favorites
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}