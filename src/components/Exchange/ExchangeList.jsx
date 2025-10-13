import React from 'react';
import styles from './Exchange.module.scss';
import copyTextToClipboard from '../../heplers/copyTextToClipboard.js';

const ExchangeList = ({ items }) => {
  return (
    <ul>
      {items.map(r => (
        <li key={r.cc}>
          {r.txt} ({r.cc}):{' '}
          <strong
            className={styles.exchangeRate}
            onClick={() => copyTextToClipboard(r.rate)}
          >
            {r.rate}
          </strong>{' '}
          грн
        </li>
      ))}
    </ul>
  );
};

export default ExchangeList;
