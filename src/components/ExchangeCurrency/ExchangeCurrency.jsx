import React, { useState } from 'react';
import Card from '../Card/Card.jsx';
import ControlledInputBlock from '../NumberConverter/ControlledInputBlock/ControlledInputBlock.jsx';
import styles from './ExchangeCurrency.module.scss';
import SubTitle from '../NumberConverter/SubTitle/SubTitle.jsx';
import CopyToClipboard from '../CopyToClipboard/CopyToClipboard.jsx';
import replaceChar from '../../heplers/replaceChar.js';
import { getValidValues } from '../../heplers/getValidValues.js';
import Button from '../Button/Button.jsx';

const ExchangeCurrency = () => {
  const [value, setValue] = useState('');
  const [currency, setCurrency] = useState('');
  const { exchangeRate } = getValidValues(value, currency);
  return (
    <Card classNames={styles.exchangeCurrencyCard}>
      <div className={styles.exchangeCurrencyInputs}>
        <ControlledInputBlock
          value={value}
          header={'UAH:'}
          hasButton={false}
          onChange={e => setValue(e.target.value)}
          // onClick={() => {
          //   setInput('');
          //   inputRef.current.focus();
          // }}
        />
        <ControlledInputBlock
          value={currency}
          // ref={inputRef}
          header={'EUR/USD:'}
          hasButton={false}
          onChange={e => setCurrency(e.target.value)}
          // onClick={() => {
          //   setInput('');
          //   inputRef.current.focus();
          // }}
        />
        <Button
          onClick={() => {
            setValue('');
            setCurrency('');
          }}
          name={'Clear'}
        />
      </div>
      <div className={styles.exchangeCurrencyResultWrapper}>
        <SubTitle value={'Result Exchange'} />
        <CopyToClipboard value={replaceChar(exchangeRate)} label={'Value:'} />
      </div>
    </Card>
  );
};

export default ExchangeCurrency;
