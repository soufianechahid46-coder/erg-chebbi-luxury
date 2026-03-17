import { Input } from '@/components/ui/input';

export function PhoneInput({ value, onChange }: { value: string; onChange: (value: string) => void }) {
  return <Input type="tel" value={value} onChange={(event) => onChange(event.target.value)} placeholder="+212 ..." />;
}
