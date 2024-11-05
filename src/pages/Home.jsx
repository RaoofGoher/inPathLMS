import React from 'react'
import HeroSection from '../components/HeroSection'
import HowItWorks from '../components/HowITWorks'
import JoinOurTeam from '../components/JoinUs'

const Home = () => {
  return (
    <div>
      <HeroSection className = "mt-[-140px]"/>
      <HowItWorks />
      <JoinOurTeam/>
    </div>
  )
}

export default Home
