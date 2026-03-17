import { AdminStatCard } from '@/components/admin/stat-card';
import { RecentActivityList } from '@/components/admin/recent-activity-list';
import { fetchBookings } from '@/lib/supabase/queries/bookings';
import { fetchMessages } from '@/lib/supabase/queries/messages';
import { fetchSessions, fetchPageEvents } from '@/lib/supabase/queries/analytics';
import { fetchRecentActivity } from '@/lib/supabase/queries/activity';
import type { AdminMetric } from '@/types/admin';

export default async function AdminOverviewPage() {
  const [bookings, messages, sessions, events, activity] = await Promise.all([
    fetchBookings(),
    fetchMessages(),
    fetchSessions(),
    fetchPageEvents(),
    fetchRecentActivity()
  ]);

  const estimatedRevenue = bookings.reduce((sum, item) => sum + Number(item.estimated_total ?? 0), 0);
  const metrics: AdminMetric[] = [
    { label: 'Total bookings', value: String(bookings.length), hint: 'All submitted booking requests' },
    { label: 'Messages', value: String(messages.length), hint: 'Contact form submissions' },
    { label: 'Visitor sessions', value: String(sessions.length), hint: 'Tracked site sessions' },
    { label: 'Estimated revenue', value: `€${estimatedRevenue}`, hint: 'Based on booking estimates' },
    { label: 'Conversions', value: String(events.filter((item) => item.event_name === 'conversion').length), hint: 'Tracked booking conversion events' }
  ];

  return (
    <div className="grid gap-6">
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
        {metrics.map((metric) => (
          <AdminStatCard key={metric.label} metric={metric} />
        ))}
      </div>
      <RecentActivityList items={activity as never} />
    </div>
  );
}
