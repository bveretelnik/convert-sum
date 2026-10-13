import React, { useEffect, useState } from 'react';
import styles from './ThemeToggle.module.scss';

const THEME_STORAGE_KEY = 'convert-sum-theme';

const getInitialTheme = () =>
  window.localStorage.getItem(THEME_STORAGE_KEY) === 'light' ? 'light' : 'dark';

const ThemeToggle = () => {
  const [theme, setTheme] = useState(getInitialTheme);
  const isLight = theme === 'light';

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem(THEME_STORAGE_KEY, theme);
  }, [theme]);

  return (
    <button
      type="button"
      className={styles.toggle}
      onClick={() => setTheme(isLight ? 'dark' : 'light')}
      aria-pressed={isLight}
      aria-label={`Увімкнути ${isLight ? 'темну' : 'світлу'} тему`}
    >
      <span className={styles.icon} aria-hidden="true">
        {isLight ? '☀' : '☾'}
      </span>
      <span>{isLight ? 'Світла' : 'Темна'}</span>
    </button>
  );
};

export default ThemeToggle;
