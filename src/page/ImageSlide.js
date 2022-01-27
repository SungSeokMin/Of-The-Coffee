import React, { useEffect, useState } from 'react';
import styles from '../css/ImageSlide.module.css';

const ImageSlide = () => {
  const TOTAL_IMAGE = 2;
  const [slideNum, setSlideNum] = useState(0);

  useEffect(() => {
    let timeout;

    if (slideNum > TOTAL_IMAGE) setSlideNum(0);
    else {
      timeout = setTimeout(() => {
        setSlideNum(slideNum + 1);
      }, 2000);
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [slideNum]);
  return (
    <div className={styles.slideContainer}>
      <img src={`/images/imageSlide${slideNum}.jpg`} alt="이미지 슬라이드" />
    </div>
  );
};

export default ImageSlide;
