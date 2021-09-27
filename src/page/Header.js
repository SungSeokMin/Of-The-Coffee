import React from 'react';
import styles from '../css/Header.module.css';

const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <img src="/images/logo.png" alt="로고" />
    </div>
  );
};

export default Header;
