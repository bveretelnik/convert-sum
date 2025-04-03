const copyTextToClipboard = (text, setCopied) => {
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

export default copyTextToClipboard