import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaTwitter, FaFacebookF, FaLinkedinIn, FaYoutube, FaInstagram } from "react-icons/fa";
import SocialStrip from "./SocialStrip";

const Footer = () => {
  const [expandedSection, setExpandedSection] = useState(null);

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const menuData = [
    {
      title: "In Path LMS",
      links: [
        {name: "Home", to: "/"},
        { name: "Overview", to: "/overView" },
        { name: "Features", to: "/features" },
        { name: "Pricing", to: "/pricing" },
        { name: "Case Studies", to: "/caseStudies" },
        { name: "About Us", to: "/about" },
        { name: "Careers", to: "/careers" },
      ],
    },
    {
      title: "Learn",
      links: [
        { name: "Courses", to: "/courses" },
        { name: "Certifications", to: "/certifications" },
        { name: "Learning Paths", to: "/learning-paths" },
        { name: "FAQs", to: "/faq" },
      ],
    },
    {
      title: "For Teams",
      links: [
        { name: "Corporate Training", to: "/for-team" },
        { name: "Custom Solutions", to: "/for-team" },
        { name: "Onboarding Programs", to: "/for-team" },
      ],
    },
    {
      title: "Tools",
      links: [
        { name: "Course Builder", to: "/tools" },  // Tool to create courses
        { name: "Quiz & Assessment", to: "/tools" }, // Tool for creating quizzes/tests
        { name: "Student Progress Tracker", to: "/tools" }, // Tool for tracking student progress
        { name: "Gradebook", to: "/tools" },  // Tool for grading and evaluating students
        // { name: "Certificate Generator", to: "/tools" }, // Tool for generating completion certificates
      ],
    },    
    {
      title: "Resources",
      links: [
        { name: "Blog", to: "/blog" },
        { name: "Help Center", to: "/help-center" },
        { name: "Free Resources", to: "/free-resources" },
        { name: "Terms of Service", to: "/terms" },
        { name: "Privacy Policy", to: "/privacy" },
      ],
    },
  ];
  
  return (
    <footer className="bg-primaryColor text-white px-[5%] py-16">
    
      <div className="container mx-auto">
        {/* Large screen layout */}
        <div className="hidden lg:flex justify-between">
          {menuData.map((section, index) => (
            <div key={index}>
              <h4 className="font-semibold mb-4 font-lato">{section.title}</h4>
              <ul>
                {section.links.map((link, idx) => (
                  <li key={idx} className="mb-2">
                    <Link to={link.to} className="hover:underline">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Small screen layout */}
        <div className="lg:hidden">
          {menuData.map((section, index) => (
            <div key={index} className="mb-4">
              <button
                onClick={() => toggleSection(index)}
                className="w-full flex justify-between items-center bg-secondaryColor p-3 rounded"
              >
                <span className="font-semibold">{section.title}</span>
                <span>{expandedSection === index ? "▲" : "▼"}</span>
              </button>
              {expandedSection === index && (
                <ul className="mt-2 flex flex-col space-y-2 pl-4">
                  {section.links.map((link, idx) => (
                    <li key={idx}>
                      <Link to={link.to} className="hover:underline">
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        {/* Social icons and copyright */}
        <div className="mt-8 flex justify-between items-center text-lightColor1">
          <div className="flex space-x-4">
            <FaTwitter />
            <FaFacebookF />
            <FaLinkedinIn />
            <FaYoutube />
            <FaInstagram />
          </div>
          <p className="text-white">© 2024 In Path LMS</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
