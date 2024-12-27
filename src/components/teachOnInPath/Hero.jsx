
import React from 'react';
import HeroImage from '../../assets/teachOnInPath/TeachOnInPath.jpg';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <div className="relative w-[99vw] h-[600px] bg-cover bg-center flex justify-center items-center px-8" style={{ backgroundImage: `url(${HeroImage})` }}>
            <div className="md:absolute md:left-60 top-1/2 transform md:-translate-y-1/2 bg-white bg-opacity-75 p-4 rounded-md shadow-md">
                <h1 className="text-2xl font-bold">Come teach with us</h1>
                <p className="mt-2">Become an instructor and change lives <br/>
                     — including your own</p>

                <Link to={"/teachersignup"}><button className="hover:bg-blueColor border text-blueColor border-blueColor bg-white hover:text-white px-4 py-2 mt-4 rounded-md">Start Teaching</button></Link>     
            </div>
        </div>
    );
};

export default Hero;