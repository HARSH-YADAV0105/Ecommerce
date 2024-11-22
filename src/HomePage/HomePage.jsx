import React from "react";
import IntroSection from "../IntrSection/IntroSection";
import BrandSlider from "../BrandSlider/BrandSlider";
import NewArrival from "../NewArrival/NewArrival";
import Review from "../CustomerReview/Review";
const HomePage = () => {
  return (
    <>
      <IntroSection />
      <BrandSlider />
      <NewArrival />
      <Review />
    </>
  );
};

export default HomePage;
