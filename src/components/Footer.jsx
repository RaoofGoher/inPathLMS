import React, { useState } from "react";
import { Link } from "react-router-dom";
import image from "../assets/footer-logo.png";
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
        { name: "Courses", to: "/page-not-found" },
        // { name: "Certifications", to: "/certifications" },
        { name: "Learning Paths", to: "/page-not-found" },
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
        { name: "Amazon Web Services (AWS) Certifications", link: "/page-not-found" },
        { name: "Six Sigma Certifications", link: "/page-not-found" },
        { name: "Microsoft Certifications", link: "/page-not-found" },
        { name: "Cisco Certifications", link: "/page-not-found" },
        { name: "Tableau Certifications", link: "/page-not-found" },
      ],
    },
    {
      title: "IT Certifications",
      items: [
        { name: "AWS Certified Cloud Practitioner", link: "/page-not-found" },
        { name: "AZ-900: Microsoft Azure Fundamentals", link: "/page-not-found" },
        { name: "AWS Certified Solutions Architect - Associate", link: "/page-not-found" },
        { name: "Kubernetes", link: "/page-not-found" },
      ],
    },
    {
      title: "Leadership",
      items: [
        { name: "Management Skills", link: "/page-not-found" },
        { name: "Project Management", link: "/page-not-found" },
        { name: "Personal Productivity", link: "/page-not-found" },
        { name: "Emotional Intelligence", link: "/page-not-found" },
      ],
    },
    {
      title: "Certifications by Skill",
      items: [
        { name: "Cybersecurity Certification", link: "/page-not-found" },
        { name: "Project Management Certification", link: "/page-not-found" },
        { name: "Cloud Certification", link: "/page-not-found" },
        { name: "Data Analytics Certification", link: "/page-not-found" },
        { name: "HR Management Certification", link: "/page-not-found" },
      ],
    },
    {
      title: "Data Science",
      items: [
        { name: "Python", link: "/page-not-found" },
        { name: "Machine Learning", link: "/page-not-found" },
        { name: "ChatGPT", link: "/page-not-found" },
        { name: "Deep Learning", link: "/page-not-found" },
      ],
    },
    {
      title: "Communication",
      items: [
        { name: "Communication Skills", link: "/page-not-found" },
        { name: "Presentation Skills", link: "/page-not-found" },
        { name: "Public Speaking", link: "/page-not-found" },
        { name: "Writing", link: "/page-not-found" },
        { name: "PowerPoint", link: "/page-not-found" },
      ],
    },
    {
      title: "Web Development",
      items: [
        { name: "Web Development", link: "/page-not-found" },
        { name: "JavaScript", link: "/page-not-found" },
        { name: "React JS", link: "/page-not-found" },
        { name: "Angular", link: "/page-not-found" },
        { name: "Java", link: "/page-not-found" },
      ],
    },
    {
      title: "Business Analytics & Intelligence",
      items: [
        { name: "Microsoft Excel", link: "/page-not-found" },
        { name: "SQL", link: "/page-not-found" },
        { name: "Microsoft Power BI", link: "/page-not-found" },
        { name: "Data Analysis", link: "/page-not-found" },
        { name: "Business Analysis", link: "/page-not-found" },
      ],
    },
  ];

  return (
    <>
      {/* Top companies choose section */}
      <section className="bg-blueColor/90 text-white px-16 p-8 flex flex-col md:flex-row gap-8 justify-between items-center  border-b-2 border-grayColor">
        <div>
          <h1 className="text-lg text-center md:text-left">
            Top companies choose{" "}
            <span className=" font-semibold hover:underline">
              <a href="#"> inPath learn management system. </a>
            </span>{" "}
            Business to build in-demand career skills.
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
      <section className="hidden md:block bg-blueColor/90 text-white px-16 p-8">
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
      <section className="md:hidden bg-blueColor/90 text-white px-12 p-8">
        <h2 className="text-2xl font-semibold text-start mb-6">
          Explore top skills and certifications
        </h2>

        <div className="grid lg:grid-cols-2 gap-6">
          {certificationsData.map((section, index) => (
            <div key={index}>
              <button
                onClick={() => toggleCertification(index)}
                className="w-full flex justify-between items-center border-b-2 border-grayColor  p-3 "
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

      <footer className="bg-blueColor px-16 py-8 text-white">
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
      <div className="flex-col sm:flex-row bg-blueColor p-4 px-16 justify-between flex gap-4 border-t-2 border-grayColor items-center text-lightColor1">
        <div className="flex gap-4 items-center">
          <img src={image} alt="Logo" width={90} />
          <p className="text-white">© 2024 InPath LMS</p>
        </div>
        <div>
          <GoogleTranslator />
        </div>
      </div>
    </>
  );
};

export default Footer;
