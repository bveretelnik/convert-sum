import React, { forwardRef } from 'react';
import styles from './ControlledInputBlock.module.scss';
import Input from '../../Input/Input.jsx';
import Button from '../../Button/Button.jsx';

const ControlledInputBlock = forwardRef(
  ({ value, onChange, onClick, header, hasButton = true }, ref) => (
    <div className={styles.controllerBlock}>
      {!!header && <span className={styles.header}>{header}</span>}
      <Input value={value} ref={ref} onChange={onChange} />
      {hasButton && <Button onClick={onClick} name={'Clear'} />}
    </div>
  ),
);

export default ControlledInputBlock;
