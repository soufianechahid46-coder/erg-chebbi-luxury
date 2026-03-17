import type { InputHTMLAttributes } from 'react';

export function Checkbox(props: InputHTMLAttributes<HTMLInputElement>) {
  return <input type="checkbox" {...props} className="h-4 w-4 rounded border-border text-gold focus:ring-gold" />;
}
