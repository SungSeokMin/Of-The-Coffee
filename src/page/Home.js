import React from 'react';
import AboutCompany from './AboutCompany';
import Footer from './Footer';
import ImageSlide from './ImageSlide';
import Items from './Items';

const Home = () => {
  return (
    <>
      <div className="innerContainer">
        <AboutCompany />
        <ImageSlide />
        <Items />
        <Footer />
      </div>
    </>
  );
};

export default Home;
