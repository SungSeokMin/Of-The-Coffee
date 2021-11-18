import React from 'react';
import AboutCompany from './AboutCompany';
import ImageSlide from './ImageSlide';
import Items from './Items';

const Home = () => {
  return (
    <>
      <div className="innerContainer">
        <AboutCompany />
        <ImageSlide />
        <Items />
      </div>
    </>
  );
};

export default Home;
