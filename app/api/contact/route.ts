import { NextResponse } from 'next/server';
import { contactSchema } from '@/lib/validation';
import { normalizeContactPayload } from '@/lib/contact';
import { insertMessage } from '@/lib/supabase/queries/messages';
import { sendContactEmail } from '@/lib/email/send';
import { logActivity } from '@/lib/activity';

export async function POST(request: Request) {
  try {
    const json = await request.json();
    const parsed = contactSchema.safeParse(json);

    if (!parsed.success) {
      return NextResponse.json({ error: 'Invalid contact payload', issues: parsed.error.flatten() }, { status: 400 });
    }

    const payload = normalizeContactPayload(parsed.data);

    const result = await insertMessage({
      full_name: payload.fullName,
      email: payload.email,
      phone: payload.phone || null,
      subject: payload.subject,
      message: payload.message,
      preferred_date: payload.preferredDate || null
    });

    if (result.error) {
      return NextResponse.json({ error: result.error.message }, { status: 500 });
    }

    try {
      await sendContactEmail(payload);
    } catch {}

    await logActivity('message', `New contact message from ${payload.fullName}`);

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: error instanceof Error ? error.message : 'Contact failed' }, { status: 500 });
  }
}
