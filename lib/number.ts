export const formatMNumber = (value: number) =>
  new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'USD' }).format(
    value,
  );
export const formatNumber = (value: number) =>
  new Intl.NumberFormat('de-DE').format(value);

export function formatSNumber(num: number, precision = 1) {
  const map = [
    { suffix: 'T', threshold: 1e12 },
    { suffix: 'B', threshold: 1e9 },
    { suffix: 'M', threshold: 1e6 },
    { suffix: 'K', threshold: 1e3 },
    { suffix: '', threshold: 1 },
  ];
  const found = map.find((x) => Math.abs(num) >= x.threshold);
  if (found) {
    const formatted = (num / found.threshold).toFixed(precision) + found.suffix;
    return formatted;
  }
  return num;
}

export const getSize = (value: number) =>
  value > 99 ? '+99' : String(value).padStart(2, '0');
