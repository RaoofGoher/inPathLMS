import React from "react";
import PricingPlans from "../../components/PricingPlans";
// import CTABanner from "../../components/CTABanner";
import MoneyBackGuarantee from "../../components/MoneyBackGuarantee";
import StudentsTestimonials from "../../components/StudentsTestimonials";
import ScrollToTop from "../../components/ScrollToTop";
import CallToAction from "../../components/CallToAction";
import image from "../../assets/getReady.jpg"

const Pricing = () => {
  return (
    <div>
      <ScrollToTop />
      <PricingPlans />
      <MoneyBackGuarantee />
      <StudentsTestimonials />
      <CallToAction
        title="Get Started Today and Transform Your Learning Experience!"
        description="Sign up now to start your 14-day free trial and explore all the premium features!"
        textColor="text-primaryColor"
        textColorDescription="text-light3"
        buttonText="Sign Up Now"
        buttonColor="bg-primaryColor text-white"
        buttonHoverColor="bg-lightColor1"
        imageSrc={image}
        bgColor="bg-lightColor2"
        imageShadowColor="primaryColor"
      />
    </div>
  );
};

export default Pricing;
