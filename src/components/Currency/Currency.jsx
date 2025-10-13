import React, { useState } from 'react';

import styles from './Currency.module.scss';

import useExchangeRates from '../../hooks/useExchangeRates.js';
import Loading from './Loading.jsx';
import Error from './Error.jsx';
import copyTextToClipboard from '../../heplers/copyTextToClipboard.js';

const Currency = () => {
  const [date, setDate] = useState(''); // вибрана дата
  const { data, isLoading, isError } = useExchangeRates(date);

  if (isLoading) return <Loading />;
  if (isError) return <Error />;

  const importantData = data.filter(item => ['USD', 'EUR'].includes(item.cc));

  return (
    <div className={styles.currencyContainer}>
      <h2>💰 Курс валют НБУ</h2>
      <label style={{ display: 'block', marginBottom: '0.5rem' }}>
        Обери дату:
        <input
          type="date"
          value={date}
          onChange={e => setDate(e.target.value)}
          style={{
            marginLeft: '0.5rem',
            padding: '0.3rem 0.5rem',
            borderRadius: '6px',
            border: '1px solid #ccc',
          }}
        />
      </label>
      <ul>
        {importantData.map(r => (
          <li key={r.cc}>
            {r.txt} ({r.cc}):{' '}
            <strong
              className={styles.currencyRate}
              onClick={() => copyTextToClipboard(r.rate)}
            >
              {r.rate}
            </strong>{' '}
            грн
          </li>
        ))}
      </ul>
      <p className={styles.currencyUpdateTime}>
        Оновлено: {importantData[0]?.exchangedate}
      </p>
    </div>
  );
};

export default Currency;
