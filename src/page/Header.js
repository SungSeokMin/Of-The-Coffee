import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../css/Header.module.css';

const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <Link to="/" className={styles.link}>
        <span>OF THE COFFEE</span>
      </Link>
    </div>
  );
};

export default Header;
