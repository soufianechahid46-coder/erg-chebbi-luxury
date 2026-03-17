export function parseUtm(search: URLSearchParams) {
  return {
    source: search.get('utm_source'),
    medium: search.get('utm_medium'),
    campaign: search.get('utm_campaign')
  };
}

export function createSessionId() {
  if (typeof crypto !== 'undefined' && 'randomUUID' in crypto) {
    return crypto.randomUUID();
  }
  return `session-${Date.now()}-${Math.random().toString(36).slice(2)}`;
}
