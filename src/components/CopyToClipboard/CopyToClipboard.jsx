import React, { useState } from 'react';
import copyTextToClipboard from '../../heplers/copyTextToClipboard.js';
import styles from './CopyToClipboard.module.scss';
import { clsx } from 'clsx';

const CopyToClipboard = ({ value, label }) => {
  const [copied, setCopied] = useState(false);

  return (
    <div>
      <div className={styles.clipboardContainer}>
        <div className={styles.clipboardLabel}>{label}</div>
        <div
          className={clsx(styles.clipboardValue, {
            [styles.clipboardSuccess]: copied,
          })}
          onClick={() => copyTextToClipboard(value, setCopied)}
        >
          {value}
        </div>
      </div>
    </div>
  );
};

export default CopyToClipboard;
