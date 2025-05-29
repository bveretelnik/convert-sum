export const parseNumber = val => {
  if (!val) return 0;
  const normalized = val.replace(',', '.');
  const num = Number(normalized);
  return isNaN(num) ? 0 : num;
};
