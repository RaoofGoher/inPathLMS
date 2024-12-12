import React, { useState } from "react";
import { Link } from "react-router-dom";
import image from "../assets/logos/Logo.png";
import {
  FaApple,
  FaGoogle,
  FaAmazon,
  FaMicrosoft,
  FaFacebook,
} from "react-icons/fa";

const Footer = () => {
  const [expandedSection, setExpandedSection] = useState(null);
  const [expandedCertifications, setExpandedCertifications] = useState(null);

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const toggleCertification = (section) => {
    setExpandedCertifications(
      expandedCertifications === section ? null : section
    );
  };

  const menuData = [
    {
      title: "In Path LMS",
      links: [
        { name: "Home", to: "/" },
        { name: "Overview", to: "/overView" },
        { name: "Features", to: "/features" },
        { name: "Pricing", to: "/pricing" },
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

  const certificationsData = [
    {
      title: "Certifications by Issuer",
      items: [
        "Amazon Web Services (AWS) Certifications",
        "Six Sigma Certifications",
        "Microsoft Certifications",
        "Cisco Certifications",
        "Tableau Certifications",
      ],
    },
    {
      title: "IT Certifications",
      items: [
        "AWS Certified Cloud Practitioner",
        "AZ-900: Microsoft Azure Fundamentals",
        "AWS Certified Solutions Architect - Associate",
        "Kubernetes",
      ],
    },
    {
      title: "Leadership",
      items: [
        "Management Skills",
        "Project Management",
        "Personal Productivity",
        "Emotional Intelligence",
      ],
    },
    {
      title: "Certifications by Skill",
      items: [
        "Cybersecurity Certification",
        "Project Management Certification",
        "Cloud Certification",
        "Data Analytics Certification",
        "HR Management Certification",
      ],
    },
    {
      title: "Data Science",
      items: ["Python", "Machine Learning", "ChatGPT", "Deep Learning"],
    },
    {
      title: "Communication",
      items: [
        "Communication Skills",
        "Presentation Skills",
        "Public Speaking",
        "Writing",
        "PowerPoint",
      ],
    },
    {
      title: "Web Development",
      items: ["Web Development", "JavaScript", "React JS", "Angular", "Java"],
    },
    {
      title: "Business Analytics & Intelligence",
      items: [
        "Microsoft Excel",
        "SQL",
        "Microsoft Power BI",
        "Data Analysis",
        "Business Analysis",
      ],
    },
  ];

  return (
    <>
      {/* Top companies choose section */}
      <section className="bg-gray-800/90 text-white px-16 p-8 flex flex-col md:flex-row gap-8 justify-between items-center  border-b-2 border-primaryColor">
        <div>
          <h1 className="text-xl font-semibold text-center md:text-left">
            Top companies choose{" "}
            <span className="text-primaryColor hover:underline">
              <a href="#">inPathLMS Business</a>
            </span>{" "}
            to build in-demand career skills.
          </h1>
        </div>
        <div>
          <ul className="flex gap-8 text-xl justify-center md:justify-start">
            <li className="flex justify-center items-center">
              <FaApple className="text-3xl sm:text-4xl" />
            </li>
            <li className="flex justify-center items-center">
              <FaGoogle className="text-3xl sm:text-4xl" />
            </li>
            <li className="flex justify-center items-center">
              <FaAmazon className="text-3xl sm:text-4xl" />
            </li>
            <li className="flex justify-center items-center">
              <FaMicrosoft className="text-3xl sm:text-4xl" />
            </li>
            <li className="flex justify-center items-center">
              <FaFacebook className="text-3xl sm:text-4xl" />
            </li>
          </ul>
        </div>
      </section>
      {/* large screen certification layout */}
      <section className="hidden md:block bg-gray-800/90 text-white px-16 p-8">
        <h2 className="text-2xl font-semibold text-start mb-6">
          Explore top skills and certifications
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {certificationsData.map((section, index) => (
            <div key={index} className="  rounded">
              <h3 className="font-semibold text-xl mb-4">{section.title}</h3>
              <ul className="flex flex-col space-y-2">
                {section.items.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Certifications mobile screen layout  */}
      <section className="md:hidden bg-gray-800/90 text-white px-12 p-8">
        <h2 className="text-2xl font-semibold text-start mb-6">
          Explore top skills and certifications
        </h2>

        <div className="grid lg:grid-cols-2 gap-6">
          {certificationsData.map((section, index) => (
            <div key={index}>
              <button
                onClick={() => toggleCertification(index)}
                className="w-full flex justify-between items-center border-b-2 border-primaryColor  p-3 "
              >
                <span className="font-semibold">{section.title}</span>
                <span>{expandedCertifications === index ? "▲" : "▼"}</span>
              </button>
              {expandedCertifications === index && (
                <ul className="mt-2 flex flex-col space-y-2 pl-4">
                  {section.items.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </section>

      <footer className="bg-gray-800 px-16 py-8 text-white">
        <div className="container mx-auto">
          {/* Large screen layout */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {menuData.map((section, index) => (
              <div key={index}>
                <h4 className="font-semibold mb-4 font-lato">
                  {section.title}
                </h4>
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
        </div>
      </footer>
      <div className=" bg-gray-800 p-4 px-16 flex gap-4 border-t-2 border-primaryColor items-center text-lightColor1">
        <img src={image} alt="Logo" width={50} />
        <p className="text-white">© 2024 In Path LMS</p>
      </div>
    </>
  );
};

export default Footer;
