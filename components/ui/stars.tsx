import { StarIcon } from '@/components/icons';

export function Stars({ count = 5 }: { count?: number }) {
  return (
    <div className="flex items-center gap-1 text-gold">
      {Array.from({ length: count }).map((_, index) => (
        <StarIcon key={index} className="h-4 w-4 fill-current" />
      ))}
    </div>
  );
}
