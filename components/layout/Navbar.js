"use client";

import { useState } from "react";
import Link from "next/link";
import DarkModeToggle from "@/components/ui/DarkModeToggle";
import { useRouter } from "next/navigation";
import useAuth from "@/hooks/useAuth";
import { signOut } from "@/lib/auth";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const router = useRouter();

  const { user } = useAuth();

  const guestLinks = [{
      name: "Home",
      href: "/",
    },
    {
      name: "Sign Up",
      href: "/signup",
    },
    {
      name: "Sign In",
      href: "/signin",
    },
  ];

  const userLinks = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Dashboard",
      href: "/dashboard",
    },
    {
      name: "Markets",
      href: "/market",
    },
    {
      name: "History",
      href: "/histories",
    },
    {
      name: "Favorites",
      href: "/favorite",
    },
  ];

  const navLinks = user ? userLinks : guestLinks;

  async function handleLogout() {
    await signOut();

    router.push("/");
  }

  return (
    <header className="sticky top-0 z-50 border-b border-green-600 bg-green-500 shadow-sm transition-colors dark:border-slate-700 dark:bg-slate-900">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6">
        
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-3"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white">
            ↗
          </div>

          <h1 className="text-xl font-bold text-slate-900 dark:text-white sm:text-2xl">
            FX Checker
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-6 md:flex">
          <nav className="flex items-center gap-8 text-sm font-medium">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-slate-800 transition hover:text-blue-700 dark:text-slate-300 dark:hover:text-blue-400"
              >
                {link.name}
              </Link>
            ))}

            {user && (
              <button
                onClick={handleLogout}
                className="rounded-lg bg-red-500 px-4 py-2 text-white hover:bg-red-600"
              >
                Logout
              </button>
            )}
          </nav>

          <DarkModeToggle />
        </div>

        {/* Mobile Controls */}
        <div className="flex items-center gap-3 md:hidden">
          <DarkModeToggle />

          <button
            onClick={() =>
              setIsOpen(!isOpen)
            }
            className="rounded-lg p-2 text-slate-900 transition hover:bg-white/20 dark:text-white"
          >
            {isOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="border-t border-green-600 bg-green-500 dark:border-slate-700 dark:bg-slate-900 md:hidden">
          <div className="flex flex-col px-6 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() =>
                  setIsOpen(false)
                }
                className="rounded-lg py-3 text-sm font-medium text-slate-900 transition hover:bg-white/20 dark:text-white"
              >
                {link.name}
              </Link>
            ))}

            {user && (
              <button
                onClick={handleLogout}
                className="mt-3 rounded-lg bg-red-500 px-4 py-3 text-white"
              >
                Logout
              </button>
            )}
          </div>
        </nav>
      )}
    </header>
  );
}