import React, { forwardRef } from 'react';
import styles from './ControlledInputBlock.module.scss';
import Input from '../../Input/Input.jsx';
import ClearButton from '../../Button/ClearButton.jsx';

const ControlledInputBlock = forwardRef(({ value, onChange, onClick }, ref) => (
  <div className={styles.controllerBlock}>
    <Input value={value} ref={ref} onChange={onChange} />
    <ClearButton onClick={onClick} />
  </div>
));

export default ControlledInputBlock;
