import React, { useState } from 'react';
import copyTextToClipboard from '../../heplers/copyTextToClipboard.js';
import styles from './CopyToClipboard.module.scss';

const CopyToClipboard = ({ value, label }) => {
  const [copied, setCopied] = useState(false);

  return (
    <div>
      <div className={styles.clipboardContainer}>
        <div className={styles.clipboardLabel}>{label}</div>
        <div
          className={styles.clipboardValue}
          onClick={() => copyTextToClipboard(value, setCopied)}
        >
          {value}
        </div>
        {copied && <div className={styles.clipboardSuccess}>✅</div>}
      </div>
    </div>
  );
};

export default CopyToClipboard;
