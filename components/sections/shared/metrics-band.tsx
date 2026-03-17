import { Stat } from '@/components/ui/stat';

export function MetricsBand() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      <Stat label="Guest satisfaction" value="5/5" />
      <Stat label="Tailored support" value="7/7" />
      <Stat label="Signature experiences" value="12+" />
    </div>
  );
}
