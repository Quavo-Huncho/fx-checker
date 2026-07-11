export default function Footer() {
  return (
    <footer className="mt-16 border-t border-green-700 bg-green-600 text-white transition-all duration-300 dark:border-slate-700 dark:bg-slate-900">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-xl font-bold">
              FX Checker
            </h3>

            <p className="mt-3 text-sm text-green-100 dark:text-slate-400">
              Real-time currency conversion,
              market tracking, exchange-rate
              history, favorites and conversion
              logs in one place.
            </p>
          </div>

          <div>
            <h4 className="font-semibold">
              Features
            </h4>

            <ul className="mt-4 space-y-2 text-sm text-green-100 dark:text-slate-400">
              <li>Currency Converter</li>
              <li>Market Dashboard</li>
              <li>Rate History Charts</li>
              <li>Favorites</li>
              <li>Conversion Logs</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold">
              Resources
            </h4>

            <ul className="mt-4 space-y-2 text-sm text-green-100 dark:text-slate-400">
              <li>Frankfurter API</li>
              <li>Frontend Mentor</li>
              <li>Documentation</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold">
              Built With
            </h4>

            <ul className="mt-4 space-y-2 text-sm text-green-100">
              <li>Next.js</li>
              <li>Tailwind CSS</li>
              <li>Local Storage</li>
              <li>Frankfurter API</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-green-700 dark:border-slate-700 pt-6 text-center text-sm text-green-100 dark:text-slate-400">
          © {new Date().getFullYear()} FX
          Checker • Built for the Frontend
          Mentor Hackathon
        </div>
      </div>
    </footer>
  );
}