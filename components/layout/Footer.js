export default function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold text-slate-900">
              FX Checker
            </h3>

            <p className="mt-3 text-sm leading-6 text-slate-600">
              A modern foreign exchange dashboard
              built for tracking live currency
              rates, historical trends, favorites,
              and conversion history.
            </p>
          </div>

          {/* Features */}
          <div>
            <h4 className="font-semibold text-slate-900">
              Features
            </h4>

            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              <li>Live Currency Conversion</li>
              <li>Exchange Rate Charts</li>
              <li>Market Ticker</li>
              <li>Favorite Currency Pairs</li>
              <li>Conversion History</li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-slate-900">
              Resources
            </h4>

            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              <li>
                <a
                  href="https://frankfurter.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-600"
                >
                  Frankfurter API
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="hover:text-blue-600"
                >
                  Documentation
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="hover:text-blue-600"
                >
                  Exchange Rates
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-semibold text-slate-900">
              Connect
            </h4>

            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              <li>
                <a
                  href="#"
                  className="hover:text-blue-600"
                >
                  GitHub
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="hover:text-blue-600"
                >
                  Frontend Mentor
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="hover:text-blue-600"
                >
                  Portfolio
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-slate-200 pt-6 text-sm text-slate-500 md:flex-row">
          <p>
            © {new Date().getFullYear()} FX Checker.
            All rights reserved.
          </p>

          <p>
            Built with Next.js, Tailwind CSS &
            Frankfurter API
          </p>
        </div>
      </div>
    </footer>
  );
}