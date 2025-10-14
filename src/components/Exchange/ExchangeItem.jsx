import React, { useState } from 'react';
import { clsx } from 'clsx';
import styles from './Exchange.module.scss';
import copyTextToClipboard from '../../heplers/copyTextToClipboard.js';

const ExchangeItem = ({ name, value }) => {
  const [copied, setCopied] = useState(false);
  return (
    <li>
      {name}:{' '}
      <strong
        className={clsx(styles.exchangeRate, {
          [styles.exchangeRateCopied]: copied,
        })}
        onClick={() => copyTextToClipboard(value, setCopied)}
      >
        {value}
      </strong>{' '}
      грн
    </li>
  );
};

export default ExchangeItem;
