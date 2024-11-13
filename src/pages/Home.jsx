import React from 'react'
import HeroSection from '../components/HeroSection'
import HowItWorks from '../components/HowITWorks'
import JoinOurTeam from '../components/JoinUs'
import WhyTrustUs from '../components/WhyTrustUs'
import CardComponent from '../components/CardCompoenent'
// import LiveChat from '../components/LiveChat'

const Home = () => {
  return (
    <div>
      <HeroSection className = "mt-[-140px]"/>
      <HowItWorks />
      <CardComponent/>
      <JoinOurTeam/>
      <WhyTrustUs/>
      {/* <LiveChat/> */}
    </div>
  )
}

export default Home
