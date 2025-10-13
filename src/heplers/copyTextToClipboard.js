const copyTextToClipboard = (text, setCopied = null) => {
  navigator.clipboard
    .writeText(text)
    .then(() => {
      if (setCopied) {
        setCopied(true); // Встановлюємо стан, щоб показати, що текст скопійовано
        setTimeout(() => setCopied(false), 2000); // Скидаємо стан через 2 секунди
      }
    })
    .catch(err => {
      console.error('Помилка при копіюванні в буфер обміну: ', err);
    });
};

export default copyTextToClipboard;
