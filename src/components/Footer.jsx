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
import GoogleTranslator from "./GoogleTranslator";

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
        { name: "Amazon Web Services (AWS) Certifications", link: "/certifications/aws" },
        { name: "Six Sigma Certifications", link: "/certifications/six-sigma" },
        { name: "Microsoft Certifications", link: "/certifications/microsoft" },
        { name: "Cisco Certifications", link: "/certifications/cisco" },
        { name: "Tableau Certifications", link: "/certifications/tableau" },
      ],
    },
    {
      title: "IT Certifications",
      items: [
        { name: "AWS Certified Cloud Practitioner", link: "/certifications/aws-cloud-practitioner" },
        { name: "AZ-900: Microsoft Azure Fundamentals", link: "/certifications/az-900" },
        { name: "AWS Certified Solutions Architect - Associate", link: "/certifications/aws-solutions-architect" },
        { name: "Kubernetes", link: "/certifications/kubernetes" },
      ],
    },
    {
      title: "Leadership",
      items: [
        { name: "Management Skills", link: "/certifications/management-skills" },
        { name: "Project Management", link: "/certifications/project-management" },
        { name: "Personal Productivity", link: "/certifications/personal-productivity" },
        { name: "Emotional Intelligence", link: "/certifications/emotional-intelligence" },
      ],
    },
    {
      title: "Certifications by Skill",
      items: [
        { name: "Cybersecurity Certification", link: "/certifications/cybersecurity" },
        { name: "Project Management Certification", link: "/certifications/project-management" },
        { name: "Cloud Certification", link: "/certifications/cloud" },
        { name: "Data Analytics Certification", link: "/certifications/data-analytics" },
        { name: "HR Management Certification", link: "/certifications/hr-management" },
      ],
    },
    {
      title: "Data Science",
      items: [
        { name: "Python", link: "/certifications/python" },
        { name: "Machine Learning", link: "/certifications/machine-learning" },
        { name: "ChatGPT", link: "/certifications/chatgpt" },
        { name: "Deep Learning", link: "/certifications/deep-learning" },
      ],
    },
    {
      title: "Communication",
      items: [
        { name: "Communication Skills", link: "/certifications/communication-skills" },
        { name: "Presentation Skills", link: "/certifications/presentation-skills" },
        { name: "Public Speaking", link: "/certifications/public-speaking" },
        { name: "Writing", link: "/certifications/writing" },
        { name: "PowerPoint", link: "/certifications/powerpoint" },
      ],
    },
    {
      title: "Web Development",
      items: [
        { name: "Web Development", link: "/certifications/web-development" },
        { name: "JavaScript", link: "/certifications/javascript" },
        { name: "React JS", link: "/certifications/react-js" },
        { name: "Angular", link: "/certifications/angular" },
        { name: "Java", link: "/certifications/java" },
      ],
    },
    {
      title: "Business Analytics & Intelligence",
      items: [
        { name: "Microsoft Excel", link: "/certifications/microsoft-excel" },
        { name: "SQL", link: "/certifications/sql" },
        { name: "Microsoft Power BI", link: "/certifications/power-bi" },
        { name: "Data Analysis", link: "/certifications/data-analysis" },
        { name: "Business Analysis", link: "/certifications/business-analysis" },
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

      {/* Large screen certifications layout */}
      <section className="hidden md:block bg-gray-800/90 text-white px-16 p-8">
        <h2 className="text-2xl font-semibold text-start mb-6">
          Explore top skills and certifications
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {certificationsData.map((section, index) => (
            <div key={index} className="rounded">
              <h3 className="font-semibold text-xl mb-4">{section.title}</h3>
              <ul className="flex flex-col space-y-2">
                {section.items.map((item, idx) => (
                  <li key={idx}>
                    <Link to={item.link} className="hover:underline">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Certifications mobile screen layout */}
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
                    <li key={idx}>
                      <Link to={item.link} className="hover:underline">
                        {item.name}
                      </Link>
                    </li>
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
        </div>
      </footer>
      <div className="flex-col sm:flex-row bg-gray-800 p-4 px-16 justify-between flex gap-4 border-t-2 border-primaryColor items-center text-lightColor1">
        <div className="flex gap-4 items-center">
          <img src={image} alt="Logo" width={50} />
          <p className="text-white">© 2024 In Path LMS</p>
        </div>
        <div>
          <GoogleTranslator />
        </div>
      </div>
    </>
  );
};

export default Footer;
