import React from "react";
import HeroSection from "../components/HeroSection";
import HowItWorks from "../components/HowITWorks";
import JoinOurTeam from "../components/JoinUs";
import WhyTrustUs from "../components/WhyTrustUs";
import CardComponent from "../components/CardCompoenent";
// import ViewCourse from "../components/courseSearch/ViewCourse"
import StatisticsSection from "../components/StatisticsSection";
import InstructorSpotlight from "../components/InstructorSpotlight";
import ScrollToTop from "../components/ScrollToTop";
import CurrentTrends from "../components/CurrentTrends";
// import LiveChat from '../components/LiveChat'
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";
import CourseOfferings from "../components/CourseOfferings";
import PartnersLog from "../components/PartnersLog";
import HomeHero from "../components/HomeHero";
const Home = () => {
  // const dispatch = useDispatch();
  // const handleAddToCart = () => {
  //   // Example: adding an item to the cart
  //   dispatch(addToCart({ ...product, quantity: 1 }));
  // };
  return (
    <div>
      <ScrollToTop />
      {/* <HeroSection className="mt-[-140px]" />*/}

      {/* <CardComponent/> */}
      {/* <ViewCourse/> */}
      {/* <JoinOurTeam/> */}
      <HomeHero />
      <HowItWorks />
      <CourseOfferings />
      <PartnersLog />
      <CurrentTrends />
      <WhyTrustUs />
      <InstructorSpotlight />
      <StatisticsSection />
      {/* <LiveChat/> */}
    </div>
  );
};

export default Home;
