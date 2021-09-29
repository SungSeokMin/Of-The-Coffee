import React from 'react';
import styles from '../css/Footer.module.css';

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.companyInfo}>
        <h2>COMPANY INFO.</h2>
        <p>COMPANY :</p>
      </div>
      <div className={styles.privacy}></div>
      <div className={styles.sns}></div>
    </div>
  );
};

export default Footer;
