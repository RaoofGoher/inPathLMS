import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faSignInAlt, faGraduationCap, faUserGraduate } from '@fortawesome/free-solid-svg-icons';

const ResponsiveIcons = () => {
  return (
    <div className=" flex flex-row items-center justify-center bg-white p-4">
     
      <div className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-4 gap-8">
        {/* Internet Icon */}
        
          <FontAwesomeIcon icon={faGlobe} className="text-blueColor text-4xl mb-4" />
         
        

        {/* Login Icon */}
       
          <FontAwesomeIcon icon={faSignInAlt} className="text-blueColor text-4xl mb-4" />
          

        {/* Education Icon */}
        
          <FontAwesomeIcon icon={faGraduationCap} className="text-blueColor text-4xl mb-4" />
          
        

        {/* Student Icon */}
        
          <FontAwesomeIcon icon={faUserGraduate} className="text-blueColor text-4xl mb-4" />
         
        
      </div>
    </div>
  );
};

export default ResponsiveIcons;
