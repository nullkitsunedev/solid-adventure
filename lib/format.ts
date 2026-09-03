export function formatDate(value: string, locale = "en-US") {
  return new Intl.DateTimeFormat(locale, {
    month: "short",
    day: "2-digit",
    year: "numeric",
  }).format(new Date(value));
}

export function formatTime(value: string, locale = "en-US") {
  return new Intl.DateTimeFormat(locale, {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  }).format(new Date(value));
}

export function truncateWords(value: string, count: number) {
  const words = value.trim().split(/\s+/);
  if (words.length <= count) {
    return value;
  }
  return `${words.slice(0, count).join(" ")}...`;
}
