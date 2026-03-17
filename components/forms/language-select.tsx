import { Select } from '@/components/ui/select';

type LanguageSelectProps = {
  value: string;
  onChange: (value: string) => void;
};

export function LanguageSelect({ value, onChange }: LanguageSelectProps) {
  return (
    <Select value={value} onChange={(event) => onChange(event.target.value)}>
      <option value="en">English</option>
      <option value="fr">Français</option>
      <option value="es">Español</option>
      <option value="ar">العربية</option>
    </Select>
  );
}
