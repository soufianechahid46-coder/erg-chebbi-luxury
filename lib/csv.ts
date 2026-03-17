export function toCsv(rows: Array<Record<string, unknown>>) {
  if (!rows.length) return '';
  const headers = Object.keys(rows[0]);
  const escape = (value: unknown) =>
    `"${
      String(value ?? '')
        .replace(/"/g, '""')
        .replace(/\n/g, ' ')
    }"`;

  const body = rows.map((row) => headers.map((header) => escape(row[header])).join(','));
  return [headers.join(','), ...body].join('\n');
}
