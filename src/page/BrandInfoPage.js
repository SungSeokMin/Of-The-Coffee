import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../css/BrandInfo.module.css';

const BrandInfoPage = () => {
  return (
    <div className={styles.brandInfoConatiner}>
      <h1>OUR BRAND</h1>
      <Link to="/milkLab" className={styles.link}>
        <div
          className={styles.milkLab}
          style={{ backgroundImage: "url('/images/milklab.png')" }}
        ></div>
      </Link>
    </div>
  );
};

export default BrandInfoPage;
