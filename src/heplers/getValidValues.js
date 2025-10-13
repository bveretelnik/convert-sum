import replaceChar from './replaceChar.js';
import { EP, VZ } from '../constants/taxConstants.js';

export const getValidValues = (value, valueVur) => {
  const number =
    parseFloat(value.replace(',', '.').replaceAll(' ', '')) *
      (parseFloat(valueVur.replace(',', '.').replaceAll(' ', '')) || 1) || 0;

  const epTax = replaceChar(number * EP);
  const militaryTax = replaceChar(number * VZ);

  return { number, epTax, militaryTax };
};
