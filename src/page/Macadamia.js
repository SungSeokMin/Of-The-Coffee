import React from 'react';
import styles from '../css/Macadamia.module.css';

const Macadamia = () => {
  return (
    <div className={styles.macadamiaContainer}>
      <div className={styles.descContainer}>
        <div className={styles.mainTitle}>마카다미아</div>
        <div className={styles.description}>
          MILKLAB 마카다미아는 고성능으로 질감과 신축성을 갖도록 설계된 호주
          푸드서비스 전용 커피용 마카다미아 우유입니다.
        </div>
        <button className={styles.shortCut}>바로가기</button>
      </div>
      <div className={styles.imageContainer}>
        <img src="/images/macadamia-detail.jpeg" alt="마카다미아" />
      </div>
    </div>
  );
};

export default Macadamia;
