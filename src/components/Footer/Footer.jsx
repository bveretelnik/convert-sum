import React from 'react';
import styles from './Footer.module.scss';

const Footer = () => (
  <div className={styles.footer}>
    <p>
      This is a simple currency converter. convert from one currency to another.
    </p>
    <p>
      Develop by <strong>b_veretelnyk</strong> in <strong>2025</strong>.
    </p>
  </div>
);

export default Footer;
