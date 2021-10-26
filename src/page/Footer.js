import React from 'react';
import styles from '../css/Footer.module.css';
import { BsInstagram } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.companyInfo}>
        <h2>COMPANY INFO.</h2>
        <div className={styles.underLine} />
        <div>
          <span>상호 :</span> 오브터커피인터내셔널
        </div>
        <div>
          <span>대표 :</span> 이주용
        </div>
        <div>
          <span>주소 :</span> 경기도 남양주시 와부읍 수레로640번길 15
        </div>
        <div>
          <span>사업자등록번호 :</span> 212-26-36547
        </div>
      </div>
      <div className={styles.contactInfo}>
        <h2>CONTACT.</h2>
        <div className={styles.underLine} />
        <div>
          <span>주문 및 문의 :</span> 010-8565-9977
        </div>
        <div>
          <span>이메일 :</span> ofthecoffee@naver.com
        </div>
        <div>
          <span>OPEN AM 10:00 ~ CLOSE PM 06:00 / SAT.SUN.HOLIDAY CLOSED</span>
        </div>
        <div>
          <a
            href="https://www.instagram.com/milklabkorea/"
            target="_blank"
            rel="noreferrer"
          >
            <BsInstagram className={styles.instagramIcon} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
