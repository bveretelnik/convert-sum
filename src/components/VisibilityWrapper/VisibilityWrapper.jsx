import React, { useState } from 'react';
import Button from '../Button/Button.jsx';
import styles from './VisibilityWrapper.module.scss';

const VisibilityWrapper = ({ children, title }) => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <>
      <Button
        onClick={() => setIsVisible(!isVisible)}
        name={`${isVisible ? 'Hide' : 'Show'} ${title}`}
      />
      {isVisible && <div className={styles.container}>{children}</div>}
    </>
  );
};

export default VisibilityWrapper;
