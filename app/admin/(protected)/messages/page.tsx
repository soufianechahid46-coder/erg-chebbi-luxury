import { MessagesTable } from '@/components/admin/messages-table';
import { CsvExportButton } from '@/components/admin/csv-export-button';
import { fetchMessages } from '@/lib/supabase/queries/messages';

export default async function AdminMessagesPage() {
  const messages = await fetchMessages();

  return (
    <div className="grid gap-6">
      <div className="flex items-center justify-between gap-4">
        <div>
          <h2 className="font-heading text-4xl text-charcoal">Messages</h2>
          <p className="mt-2 text-sm text-charcoal/60">Contact requests from potential guests and custom itinerary enquiries.</p>
        </div>
        <CsvExportButton href="/api/admin/messages/export" label="Export CSV" />
      </div>
      <MessagesTable rows={messages as never} />
    </div>
  );
}
