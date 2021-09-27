import React from 'react';
import styles from '../css/Coconut.module.css';

const Coconut = () => {
  return (
    <div className={styles.coconutContainer}>
      <div className={styles.imageContainer}>
        <img src="/images/coconut-detail.jpeg" alt="코코넛" />
      </div>
      <div className={styles.descContainer}>
        <div className={styles.mainTitle}>코코넛</div>
        <div className={styles.description}>
          MILKLAB 코코넛은 고성능으로 질감과 신축성을 갖도록 설계된 호주
          푸드서비스 전용 커피용 코코넛 우유입니다.
        </div>
        <button className={styles.shortCut}>바로가기</button>
      </div>
    </div>
  );
};

export default Coconut;
