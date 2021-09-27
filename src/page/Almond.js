import React from 'react';
import styles from '../css/Almond.module.css';

const Almond = () => {
  return (
    <div className={styles.almondContainer}>
      <div className={styles.imageContainer}>
        <img src="/images/almond-detail.jpeg" alt="아몬드" />
      </div>
      <div className={styles.descContainer}>
        <div className={styles.mainTitle}>아몬드</div>
        <div className={styles.description}>
          MILKLAB 아몬드는 고성능으로 질감과 신축성을 갖도록 설계된 호주
          푸드서비스 전용 커피용 아몬드 우유입니다.
        </div>
        <button className={styles.shortCut}>바로가기</button>
      </div>
    </div>
  );
};

export default Almond;
