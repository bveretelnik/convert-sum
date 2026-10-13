import React, { useState } from 'react';
import Button from '../Button/Button.jsx';
import styles from './VisibilityWrapper.module.scss';

const VisibilityWrapper = ({ children, title }) => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <section className={styles.section}>
      <Button
        onClick={() => setIsVisible(!isVisible)}
        variant="secondary"
        aria-expanded={isVisible}
        name={`${isVisible ? 'Сховати' : 'Показати'}: ${title}`}
      />
      {isVisible && <div className={styles.container}>{children}</div>}
    </section>
  );
};

export default VisibilityWrapper;
