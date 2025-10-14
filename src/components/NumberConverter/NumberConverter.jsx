import React, { useRef, useState } from 'react';
import styles from './NumberConverter.module.scss';
import CopyToClipboard from '../CopyToClipboard/CopyToClipboard.jsx';
import replaceChar from '../../heplers/replaceChar.js';
import CalculatedSum from '../CalculatedSum/CalculatedSum.jsx';
import ControlledInputBlock from './ControlledInputBlock/ControlledInputBlock.jsx';
import SubTitle from './SubTitle/SubTitle.jsx';
import { getValidValues } from '../../heplers/getValidValues.js';
import Card from '../Card/Card.jsx';

const NumberConverter = () => {
  const inputRef = useRef(null);
  const inputCurRef = useRef(null);
  const [input, setInput] = useState('');
  const [inputCur, setInputCur] = useState('');

  const { number, epTax, militaryTax } = getValidValues(input, inputCur);

  return (
    <div className={styles.container}>
      <Card>
        <SubTitle value={'Tax calculator'} />
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
        <div className={styles.convectorResultWrapper}>
          <SubTitle value={'Result'} />
          <CopyToClipboard value={replaceChar(number)} label={'SUM:'} />
          <CopyToClipboard value={epTax || 0} label={'EP:'} />
          <CopyToClipboard value={militaryTax || 0} label={'VZ:'} />
          <CopyToClipboard value={'1760.00'} label={'ESW (fix sum):'} />
        </div>
      </Card>
      <Card>
        <CalculatedSum />
      </Card>
    </div>
  );
};

export default NumberConverter;
