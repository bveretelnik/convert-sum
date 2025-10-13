import { useQuery } from '@tanstack/react-query';

export default function useExchangeRates(date) {
  const formattedDate = date ? date.replaceAll('-', '') : '';
  const API_URL = formattedDate
    ? `https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?date=${formattedDate}&json`
    : `https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json`;

  return useQuery({
    queryKey: ['exchangeRates', date],
    queryFn: async () => {
      const response = await fetch(API_URL);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return await response.json();
    },
    staleTime: 1000 * 60 * 60 * 24,
  });
}
