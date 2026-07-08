"use client";

import { useState } from "react";
import ReactCountryFlag from "react-country-flag";
import { currencyToCountry } from "@/lib/currencyToCountry";

export default function CurrencySelect({
  currencies,
  selectedCurrency,
  onSelect,
}) {
  const [search, setSearch] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const filteredCurrencies = currencies.filter(
    (currency) =>
      currency.name
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      currency.iso_code
        .toLowerCase()
        .includes(search.toLowerCase())
  );

  function getCountryCode(currencyCode) {
    const specialCases = {
      EUR: "EU",
      XAF: "CM",
      XOF: "SN",
      XCD: "AG",
    };

    return (
      specialCases[currencyCode] ||
      currencyCode.slice(0, 2)
    );
  }

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full rounded-2xl border border-slate-300 bg-white p-4 text-left cursor-pointer"
      >
        <div className="flex items-center gap-3">
          <ReactCountryFlag
            countryCode={getCountryCode(selectedCurrency)}
            svg
            style={{
              width: "1.5em",
              height: "1.5em",
            }}
          />

          <span className="font-medium">
            {selectedCurrency}
          </span>
        </div>
      </button>

      {isOpen && (
        <div className="absolute z-50 mt-2 w-full rounded-2xl border border-slate-200 bg-white shadow-lg">
          <input
            type="text"
            placeholder="Search currency..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
            className="w-full border-b border-slate-200 p-3 outline-none"
          />

          <div className="max-h-64 overflow-y-auto">
            {filteredCurrencies.map(
              (currency) => (
                <button
                  key={currency.iso_code}
                  type="button"
                  onClick={() => {
                    onSelect(
                      currency.iso_code
                    );
                    setIsOpen(false);
                    setSearch("");
                  }}
                  className="flex w-full items-center justify-between px-4 py-3 text-left hover:bg-slate-100 cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <ReactCountryFlag
                      countryCode={getCountryCode(currency.iso_code)}
                      svg
                      style={{
                        width: "1.5em",
                        height: "1.5em",
                      }}
                    />

                    <span className="font-medium">
                      {currency.iso_code}
                    </span>
                  </div>

                  <span className="text-sm text-slate-500">
                    {currency.name}
                  </span>
                </button>
              )
            )}
          </div>
        </div>
      )}
    </div>
  );
}