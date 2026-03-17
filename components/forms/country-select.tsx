import { COUNTRIES } from '@/lib/constants';
import { Select } from '@/components/ui/select';

type CountrySelectProps = {
  value: string;
  onChange: (value: string) => void;
};

export function CountrySelect({ value, onChange }: CountrySelectProps) {
  return (
    <Select value={value} onChange={(event) => onChange(event.target.value)}>
      {COUNTRIES.map((country) => (
        <option key={country.value} value={country.value}>
          {country.label}
        </option>
      ))}
    </Select>
  );
}
