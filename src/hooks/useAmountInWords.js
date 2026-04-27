import { useMemo } from 'react';
import {
  hundreds,
  teens,
  tens,
  unitsFemale,
  unitsMale,
} from '../constants/numberWords.js';

function getCurrencyWord(n) {
  if (n % 10 === 1 && n % 100 !== 11) return 'гривня';
  if ([2, 3, 4].includes(n % 10) && ![12, 13, 14].includes(n % 100))
    return 'гривні';
  return 'гривень';
}

function getThousandsWord(n) {
  if (n % 10 === 1 && n % 100 !== 11) return 'тисяча';
  if ([2, 3, 4].includes(n % 10) && ![12, 13, 14].includes(n % 100))
    return 'тисячі';
  return 'тисяч';
}

function convertBelowThousand(n, isFemale = false) {
  const u = isFemale ? unitsFemale : unitsMale;

  const h = Math.floor(n / 100);
  const t = Math.floor((n % 100) / 10);
  const o = n % 10;

  let words = '';

  if (h) words += hundreds[h] + ' ';

  if (t === 1) {
    words += teens[o] + ' ';
  } else {
    words += (tens[t] + ' ' + u[o]).trim() + ' ';
  }

  return words.trim();
}

function numberToWordsUA(n) {
  if (n === 0) return 'нуль гривень 00 копійок';

  const thousands = Math.floor(n / 1000);
  const rest = n % 1000;

  let result = '';

  if (thousands) {
    result +=
      convertBelowThousand(thousands, true) +
      ' ' +
      getThousandsWord(thousands) +
      ' ';
  }

  if (rest) {
    result += convertBelowThousand(rest);
  }

  const currency = getCurrencyWord(n);

  return `${capitalize(result.trim())} ${currency} 00 копійок`;
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function useAmountInWords(amount) {
  return useMemo(() => numberToWordsUA(amount), [amount]);
}
