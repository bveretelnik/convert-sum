import replaceChar from './replaceChar.js';
import { EP, VZ } from '../constants/taxConstants.js';

const FEE = 2.2;

const parseNumber = value =>
  parseFloat(value.replace(',', '.').replaceAll(' ', ''));

export const getValidValues = (value, valueVur, checked) => {
  const number = parseNumber(value) * (parseNumber(valueVur) || 1) || 0;

  const exchangeRate = parseNumber(value) / (parseNumber(valueVur) || 1) || 0;
  const feeNumber = checked ? FEE : 0;

  const epTax = replaceChar(number * EP + feeNumber);
  const militaryTax = replaceChar(number * VZ + feeNumber);

  return { number, epTax, militaryTax, exchangeRate };
};
