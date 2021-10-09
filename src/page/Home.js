import React from 'react';
import BrandInfoPage from './BrandInfoPage';
import Footer from './Footer';
import VideoPage from './VideoPage';

const Home = () => {
  return (
    <>
      <VideoPage />
      <div className="innerContainer">
        <BrandInfoPage />
        <Footer />
      </div>
    </>
  );
};

export default Home;
