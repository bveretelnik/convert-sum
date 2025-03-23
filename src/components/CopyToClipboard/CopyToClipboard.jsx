import React, { useState } from 'react';

const CopyToClipboard = ({ value }) => {
  const [copied, setCopied] = useState(false);

  // Функція для копіювання значення
  const copyTextToClipboard = (text) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setCopied(true); // Встановлюємо стан, щоб показати, що текст скопійовано
        setTimeout(() => setCopied(false), 2000); // Скидаємо стан через 2 секунди
      })
      .catch((err) => {
        console.error('Помилка при копіюванні в буфер обміну: ', err);
      });
  };

  return (
    <div>
      <p>Натисніть на значення, щоб скопіювати його:</p>
      <div>
        <span
          style={{ cursor: 'pointer', color: 'green', fontSize: 20 }}
          onClick={() => copyTextToClipboard(value)}
        >
          {value}
        </span>
      </div>
      {copied && <p>Текст скопійовано!</p>}
    </div>
  );
};

export default CopyToClipboard;
