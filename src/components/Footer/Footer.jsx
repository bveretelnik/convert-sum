import React from 'react';
import styles from './Footer.module.scss';

const Footer = () => (
  <footer className={styles.footer}>
    <p>Розраховуйте впевненіше — результати можна одразу скопіювати.</p>
    <p>
      Створено <strong>b_veretelnyk</strong> · {new Date().getFullYear()}
    </p>
  </footer>
);

export default Footer;
