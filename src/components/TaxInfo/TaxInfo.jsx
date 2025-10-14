import React from 'react';
import styles from './TaxInfo.module.scss';
import Card from '../Card/Card.jsx';
import SubTitle from '../NumberConverter/SubTitle/SubTitle.jsx';
import { taxValues } from '../../config.js';

const TaxInfo = () => {
  const currentYear = new Date().getFullYear();
  const taxes = taxValues[currentYear];

  return (
    <Card>
      <SubTitle value={`👾 Tax information for the ${currentYear} year`} />
      <ul className={styles.taxInfoList}>
        {Object.entries(taxes).map(([key, value]) => (
          <li key={key}>
            {key.toUpperCase()} :{' '}
            <strong className={styles.taxInfoValue}>{value}</strong> UAH
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default TaxInfo;
