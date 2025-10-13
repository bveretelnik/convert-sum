import React from 'react';
import useExchangeRates from '../../hooks/useExchangeRates.js';

const Currency = () => {
  const { data, isLoading, isError } = useExchangeRates();

  if (isLoading) return <p>Завантаження курсу валют...</p>;
  if (isError) return <p>Помилка при завантаженні даних 😕</p>;

  const importantData = data.filter(item => ['USD', 'EUR'].includes(item.cc));

  return (
    <div style={{ padding: '1rem', fontFamily: 'sans-serif' }}>
      <h2>💰 Курс валют НБУ</h2>
      <ul>
        {importantData.map(r => (
          <li key={r.cc}>
            {r.txt} ({r.cc}): <strong>{r.rate.toFixed(2)}</strong> грн
          </li>
        ))}
      </ul>
      <p style={{ color: '#666', fontSize: '0.9rem' }}>
        Оновлено: {importantData[0]?.exchangedate}
      </p>
    </div>
  );
};

export default Currency;
