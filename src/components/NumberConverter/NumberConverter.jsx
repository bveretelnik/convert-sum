import React, { useRef, useState } from 'react';
import styles from './NumberConverter.module.scss';
import CopyToClipboard from '../CopyToClipboard/CopyToClipboard.jsx';
import ClearButton from '../Button/ClearButton.jsx';
import { EP, VZ } from '../../constants/taxConstants.js';
import replaceChar from '../../heplers/replaceChar.js';
import Input from '../Input/Input.jsx';
import CalculatedSum from '../CalculatedSum/CalculatedSum.jsx';

const NumberConverter = () => {
  const inputRef = useRef(null);
  const inputCurRef = useRef(null);
  const [input, setInput] = useState('');
  const [inputCur, setInputCur] = useState('');

  const number =
    parseFloat(input.replace(',', '.').replace(' ', '')) *
    (parseFloat(inputCur.replace(',', '.')) || 1);

  const epTax = replaceChar(number * EP);
  const militaryTax = replaceChar(number * VZ);

  return (
    <div className={styles.convectorContainer}>
      <h1>Конвертер числа</h1>
      <div className={styles.convectorWrapper}>
        <div className={styles.convectorInputWrapper}>
          <div>
            <Input
              value={input}
              ref={inputRef}
              onChange={e => setInput(e.target.value)}
              placeholder={'Введіть число, наприклад: 3 288.50'}
            />
            <ClearButton
              onClick={() => {
                setInput('');
                inputRef.current.focus();
              }}
            />
          </div>
          <div>
            <Input
              value={inputCur}
              ref={inputCurRef}
              onChange={e => {
                setInputCur(e.target.value);
              }}
              placeholder={'Введіть суму у валюті'}
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
          <p className={styles.title}>
            Натисніть на значення, щоб скопіювати його:
          </p>
          <CopyToClipboard value={replaceChar(number)} label={'SUM:'} />
          <CopyToClipboard value={epTax || 0} label={'ЄП:'} />
          <CopyToClipboard value={militaryTax || 0} label={'ВЗ:'} />
        </div>
      </div>
      <CalculatedSum />
    </div>
  );
};

export default NumberConverter;
