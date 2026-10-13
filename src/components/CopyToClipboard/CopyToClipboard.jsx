import React, { useState } from 'react';
import copyTextToClipboard from '../../heplers/copyTextToClipboard.js';
import styles from './CopyToClipboard.module.scss';
import { clsx } from 'clsx';

const CopyToClipboard = ({ value, label = 'Value:' }) => {
  const [copied, setCopied] = useState(false);

  return (
    <div className={styles.clipboardContainer}>
      <span className={styles.clipboardLabel}>{label}</span>
      <button
          type="button"
          className={clsx(styles.clipboardValue, {
            [styles.clipboardSuccess]: copied,
          })}
          onClick={() => copyTextToClipboard(value, setCopied)}
          title="Натисніть, щоб скопіювати"
        >
          {copied ? 'Скопійовано' : value}
      </button>
    </div>
  );
};

export default CopyToClipboard;
