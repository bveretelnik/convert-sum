import { useQuery } from '@tanstack/react-query';
import { DEFAULT_STALE_TIME, NBU_API_BASE } from '../config.js';

export default function useExchangeRates(date) {
  const formattedDate = date ? date.replaceAll('-', '') : '';
  const API_URL = formattedDate
    ? `${NBU_API_BASE}?date=${formattedDate}&json`
    : `${NBU_API_BASE}?json`;

  return useQuery({
    queryKey: ['exchangeRates', date],
    queryFn: async () => {
      const response = await fetch(API_URL);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return await response.json();
    },
    staleTime: DEFAULT_STALE_TIME,
  });
}
