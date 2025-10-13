import React, { useState } from 'react';

import styles from './Exchange.module.scss';

import useExchangeRates from '../../hooks/useExchangeRates.js';
import Loading from './Loading.jsx';
import Error from './Error.jsx';
import ExchangeList from './ExchangeList.jsx';
import ExchangeDate from './ExchangeDate.jsx';

const Exchange = () => {
  const [date, setDate] = useState(''); // вибрана дата
  const { data, isLoading, isError } = useExchangeRates(date);

  if (isLoading) return <Loading />;
  if (isError) return <Error />;

  const importantData = data.filter(item => ['USD', 'EUR'].includes(item.cc));

  return (
    <div className={styles.exchangeContainer}>
      <h2>💰 Курс валют НБУ</h2>
      <ExchangeDate date={date} setDate={setDate} />
      <ExchangeList items={importantData} />
      <p className={styles.exchangeUpdateTime}>
        Оновлено: {importantData[0]?.exchangedate}
      </p>
    </div>
  );
};

export default Exchange;
