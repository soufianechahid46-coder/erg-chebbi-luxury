import { fetchPageEvents, fetchSessions } from '@/lib/data/admin';

type PageEvent = {
  id: string;
  event_name: string;
  path: string | null;
  created_at: string;
  referrer?: string | null;
};

type VisitorSession = {
  id: string;
  session_id: string;
  created_at: string;
};

export default async function AdminAnalyticsPage() {
  const [sessionsRaw, eventsRaw] = await Promise.all([
    fetchSessions(),
    fetchPageEvents(),
  ]);

  const sessions: VisitorSession[] = Array.isArray(sessionsRaw) ? sessionsRaw : [];
  const events: PageEvent[] = Array.isArray(eventsRaw) ? eventsRaw : [];

  const pageviews = events.filter((item) => item.event_name === 'pageview');

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
    <main className="space-y-8">
      <div>
        <h1 className="text-3xl font-semibold">Analytics</h1>
        <p className="text-sm text-neutral-500">
          Traffic, page views, and visitor behavior.
        </p>
      </div>

      <section className="grid gap-4 md:grid-cols-3">
        <div className="rounded-2xl border p-5">
          <div className="text-sm text-neutral-500">Sessions</div>
          <div className="mt-2 text-3xl font-semibold">{sessions.length}</div>
        </div>

        <div className="rounded-2xl border p-5">
          <div className="text-sm text-neutral-500">Events</div>
          <div className="mt-2 text-3xl font-semibold">{events.length}</div>
        </div>

        <div className="rounded-2xl border p-5">
          <div className="text-sm text-neutral-500">Pageviews</div>
          <div className="mt-2 text-3xl font-semibold">{pageviews.length}</div>
        </div>
      </section>

      <section className="rounded-2xl border p-5">
        <h2 className="text-xl font-semibold">Top pages</h2>

        <div className="mt-4 space-y-3">
          {topPages.length ? (
            topPages.map((page) => (
              <div
                key={page.path}
                className="flex items-center justify-between rounded-xl border px-4 py-3"
              >
                <span className="truncate">{page.path}</span>
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
