import React from "react"

import TestNavbar from "./components/TestNavbar"
import TestHero from "./components/TestHero"
import Logo1 from "./assets/logos/Logo1.png"
import Logo2 from "./assets/logos/Logo2.png"
import Logo3 from "./assets/logos/Logo3.png"
import Logo4 from "./assets/logos/Logo4.png"
import HeroImage1 from "./assets/design-1.jpg";
import HeroImage2 from "./assets/design-2.jpg";
import HeroImage3 from "./assets/design-3.jpg";
import HeroImage4 from "./assets/design-4.jpg";
import './index.css'
function App() {


  return (
    
      <div className="bg-white">

        <div className="mb-[400px]">
       <TestNavbar bgColor="#022763" textColor="#D2B486" logo={Logo3}/>
       <TestHero  HeroImage={HeroImage1}  bgColor="#D2B486" textColor="#D2B486" cardBgColor="#FFFFFF"/>
       </div>

      <div className="mb-[400px]">
       <TestNavbar bgColor="#4B4B4D" textColor="#0CADA8" logo={Logo1}/>
       <TestHero  HeroImage={HeroImage2}  bgColor="#0CADA8" textColor="#0CADA8" cardBgColor="#FFFFFF"/>
       </div>

       <div className="mb-[400px]">
       <TestNavbar bgColor="#37694A" textColor="#999999" logo={Logo2}/>
       <TestHero HeroImage={HeroImage3}  bgColor="#999999" textColor="#999999" cardBgColor="#FFFFFF"/>
       </div>

       <div>
       <TestNavbar bgColor="#684FA3" textColor="#D1C1F5" logo={Logo4}/>
       <TestHero HeroImage={HeroImage4}  bgColor="#D1C1F5" textColor="#D1C1F5" cardBgColor="#FFFFFF"/>
       </div>
       

        </div>
    
  )
}

export default App
