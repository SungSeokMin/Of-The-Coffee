import React from 'react';
import styles from '../css/VideoPage.module.css';

const VideoPage = () => {
  return (
    <div className={styles.videoConatiner}>
      <video muted autoPlay loop className={styles.video}>
        <source src="/videos/main-video.mp4" type="video/mp4" />
        <strong>Your browser does not support the video tag.</strong>
      </video>
    </div>
  );
};

export default VideoPage;
