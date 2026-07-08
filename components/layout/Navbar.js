"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-green-500 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white">
            ↗
          </div>

          <h1 className="text-2xl font-bold text-slate-900">
            FX Checker
          </h1>
        </div>

        <nav className="hidden gap-8 text-sm font-medium text-slate-600 md:flex">
          <Link href="/" className="hover:text-blue-600">
            Home
          </Link>
          <Link href="/convert" className="hover:text-blue-600 cursor-pointer">
            Converter
          </Link>

          <Link href="/market" className="hover:text-blue-600 cursor-pointer">
            Markets
          </Link>

          <Link href="/histories" className="hover:text-blue-600 cursor-pointer">
            History
          </Link>

          <Link href="/favorite" className="hover:text-blue-600 cursor-pointer">
            Favorites
          </Link>
        </nav>
      </div>
    </header>
  );
}