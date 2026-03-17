import { fetchPageEvents, fetchSessions } from '@/lib/data/admin';

export default async function AdminAnalyticsPage() {
  const [sessions, events] = await Promise.all([
    fetchSessions(),
    fetchPageEvents(),
  ]);

  const safeSessions = Array.isArray(sessions) ? sessions : [];
  const safeEvents = Array.isArray(events)
    ? (events as Array<{ event_name: string; path?: string | null }>)
    : [];

  const pageviews = safeEvents.filter(
    (item) => item.event_name === 'pageview'
  );

  const topPageMap = pageviews.reduce<Record<string, number>>((acc, item) => {
    const path = item.path || '/';
    acc[path] = (acc[path] || 0) + 1;
    return acc;
  }, {});

  const topPages = Object.entries(topPageMap)
    .map(([path, count]) => ({ path, count }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 10);

  return (
    <main className="space-y-8 p-6">
      <div>
        <h1 className="text-3xl font-semibold">Analytics</h1>
        <p className="text-sm text-neutral-500">
          Traffic, sessions, and page performance.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <div className="rounded-2xl border p-4">
          <div className="text-sm text-neutral-500">Sessions</div>
          <div className="mt-2 text-2xl font-semibold">{safeSessions.length}</div>
        </div>

        <div className="rounded-2xl border p-4">
          <div className="text-sm text-neutral-500">Events</div>
          <div className="mt-2 text-2xl font-semibold">{safeEvents.length}</div>
        </div>

        <div className="rounded-2xl border p-4">
          <div className="text-sm text-neutral-500">Pageviews</div>
          <div className="mt-2 text-2xl font-semibold">{pageviews.length}</div>
        </div>
      </div>

      <section className="rounded-2xl border p-5">
        <h2 className="text-xl font-semibold">Top pages</h2>

        <div className="mt-4 space-y-3">
          {topPages.length > 0 ? (
            topPages.map((page) => (
              <div
                key={page.path}
                className="flex items-center justify-between rounded-xl border px-4 py-3"
              >
                <span>{page.path}</span>
                <span className="font-medium">{page.count}</span>
              </div>
            ))
          ) : (
            <p className="text-sm text-neutral-500">No analytics data yet.</p>
          )}
        </div>
      </section>
    </main>
  );
}
