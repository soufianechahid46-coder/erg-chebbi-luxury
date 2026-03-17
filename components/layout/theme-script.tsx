import { themeStorageKey } from '@/lib/theme';

export function ThemeScript() {
  const script = `
    (function() {
      try {
        var saved = localStorage.getItem('${themeStorageKey}');
        var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        var theme = saved || (prefersDark ? 'dark' : 'light');
        document.documentElement.classList.toggle('dark', theme === 'dark');
        document.documentElement.dataset.theme = theme;
      } catch (e) {}
    })();
  `;

  return <script dangerouslySetInnerHTML={{ __html: script }} />;
}
