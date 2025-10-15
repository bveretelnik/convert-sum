import React, { forwardRef } from 'react';
import styles from './ControlledInputBlock.module.scss';
import Input from '../../Input/Input.jsx';
import Button from '../../Button/Button.jsx';

const ControlledInputBlock = forwardRef(({ value, onChange, onClick }, ref) => (
  <div className={styles.controllerBlock}>
    <Input value={value} ref={ref} onChange={onChange} />
    <Button onClick={onClick} name={'Clear'} />
  </div>
));

export default ControlledInputBlock;
