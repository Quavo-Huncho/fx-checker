"use client";

import Link from "next/link";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowUp,
} from "react-icons/fa";

export default function Footer() {
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <footer className="mt-16 w-full border-t border-green-700 bg-green-600 text-white transition-colors duration-300 dark:border-slate-700 dark:bg-slate-900">
      <div className="mx-auto max-w-7xl px-6 py-14">

        {/* Main Footer */}
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white">
                ↗
              </div>

              <h2 className="text-2xl font-bold">
                FX Checker
              </h2>
            </div>

            <p className="mt-5 leading-7 text-green-100 dark:text-slate-400">
              FX Checker helps you convert currencies,
              monitor exchange rates, save favorites,
              track conversion history, and analyze
              currency trends using live exchange data.
            </p>

            {/* Social Icons */}
            <div className="mt-6 flex gap-4">

              <a
                href="https://github.com/Quavo-Huncho"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-white/10 p-3 transition hover:bg-white hover:text-green-600"
              >
                <FaGithub size={18} />
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-white/10 p-3 transition hover:bg-white hover:text-green-600"
              >
                <FaLinkedin size={18} />
              </a>

              <a
                href="mailto:your@email.com"
                className="rounded-full bg-white/10 p-3 transition hover:bg-white hover:text-green-600"
              >
                <FaEnvelope size={18} />
              </a>

            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold">
              Quick Links
            </h3>

            <ul className="mt-5 space-y-3 text-green-100 dark:text-slate-400">

              <li>
                <Link
                  href="/"
                  className="transition hover:text-white hover:underline"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/dashboard"
                  className="transition hover:text-white hover:underline"
                >
                  Dashboard
                </Link>
              </li>

              <li>
                <Link
                  href="/market"
                  className="transition hover:text-white hover:underline"
                >
                  Markets
                </Link>
              </li>

              <li>
                <Link
                  href="/favorite"
                  className="transition hover:text-white hover:underline"
                >
                  Favorites
                </Link>
              </li>

              <li>
                <Link
                  href="/histories"
                  className="transition hover:text-white hover:underline"
                >
                  History
                </Link>
              </li>

            </ul>
          </div>

          {/* Features */}
          <div>
            <h3 className="text-xl font-semibold">
              Features
            </h3>

            <ul className="mt-5 space-y-3 text-green-100 dark:text-slate-400">
              <li>💱 Currency Converter</li>
              <li>📈 Live Markets</li>
              <li>📊 Exchange Charts</li>
              <li>⭐ Favorites</li>
              <li>📝 Conversion History</li>
              <li>🌙 Dark Mode</li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-xl font-semibold">
              Resources
            </h3>

            <ul className="mt-5 space-y-3 text-green-100 dark:text-slate-400">

              <li>
                <a
                  href="https://frankfurter.dev"
                  target="_blank"
                  className="transition hover:text-white hover:underline"
                >
                  Frankfurter API
                </a>
              </li>

              <li>
                <a
                  href="https://www.frontendmentor.io"
                  target="_blank"
                  className="transition hover:text-white hover:underline"
                >
                  Frontend Mentor
                </a>
              </li>

              <li>Next.js</li>

              <li>Tailwind CSS</li>

              <li>Supabase</li>

            </ul>

            
          </div>

        </div>

        {/* Bottom Footer */}

        <div className="mt-14 border-t border-green-700 pt-8 dark:border-slate-700">

          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">

            <div className="text-center text-sm text-green-100 dark:text-slate-400 md:text-left">
              <p>
                © {new Date().getFullYear()} FX Checker
              </p>

              <p className="mt-1">
                Built for the Frontend Mentor Hackathon
              </p>

              <p className="mt-1">
                Version 1.0.0
              </p>
            </div>

            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 rounded-xl bg-white px-5 py-3 font-semibold text-green-700 transition hover:scale-105"
            >
              <FaArrowUp />
              Back to Top
            </button>

          </div>

        </div>

      </div>
    </footer>
  );
}