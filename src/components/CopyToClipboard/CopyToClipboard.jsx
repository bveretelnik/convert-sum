import React, { useState } from 'react';
import copyTextToClipboard from "../../heplers/copyTextToClipboard.js";
import './CopyToClipboard.css'

const CopyToClipboard = ({ value, label }) => {
  const [copied, setCopied] = useState(false);

  return (
    <div>
      <div className={'clipboardContainer'}>
          <div className={'clipboardLabel'}>
              {label}
          </div>
        <div
            className={'clipboardValue'}
            onClick={() => copyTextToClipboard(value, setCopied)}
        >
          {value}
        </div>
          {copied && <div className={'clipboardSuccess'}>✅</div>}
      </div>
    </div>
  );
};

export default CopyToClipboard;
