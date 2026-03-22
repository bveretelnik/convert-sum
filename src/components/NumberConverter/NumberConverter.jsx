import React, { useId, useRef, useState } from 'react';
import styles from './NumberConverter.module.scss';
import CopyToClipboard from '../CopyToClipboard/CopyToClipboard.jsx';
import replaceChar from '../../heplers/replaceChar.js';
import CalculatedSum from '../CalculatedSum/CalculatedSum.jsx';
import ControlledInputBlock from './ControlledInputBlock/ControlledInputBlock.jsx';
import SubTitle from './SubTitle/SubTitle.jsx';
import { getValidValues } from '../../heplers/getValidValues.js';
import Card from '../Card/Card.jsx';
import CheckboxToggle from '../CheckboxToggle/CheckboxToggle.jsx';
import { ESV, ESV_QUARTAL } from '../../config.js';

const NumberConverter = () => {
  const inputRef = useRef(null);
  const inputCurRef = useRef(null);
  const [input, setInput] = useState('');
  const [inputCur, setInputCur] = useState('');
  const [checked, setChecked] = useState(false);
  const id = useId();

  const { number, epTax, militaryTax } = getValidValues(
    input,
    inputCur,
    checked,
  );

  const copyToClickValues = [
    { value: replaceChar(number), label: 'SUM:' },
    { value: epTax, label: 'EP:' },
    { value: militaryTax, label: 'VZ:' },
    { value: ESV, label: 'ESV:' },
    { value: ESV_QUARTAL, label: 'ESV Quartal:' },
  ];

  return (
    <div className={styles.container}>
      <Card>
        <SubTitle value={'💳 Tax calculator'} />
        <CheckboxToggle checked={checked} setChecked={setChecked} />
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
          <SubTitle value={'Result taxes'} />
          {copyToClickValues.map(({ key, value, label }, index) => (
            <CopyToClipboard
              key={`${index}-${id}`}
              value={value}
              label={label}
            />
          ))}
        </div>
      </Card>
      <Card>
        <CalculatedSum />
      </Card>
    </div>
  );
};

export default NumberConverter;
