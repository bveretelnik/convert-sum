import React, { useState } from 'react';
import Button from '../Button/Button.jsx';

const VisibilityWrapper = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <>
      <Button
        onClick={() => setIsVisible(!isVisible)}
        name={`${isVisible ? 'Hide' : 'Show'} top widgets`}
      />
      {isVisible && children}
    </>
  );
};

export default VisibilityWrapper;
