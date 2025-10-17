import React from 'react';
import styles from './Card.module.scss';
import { clsx } from 'clsx';

const Card = ({ children, classNames }) => (
  <div className={clsx(styles.card, classNames)}>{children}</div>
);

export default Card;
