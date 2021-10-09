import React from 'react';
import AboutCompany from './AboutCompany';
import BrandInfoPage from './BrandInfoPage';
import Footer from './Footer';
import VideoPage from './VideoPage';

const Home = () => {
  return (
    <>
      <VideoPage />
      <div className="innerContainer">
        <AboutCompany />
        <BrandInfoPage />
        <Footer />
      </div>
    </>
  );
};

export default Home;
