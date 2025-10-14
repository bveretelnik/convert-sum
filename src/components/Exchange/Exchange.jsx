import React, { useState } from 'react';

import styles from './Exchange.module.scss';

import useExchangeRates from '../../hooks/useExchangeRates.js';
import Loading from './Loading.jsx';
import Error from './Error.jsx';
import ExchangeList from './ExchangeList.jsx';
import ExchangeDate from './ExchangeDate.jsx';
import Card from '../Card/Card.jsx';
import SubTitle from '../NumberConverter/SubTitle/SubTitle.jsx';

const Exchange = () => {
  const [date, setDate] = useState(''); // вибрана дата
  const { data, isLoading, isError } = useExchangeRates(date);

  if (isLoading) return <Loading />;
  if (isError) return <Error />;

  const importantData = data.filter(item => ['USD', 'EUR'].includes(item.cc));

  return (
    <Card>
      <div className={styles.exchangeContainer}>
        <SubTitle value={'💰 Курс валют НБУ'} />
        <ExchangeDate date={date} setDate={setDate} />
        <ExchangeList items={importantData} />
        <p className={styles.exchangeUpdateTime}>
          Оновлено: {importantData[0]?.exchangedate}
        </p>
      </div>
    </Card>
  );
};

export default Exchange;
