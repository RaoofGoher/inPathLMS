import React from "react";
import Hero from "../../components/teachOnInPath/Hero";
import Reasons from "../../components/teachOnInPath/Reasons";
import Stats from "../../components/teachOnInPath/Stats";
import BecomeInstructor from "../../components/teachOnInPath/BecomeInstructor";
import InstructorSupportTeam from "../../components/teachOnInPath/InstructorSupportTeam";
import TeachOnTestimonial from "../../components/teachOnInPath/TeachOnTestimonial"
import HowTOBegin from "../../components/teachOnInPath/HowTOBegin";

const TeachOnInPath = () => {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <Reasons />
      <Stats />
      <HowTOBegin/>
      <TeachOnTestimonial/>
      <InstructorSupportTeam />
      <BecomeInstructor />
    </div>
  );
};

export default TeachOnInPath;
