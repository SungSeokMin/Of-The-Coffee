import React from 'react';
import styles from '../css/AboutCompany.module.css';

const AboutCompany = () => {
  return (
    <div className={styles.aboutCompany}>
      <h1>“커피의 경험을 고민하다”</h1>
      <div className={styles.titleContainer}>
        <p>
          오브더커피 인터내셔널은 커피의 지속가능성에 대해 고민하고
          <br />
          한국 커피 문화를 다양하게 즐길 수 있도록 설립한 스페셜티 커피 전문
          기업입니다.
          <br />
          <br />
          커피의 중심지인 대한민국에 더 나아가 호주의 이색 음료들을 유통하여
          <br />
          더욱 더 다양하게 즐거운 경험을 할 수 있도록 커피 문화의 지속 가능성을
          끝없이 고민하고 있습니다.
        </p>
      </div>
    </div>
  );
};

export default AboutCompany;
