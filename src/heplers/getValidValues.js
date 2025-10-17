import replaceChar from './replaceChar.js';
import { EP, VZ } from '../constants/taxConstants.js';

const parseNumber = value =>
  parseFloat(value.replace(',', '.').replaceAll(' ', ''));

export const getValidValues = (value, valueVur) => {
  const number = parseNumber(value) * (parseNumber(valueVur) || 1) || 0;

  const exchangeRate = parseNumber(value) / (parseNumber(valueVur) || 1) || 0;

  const epTax = replaceChar(number * EP);
  const militaryTax = replaceChar(number * VZ);

  return { number, epTax, militaryTax, exchangeRate };
};
