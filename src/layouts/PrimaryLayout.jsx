import React, { useState, useEffect } from 'react';
import PrimaryNavbar from '../components/PrimaryNavbar';
import TemporaryNavbar from '../components/temporaryNavbar';
// import Footer from '../components/Footer';

import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';



const PrimaryLayout = () => {
 
 

  return (
    <div className='bg-lightColor2'>

      <PrimaryNavbar />    
        <Outlet/>
        <Footer/>
        <TemporaryNavbar />     

    </div>
  );
};

export default PrimaryLayout;