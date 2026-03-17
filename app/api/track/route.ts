import { NextResponse } from 'next/server';
import { insertPageEvent, insertSession } from '@/lib/supabase/queries/analytics';

export async function POST(request: Request) {
  try {
    const payload = await request.json();

    if (payload.type === 'session') {
      await insertSession({
        session_id: String(payload.sessionId),
        source: payload.source ? String(payload.source) : null,
        medium: payload.medium ? String(payload.medium) : null,
        campaign: payload.campaign ? String(payload.campaign) : null,
        referrer: payload.referrer ? String(payload.referrer) : null,
        locale: payload.locale ? String(payload.locale) : null,
        user_agent: payload.userAgent ? String(payload.userAgent) : null
      });
      return NextResponse.json({ success: true });
    }

    if (payload.type === 'pageview') {
      await insertPageEvent({
        session_id: String(payload.sessionId),
        path: String(payload.path || '/'),
        event_name: 'pageview',
        referrer: payload.referrer ? String(payload.referrer) : null,
        locale: payload.locale ? String(payload.locale) : null
      });
      return NextResponse.json({ success: true });
    }

    if (payload.type === 'conversion') {
      await insertPageEvent({
        session_id: String(payload.sessionId),
        path: String(payload.path || '/booking'),
        event_name: 'conversion',
        value: typeof payload.value === 'number' ? payload.value : null
      });
      return NextResponse.json({ success: true });
    }

    return NextResponse.json({ error: 'Unknown event type' }, { status: 400 });
  } catch (error) {
    return NextResponse.json({ error: error instanceof Error ? error.message : 'Tracking failed' }, { status: 500 });
  }
}
