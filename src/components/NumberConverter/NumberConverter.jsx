import React, { useState } from 'react';
import './NumberConverter.css';
import CopyToClipboard from '../CopyToClipboard/CopyToClipboard.jsx';
import ClearButton from "../Button/ClearButton.jsx";
import { EP, VZ } from "../../constants/taxConstants.js";
import replaceChar from "../../heplers/replaceChar.js";

const NumberConverter = () => {
  const [input, setInput] = useState('');
  const [convertedNumber, setConvertedNumber] = useState('');

  const convertNumberFormat = (input) => {
    return input.replace(/\s/g, '').replace(/\./g, ',');
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInput(value);
    setConvertedNumber(convertNumberFormat(value));
  };

  const number = parseFloat(convertedNumber.replace(",", "."));
  const epTax = replaceChar((number * EP));
  const militaryTax = replaceChar(number * VZ);

  return (
    <div className="convectorContainer">
      <div className="convectorWrapper">
        <h1>Конвертер числа</h1>
        <input
            className="convectorInput"
            type="text"
            value={input}
            onChange={handleInputChange}
            placeholder="Введіть число, наприклад: 3 288.50"
        />
        <ClearButton onClick={() => setInput('')}/>
        <p>Натисніть на значення, щоб скопіювати його:</p>
        <CopyToClipboard value={convertedNumber} label={'SUM:'}/>
        <CopyToClipboard value={epTax || 0} label={'ЄП:'}/>
        <CopyToClipboard value={militaryTax || 0} label={'ВЗ:'}/>
      </div>
    </div>
  );
};

export default NumberConverter;
