import React, { useState, useEffect } from 'react';
import PrimaryNavbar from '../components/PrimaryNavbar';
import TemporaryNavbar from '../components/temporaryNavbar';
// import Footer from '../components/Footer';

import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import SocialStrip from '../components/SocialStrip';


const PrimaryLayout = () => {
 
 

  return (
    <div >

      <PrimaryNavbar />    
        <Outlet/>
        {/* <SocialStrip/> */}
        <Footer/>
        {/* <TemporaryNavbar />      */}

    </div>
  );
};

export default PrimaryLayout;