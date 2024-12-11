import React from 'react'
import HeroSection from '../components/HeroSection'
import HowItWorks from '../components/HowITWorks'
import JoinOurTeam from '../components/JoinUs'
import WhyTrustUs from '../components/WhyTrustUs'
import CardComponent from '../components/CardCompoenent'
// import ViewCourse from "../components/courseSearch/ViewCourse"
import StatisticsSection from '../components/StatisticsSection'
import InstructorSpotlight from '../components/InstructorSpotlight'
import ScrollToTop from '../components/ScrollToTop'
// import LiveChat from '../components/LiveChat'
import { useDispatch } from 'react-redux';
import { addToCart } from '../features/cart/cartSlice';
const Home = () => {
  // const dispatch = useDispatch();
  // const handleAddToCart = () => {
  //   // Example: adding an item to the cart
  //   dispatch(addToCart({ ...product, quantity: 1 }));
  // };
  return (
    <div>
      <ScrollToTop />
      <HeroSection className="mt-[-140px]" />
      <HowItWorks />
      <CardComponent/>
      {/* <ViewCourse/> */}
      <JoinOurTeam/>
      <InstructorSpotlight/>
      <WhyTrustUs/>
      <StatisticsSection/>
      {/* <LiveChat/> */}
    </div>
  )
}

export default Home
