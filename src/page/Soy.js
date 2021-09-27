import React from 'react';
import styles from '../css/Soy.module.css';

const Soy = () => {
  return (
    <div className={styles.soyContainer}>
      <div className={styles.imageContainer}>
        <img src="/images/soy-detail.jpeg" alt="소이" />
      </div>
      <div className={styles.descContainer}>
        <div className={styles.mainTitle}>소이</div>
        <div className={styles.description}>
          MILKLAB 소이은 고성능으로 질감과 신축성을 갖도록 설계된 호주
          푸드서비스 전용 커피용 소이 우유입니다.
        </div>
        <button className={styles.shortCut}>바로가기</button>
      </div>
    </div>
  );
};

export default Soy;
