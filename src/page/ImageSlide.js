import React, { useEffect, useState } from 'react';
import styles from '../css/ImageSlide.module.css';

const ImageSlide = () => {
  const TOTAL_IMAGE = 2;
  const [slideNum, setSlideNum] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setSlideNum(slideNum + 1);
      if (slideNum === TOTAL_IMAGE) setSlideNum(0);
    }, 2500);
  }, [slideNum]);

  return (
    <div className={styles.slideContainer}>
      <img src={`/images/imageSlide${slideNum}.jpg`} alt="dd" />
    </div>
  );
};

export default ImageSlide;
