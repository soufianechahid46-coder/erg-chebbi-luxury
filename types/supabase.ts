export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[];

type Table<Row, Insert, Update> = {
  Row: Row;
  Insert: Insert;
  Update: Update;
};

export type Database = {
  public: {
    Tables: {
      booking_requests: Table<
        {
          id: string;
          full_name: string;
          email: string;
          phone: string;
          country: string;
          preferred_language: string;
          experience_slug: string;
          preferred_date: string | null;
          check_in: string | null;
          check_out: string | null;
          adults: number;
          children: number;
          addons: string[] | null;
          special_requests: string | null;
          payment_method: string;
          estimated_total: number;
          booking_status: string;
          payment_status: string;
          source: string | null;
          created_at: string;
        },
        {
          id?: string;
          full_name: string;
          email: string;
          phone: string;
          country: string;
          preferred_language: string;
          experience_slug: string;
          preferred_date?: string | null;
          check_in?: string | null;
          check_out?: string | null;
          adults: number;
          children: number;
          addons?: string[] | null;
          special_requests?: string | null;
          payment_method: string;
          estimated_total: number;
          booking_status?: string;
          payment_status?: string;
          source?: string | null;
          created_at?: string;
        },
        Partial<{
          full_name: string;
          email: string;
          phone: string;
          country: string;
          preferred_language: string;
          experience_slug: string;
          preferred_date: string | null;
          check_in: string | null;
          check_out: string | null;
          adults: number;
          children: number;
          addons: string[] | null;
          special_requests: string | null;
          payment_method: string;
          estimated_total: number;
          booking_status: string;
          payment_status: string;
          source: string | null;
        }>
      >;
      booking_status_history: Table<
        {
          id: string;
          booking_id: string;
          status: string;
          note: string | null;
          created_at: string;
        },
        {
          id?: string;
          booking_id: string;
          status: string;
          note?: string | null;
          created_at?: string;
        },
        Partial<{ booking_id: string; status: string; note: string | null }>
      >;
      contact_messages: Table<
        {
          id: string;
          full_name: string;
          email: string;
          phone: string | null;
          subject: string;
          message: string;
          preferred_date: string | null;
          created_at: string;
        },
        {
          id?: string;
          full_name: string;
          email: string;
          phone?: string | null;
          subject: string;
          message: string;
          preferred_date?: string | null;
          created_at?: string;
        },
        Partial<{ full_name: string; email: string; phone: string | null; subject: string; message: string; preferred_date: string | null }>
      >;
      visitor_sessions: Table<
        {
          id: string;
          session_id: string;
          source: string | null;
          medium: string | null;
          campaign: string | null;
          referrer: string | null;
          locale: string | null;
          user_agent: string | null;
          created_at: string;
        },
        {
          id?: string;
          session_id: string;
          source?: string | null;
          medium?: string | null;
          campaign?: string | null;
          referrer?: string | null;
          locale?: string | null;
          user_agent?: string | null;
          created_at?: string;
        },
        Partial<{ session_id: string; source: string | null; medium: string | null; campaign: string | null; referrer: string | null; locale: string | null; user_agent: string | null }>
      >;
      page_events: Table<
        {
          id: string;
          session_id: string;
          path: string;
          event_name: string;
          value: number | null;
          referrer: string | null;
          locale: string | null;
          created_at: string;
        },
        {
          id?: string;
          session_id: string;
          path: string;
          event_name: string;
          value?: number | null;
          referrer?: string | null;
          locale?: string | null;
          created_at?: string;
        },
        Partial<{ session_id: string; path: string; event_name: string; value: number | null; referrer: string | null; locale: string | null }>
      >;
      admin_recent_activity: Table<
        {
          id: string;
          type: string;
          message: string;
          created_at: string;
        },
        {
          id?: string;
          type: string;
          message: string;
          created_at?: string;
        },
        Partial<{ type: string; message: string }>
      >;
      availability_calendar: Table<
        {
          id: string;
          experience_slug: string;
          blocked_date: string;
          reason: string | null;
          created_at: string;
        },
        {
          id?: string;
          experience_slug: string;
          blocked_date: string;
          reason?: string | null;
          created_at?: string;
        },
        Partial<{ experience_slug: string; blocked_date: string; reason: string | null }>
      >;
      payment_links: Table<
        {
          id: string;
          provider: string;
          label: string;
          url: string;
          active: boolean;
          created_at: string;
        },
        {
          id?: string;
          provider: string;
          label: string;
          url: string;
          active?: boolean;
          created_at?: string;
        },
        Partial<{ provider: string; label: string; url: string; active: boolean }>
      >;
      media_assets: Table<
        {
          id: string;
          key: string;
          url: string;
          kind: string;
          created_at: string;
        },
        {
          id?: string;
          key: string;
          url: string;
          kind: string;
          created_at?: string;
        },
        Partial<{ key: string; url: string; kind: string }>
      >;
    };
  };
};
