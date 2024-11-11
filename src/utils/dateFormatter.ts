export function dateFormatter(date: string): string {
  return new Date(date).toLocaleDateString("en-US", {
    minute: "numeric",
    hour: "numeric",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
