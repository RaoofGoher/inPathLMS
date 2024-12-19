import React from "react";
import VideoIntroduction from "../../components/VideoIntroduction";
import FeatureHighlights from "../../components/FeatureHighlights";
// import CardComponent from "../../components/CardCompoenent";
import CallToAction from "../../components/CallToAction";
import ScrollToTop from "../../components/ScrollToTop";
import image from "../../assets/getReady.jpg";
const Features = () => {
  return (
    <div>
      <ScrollToTop />
      <VideoIntroduction />
      <FeatureHighlights />
      {/* <CardComponent /> */}
      <CallToAction
        title="Join Us Today!"
        description="Be part of a thriving community transforming education."
        textColorDescription="text-light3"
        buttonText="Sign Up Now"
        buttonColor="bg-blueColor text-white"
        buttonHoverColor="bg-blueColor/90"
        textColor="text-blueColor"
        imageSrc={image}
        bgColor="bg-white"
        imageShadowColor="blueColor"
      />
      ;
    </div>
  );
};

export default Features;
