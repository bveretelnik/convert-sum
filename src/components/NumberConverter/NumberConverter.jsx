import React, { useState } from 'react';
import './NumberConverter.css';
import CopyToClipboard from '../CopyToClipboard/CopyToClipboard.jsx';

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
        <CopyToClipboard value={convertedNumber} />
      </div>
    </div>
  );
};

export default NumberConverter;
