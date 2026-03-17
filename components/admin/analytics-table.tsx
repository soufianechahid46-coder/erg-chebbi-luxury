export function AnalyticsTable({ rows }: { rows: Array<{ path: string; views: number }> }) {
  return (
    <div className="overflow-hidden rounded-[28px] border border-[#e8dcc4] bg-white shadow-soft">
      <table className="min-w-full text-left text-sm">
        <thead className="bg-[#fbf8f1] text-charcoal/55">
          <tr>
            <th className="px-5 py-4 font-medium">Path</th>
            <th className="px-5 py-4 font-medium">Views</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.path} className="border-t border-[#f1e7d2]">
              <td className="px-5 py-4">{row.path}</td>
              <td className="px-5 py-4">{row.views}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
