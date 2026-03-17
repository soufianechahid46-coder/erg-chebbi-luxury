export function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return <div className="mt-2 text-sm text-red-600 dark:text-red-400">{message}</div>;
}
