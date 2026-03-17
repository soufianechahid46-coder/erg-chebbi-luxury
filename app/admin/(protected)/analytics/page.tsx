import { AnalyticsTable } from '@/components/admin/analytics-table';
import { ChartCard } from '@/components/admin/chart-card';
import { SparklinePlaceholder } from '@/components/admin/sparkline-placeholder';
import { MiniStat } from '@/components/admin/mini-stat';
import { fetchSessions, fetchPageEvents } from '@/lib/supabase/queries/analytics';

export default async function AdminAnalyticsPage() {
  const [sessions, events] = await Promise.all([fetchSessions(), fetchPageEvents()]);
  const pageviews = events.filter((item) => item.event_name === 'pageview');

  const topPageMap = pageviews.reduce<Record<string, number>>((acc, item) => {
    const path = item.path || '/';
    acc[path] = (acc[path] || 0) + 1;
    return acc;
  }, {});

  const topPages = Object.entries(topPageMap)
    .map(([path, views]) => ({ path, views }))
    .sort((a, b) => b.views - a.views)
    .slice(0, 10);

  return (
    <div className="grid gap-6">
      <div className="grid gap-5 md:grid-cols-4">
        <MiniStat label="Sessions" value={String(sessions.length)} />
        <MiniStat label="Page views" value={String(pageviews.length)} />
        <MiniStat label="Referrers" value={String(sessions.filter((item) => item.referrer).length)} />
        <MiniStat label="Tracked pages" value={String(topPages.length)} />
      </div>
      <ChartCard title="Traffic trend">
        <SparklinePlaceholder />
      </ChartCard>
      <ChartCard title="Top pages">
        <AnalyticsTable rows={topPages} />
      </ChartCard>
    </div>
  );
}
