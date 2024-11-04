import React, { useState, useEffect } from 'react';
import PrimaryNavbar from '../components/PrimaryNavbar';

// import Footer from '../components/Footer';

import { Outlet } from 'react-router-dom';

const Loader = () => {
  return <div className="loader">Loading...</div>; // Customize this loader style
};

const PrimaryLayout = () => {
 
  const [isNavbarLoading, setIsNavbarLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsNavbarLoading(false), 1000);
  
  }, []);


  return (
    <div className='bg-lightColor2'>

      {isNavbarLoading ? <Loader /> : <PrimaryNavbar />}     
        <Outlet/>
    </div>
  );
};

export default PrimaryLayout;