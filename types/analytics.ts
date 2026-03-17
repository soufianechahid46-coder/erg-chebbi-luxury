export type TrackerEvent =
  | {
      type: 'session';
      sessionId: string;
      source?: string | null;
      medium?: string | null;
      campaign?: string | null;
      referrer?: string | null;
      locale?: string | null;
      userAgent?: string | null;
    }
  | {
      type: 'pageview';
      sessionId: string;
      path: string;
      referrer?: string | null;
      locale?: string | null;
    }
  | {
      type: 'conversion';
      sessionId: string;
      path: string;
      value?: number | null;
    };

export type AnalyticsSummary = {
  sessionCount: number;
  bookingCount: number;
  messageCount: number;
  estimatedRevenue: number;
  topPages: Array<{ path: string; views: number }>;
};
