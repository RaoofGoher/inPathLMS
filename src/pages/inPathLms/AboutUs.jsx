import React from 'react'
import AboutUsHeroSection from '../../components/AboutUsHeroSection';
import InstructorSpotlight from '../../components/InstructorSpotlight';
import WhyTrustUs from '../../components/WhyTrustUs';
import StatisticsSection from '../../components/StatisticsSection';
import ScrollToTop from '../../components/ScrollToTop';

const AboutUs = () => {
  return (
    <div>
      <ScrollToTop/>
     <AboutUsHeroSection/>
     <StatisticsSection/>
     <InstructorSpotlight/>
     <WhyTrustUs/>
    </div>
  )
}

export default AboutUs;
