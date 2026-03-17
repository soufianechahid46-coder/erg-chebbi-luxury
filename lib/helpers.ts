export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(' ');
}

export function absoluteUrl(path: string) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://ergchebbiluxury.vercel.app';
  try {
    return new URL(path, siteUrl).toString();
  } catch {
    return path;
  }
}

export function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

export function unique<T>(values: T[]) {
  return Array.from(new Set(values));
}
