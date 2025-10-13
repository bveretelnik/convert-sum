import React, { useRef, useState } from 'react';
import styles from './NumberConverter.module.scss';
import CopyToClipboard from '../CopyToClipboard/CopyToClipboard.jsx';
import { EP, VZ } from '../../constants/taxConstants.js';
import replaceChar from '../../heplers/replaceChar.js';
import CalculatedSum from '../CalculatedSum/CalculatedSum.jsx';
import ControlledInputBlock from './ControlledInputBlock/ControlledInputBlock.jsx';
import SubTitle from './SubTitle/SubTitle.jsx';
import { getValidValues } from '../../heplers/getValidValues.js';

const NumberConverter = () => {
  const inputRef = useRef(null);
  const inputCurRef = useRef(null);
  const [input, setInput] = useState('');
  const [inputCur, setInputCur] = useState('');

  const { number, epTax, militaryTax } = getValidValues(input, inputCur);

  return (
    <div className={styles.convectorWrapper}>
      <div className={styles.convectorContainer}>
        <div className={styles.taxWrapper}>
          <div className={styles.convectorInputWrapper}>
            <ControlledInputBlock
              value={input}
              ref={inputRef}
              onChange={e => setInput(e.target.value)}
              onClick={() => {
                setInput('');
                inputRef.current.focus();
              }}
            />
            <ControlledInputBlock
              value={inputCur}
              ref={inputCurRef}
              onChange={e => setInputCur(e.target.value)}
              onClick={() => {
                setInputCur('');
                inputCurRef.current.focus();
              }}
            />
          </div>
          <div>
            <SubTitle />
            <CopyToClipboard value={replaceChar(number)} label={'SUM:'} />
            <CopyToClipboard value={epTax || 0} label={'ЄП:'} />
            <CopyToClipboard value={militaryTax || 0} label={'ВЗ:'} />
          </div>
        </div>
        <CalculatedSum />
      </div>
    </div>
  );
};

export default NumberConverter;
