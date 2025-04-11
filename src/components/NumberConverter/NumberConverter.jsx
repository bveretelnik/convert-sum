import React, { useRef, useState } from 'react';
import './NumberConverter.css';
import CopyToClipboard from '../CopyToClipboard/CopyToClipboard.jsx';
import ClearButton from '../Button/ClearButton.jsx';
import { EP, VZ } from '../../constants/taxConstants.js';
import replaceChar from '../../heplers/replaceChar.js';

const NumberConverter = () => {
  const inputRef = useRef(null);
  const inputCurRef = useRef(null);
  const [input, setInput] = useState('');
  const [inputCur, setInputCur] = useState('');

  const convertNumberFormat = input => {
    return input.replace(/\s/g, '').replace(/\./g, ',');
  };

  const handleInputChange = e => {
    const value = e.target.value;
    setInput(value);
  };

  const number =
    parseFloat(input.replace(',', '.')) *
    (parseFloat(inputCur.replace(',', '.')) || 1);
  console.log(number);
  const epTax = replaceChar(number * EP);
  const militaryTax = replaceChar(number * VZ);

  return (
    <div className="convectorContainer">
      <h1>Конвертер числа</h1>
      <div className="convectorWrapper">
        <div className="convectorInputWrapper">
          <div>
            <input
              className="convectorInput"
              type="text"
              value={input}
              ref={inputRef}
              onChange={handleInputChange}
              placeholder="Введіть число, наприклад: 3 288.50"
            />
            <ClearButton
              onClick={() => {
                setInput('');
                inputRef.current.focus();
              }}
            />
          </div>
          <div>
            <input
              className="convectorInput"
              type="text"
              value={inputCur}
              ref={inputCurRef}
              onChange={e => {
                setInputCur(e.target.value);
              }}
              placeholder="Введіть суму у валюті"
            />
            <ClearButton
              onClick={() => {
                setInputCur('');
                inputCurRef.current.focus();
              }}
            />
          </div>
        </div>
        <div>
          <p className="title">Натисніть на значення, щоб скопіювати його:</p>
          <CopyToClipboard value={replaceChar(number)} label={'SUM:'} />
          <CopyToClipboard value={epTax || 0} label={'ЄП:'} />
          <CopyToClipboard value={militaryTax || 0} label={'ВЗ:'} />
        </div>
      </div>
    </div>
  );
};

export default NumberConverter;
