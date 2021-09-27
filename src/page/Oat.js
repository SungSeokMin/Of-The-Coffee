import React from 'react';
import styles from '../css/Oat.module.css';

const Oat = () => {
  return (
    <div className={styles.oatContainer}>
      <div className={styles.descContainer}>
        <div className={styles.mainTitle}>귀리</div>
        <div className={styles.description}>
          MILKLAB 귀리는 고성능으로 질감과 신축성을 갖도록 설계된 호주
          푸드서비스 전용 커피용 귀리 우유입니다.
        </div>
        <button className={styles.shortCut}>바로가기</button>
      </div>
      <div className={styles.imageContainer}>
        <img src="/images/oat-detail.jpeg" alt="귀리" />
      </div>
    </div>
  );
};

export default Oat;
