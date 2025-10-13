import { useQuery } from '@tanstack/react-query';

const API_URL =
  'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json';

export default function useExchangeRates() {
  return useQuery({
    queryKey: ['exchangeRates'],
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
