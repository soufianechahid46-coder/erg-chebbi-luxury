export function MessagesTable({ rows }: { rows: Array<Record<string, unknown>> }) {
  if (!rows.length) {
    return <div className="rounded-[28px] border border-[#e8dcc4] bg-white p-8 text-sm text-charcoal/60">No messages yet.</div>;
  }

  return (
    <div className="overflow-hidden rounded-[28px] border border-[#e8dcc4] bg-white shadow-soft">
      <div className="overflow-auto">
        <table className="min-w-full text-left text-sm">
          <thead className="bg-[#fbf8f1] text-charcoal/55">
            <tr>
              <th className="px-5 py-4 font-medium">Name</th>
              <th className="px-5 py-4 font-medium">Subject</th>
              <th className="px-5 py-4 font-medium">Message</th>
              <th className="px-5 py-4 font-medium">Date</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={String(row.id)} className="border-t border-[#f1e7d2]">
                <td className="px-5 py-4">
                  <div className="font-medium text-charcoal">{String(row.full_name ?? '')}</div>
                  <div className="text-xs text-charcoal/50">{String(row.email ?? '')}</div>
                </td>
                <td className="px-5 py-4">{String(row.subject ?? '')}</td>
                <td className="max-w-[480px] px-5 py-4 text-charcoal/75">{String(row.message ?? '')}</td>
                <td className="px-5 py-4 text-charcoal/60">{String(row.created_at ?? '')}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
