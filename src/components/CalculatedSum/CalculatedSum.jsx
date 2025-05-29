import React, { useState } from 'react';
import Input from '../Input/Input.jsx';
import CopyToClipboard from '../CopyToClipboard/CopyToClipboard.jsx';
import replaceChar from '../../heplers/replaceChar.js';
import { parseNumber } from '../../heplers/parseNumber.js';
import styles from './CalculatedSum.module.scss';

const CalculatedSum = () => {
  const [values, setValue] = useState(['', '']);

  const handleChange = (index, newValue) => {
    setValue(prev => {
      const updated = [...prev];
      updated[index] = newValue;
      return updated;
    });
  };

  return (
    <div className={styles.calculateWrapper}>
      <Input
        value={values[0]}
        onChange={e => handleChange(0, e.target.value)}
      />
      <Input
        value={values[1]}
        onChange={e => handleChange(1, e.target.value)}
      />
      <CopyToClipboard
        value={replaceChar(
          values.reduce((acc, cur) => acc + parseNumber(cur), 0),
        )}
        label={'SUM:'}
      />
    </div>
  );
};

export default CalculatedSum;
