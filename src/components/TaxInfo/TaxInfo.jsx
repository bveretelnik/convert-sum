import React from 'react';
import styles from './TaxInfo.module.scss';
import Card from '../Card/Card.jsx';
import SubTitle from '../NumberConverter/SubTitle/SubTitle.jsx';
import { taxValues } from '../../config.js';
import CopyToClipboard from '../CopyToClipboard/CopyToClipboard.jsx';

const TaxInfo = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Card>
      <SubTitle value={`👾 Tax information for the ${currentYear} year`} />
      <ul className={styles.taxInfoList}>
        {Object.entries(taxValues).map(([key, value]) => (
          <li key={key}>
            <CopyToClipboard value={value} label={`${key.toUpperCase()}:`} />
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default TaxInfo;
