import React, { useState } from 'react';
import styles from './Exchange.module.scss';
import copyTextToClipboard from '../../heplers/copyTextToClipboard.js';
import { clsx } from 'clsx';
import ExchangeItem from './ExchangeItem.jsx';

const ExchangeList = ({ items }) => {
  return (
    <ul className={styles.exchangeList}>
      {items.map(r => (
        <ExchangeItem value={r.rate} name={r.cc} />
      ))}
    </ul>
  );
};

export default ExchangeList;
