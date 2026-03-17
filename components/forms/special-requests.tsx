import { Textarea } from '@/components/ui/textarea';

export function SpecialRequests({ value, onChange }: { value: string; onChange: (value: string) => void }) {
  return <Textarea value={value} onChange={(event) => onChange(event.target.value)} placeholder="Room preferences, dietary notes, special moments, transfer needs..." />;
}
