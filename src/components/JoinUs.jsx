import React from 'react';
import Join from '../assets/joinUs.svg';
import { Link } from 'react-router-dom';

const JoinOurTeam = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center max-w-6xl mx-auto  bg-lightColor2 ">
      {/* Text Section */}
      <div className="w-full lg:w-1/2 text-center lg:text-left">
        <h2 className="text-3xl font-bold text-lightColor1 mb-4">Join Our Team</h2>
        <p className="text-gray-600 mb-6">
          Be part of our dynamic and supportive community. Join us to make a meaningful impact in online education, connect with passionate learners, and grow your career with us.
        </p>
        <Link to="/login">
          <button className="px-6 py-2 border border-orange-500 text-lightColor1 rounded-lg hover:bg-orange-500 hover:text-white transition">
            Join Us
          </button>
        </Link>
      </div>

      {/* Illustration Section */}
      <div className="w-full lg:w-1/2 flex justify-center mt-6 lg:mt-0 ">
        <img src={Join} alt="Join Our Team" className="max-w-full h-auto" />
      </div>
    </section>
  );
};

export default JoinOurTeam;
