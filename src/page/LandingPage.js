import React, { useEffect } from 'react';
import styles from '../css/Lading.module.css';
import Almond from './Almond';
import Coconut from './Coconut';
import Macadamia from './Macadamia';
import Oat from './Oat';
import Soy from './Soy';

const LandingPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div className={styles.ladingContainer}>
      <Almond />
      <Macadamia />
      <Coconut />
      <Oat />
      <Soy />
    </div>
  );
};

export default LandingPage;