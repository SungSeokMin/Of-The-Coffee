import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../css/Header.module.css';

const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <Link to="/">
        <img src="/images/logo.png" alt="로고" />
      </Link>
    </div>
  );
};

export default Header;
