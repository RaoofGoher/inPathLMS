import React from "react";
import Volks from "../assets/Volks..png";
import Vimeo from "../assets/vimeo..png";
import samsung from "../assets/samsung..png";
import procter from "../assets/procter..png"; // Fixed filename
import Hp from "../assets/Hp.png";
import ericson from "../assets/ericson..png"; // Fixed filename
import cisco from "../assets/cisco..png"; // Fixed filename
import citi from "../assets/citi.png";

const PartnersLog = () => {
  // Logos array with image paths
  const logos = [
    { image: Volks, alt: "Volkswagen" },
    { image: samsung, alt: "Samsung" },
    { image: cisco, alt: "Cisco" },
    { image: Vimeo, alt: "Vimeo" },
    { image: procter, alt: "Procter & Gamble" },
    { image: Hp, alt: "Hewlett Packard" },
    { image: citi, alt: "Citi" },
    { image: ericson, alt: "Ericsson" },
  ];

  return (
    <section className="hidden  sm:block bg-white py-10 px-16">
      <h1 className="text-center text-grayColor mb-6">
        Trusted by over 16,000 companies and millions of learners around the world
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-8 gap-6 justify-center items-center">
        {/* Mapping logos dynamically */}
        {logos.map((logo, index) => (
          <div key={index} className="flex justify-center items-center">
            <img
              width={80}
              src={logo.image}
              alt={logo.alt}
              className="max-w-full"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default PartnersLog;
