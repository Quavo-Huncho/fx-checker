export default function StatsCard({
  title,
  value,
  change,
}) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <p className="text-sm text-slate-500">
        {title}
      </p>

      <h3 className="mt-2 text-4xl font-bold text-slate-900">
        {value}
      </h3>

      <p className="mt-3 text-sm font-medium text-emerald-600">
        {change}
      </p>
    </div>
  );
}