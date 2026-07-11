"use client";

import {
  useState,
  useEffect,
  useRef,
} from "react";

import ReactCountryFlag from "react-country-flag";

export default function CurrencySelect({
  currencies,
  selectedCurrency,
  onSelect,
}) {
  const [search, setSearch] =
    useState("");

  const [isOpen, setIsOpen] =
    useState(false);

  const dropdownRef =
    useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(
      event
    ) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(
          event.target
        )
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener(
      "mousedown",
      handleClickOutside
    );

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    };
  }, []);

  const filteredCurrencies =
    currencies.filter(
      (currency) =>
        currency.name
          ?.toLowerCase()
          .includes(
            search.toLowerCase()
          ) ||
        currency.iso_code
          ?.toLowerCase()
          .includes(
            search.toLowerCase()
          )
    );

  function getCountryCode(
    currencyCode
  ) {
    const specialCases = {
      EUR: "EU",
      GBP: "GB",
      USD: "US",
      NGN: "NG",
      CAD: "CA",
      AUD: "AU",
      NZD: "NZ",
      JPY: "JP",
      CNY: "CN",
      INR: "IN",
      CHF: "CH",
      ZAR: "ZA",
      BRL: "BR",
      MXN: "MX",
      KRW: "KR",
      SGD: "SG",
      HKD: "HK",
      SEK: "SE",
      NOK: "NO",
      DKK: "DK",
      PLN: "PL",
      CZK: "CZ",
      HUF: "HU",
      TRY: "TR",
      THB: "TH",
      MYR: "MY",
      PHP: "PH",
      IDR: "ID",
      RON: "RO",
      ILS: "IL",
      ISK: "IS",
      XAF: "CM",
      XOF: "SN",
      XCD: "AG",
    };

    return (
      specialCases[
        currencyCode
      ] ||
      currencyCode.slice(0, 2)
    );
  }

  return (
    <div
      ref={dropdownRef}
      className="relative w-full"
    >
      {/* Selected Currency Button */}
      <button
        type="button"
        onClick={() =>
          setIsOpen(!isOpen)
        }
        className="flex w-full items-center justify-between rounded-2xl border border-slate-300 bg-white dark:bg-slate-900 p-4 text-left transition hover:border-blue-400 cursor-pointer"
      >
        <div className="flex items-center gap-3">
          <ReactCountryFlag
            countryCode={getCountryCode(
              selectedCurrency
            )}
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

        <span>
          {isOpen
            ? "▲"
            : "▼"}
        </span>
      </button>

      {/* Dropdown */}
      {isOpen && (
        <div className="absolute z-50 mt-2 w-full overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 shadow-xl">
          {/* Search */}
          <input
            type="text"
            placeholder="Search currency..."
            value={search}
            onChange={(e) =>
              setSearch(
                e.target.value
              )
            }
            className="w-full border-b border-slate-200 dark:border-slate-700 p-3 outline-none focus:border-blue-500"
          />

          {/* Results */}
          <div className="max-h-72 overflow-y-auto">
            {filteredCurrencies.length >
            0 ? (
              filteredCurrencies.map(
                (
                  currency
                ) => (
                  <button
                    key={
                      currency.iso_code
                    }
                    type="button"
                    onClick={() => {
                      onSelect(
                        currency.iso_code
                      );

                      setIsOpen(
                        false
                      );

                      setSearch(
                        ""
                      );
                    }}
                    className="flex w-full items-center justify-between px-4 py-3 text-left transition hover:bg-slate-100 cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <ReactCountryFlag
                        countryCode={getCountryCode(
                          currency.iso_code
                        )}
                        svg
                        style={{
                          width:
                            "1.5em",
                          height:
                            "1.5em",
                        }}
                      />

                      <span className="font-medium">
                        {
                          currency.iso_code
                        }
                      </span>
                    </div>

                    <span className="text-sm text-slate-500">
                      {
                        currency.name
                      }
                    </span>
                  </button>
                )
              )
            ) : (
              <div className="p-4 text-center text-sm text-slate-500">
                No currency found
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}