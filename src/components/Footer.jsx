import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaTwitter, FaFacebookF, FaLinkedinIn, FaYoutube, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const [expandedSection, setExpandedSection] = useState(null);

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const menuData = [
    {
      title: "Toggl Plan",
      links: [
        { name: "Product", to: "/" },
        { name: "Pricing", to: "/" },
        { name: "Customer Stories", to: "/" },
        { name: "Knowledge Base", to: "/" },
        { name: "About", to: "/about" },
        { name: "Work With Us", to: "/" },
      ],
    },
    {
      title: "By Use Case",
      links: [
        { name: "Project Planning", to: "/" },
        { name: "Resource Planning", to: "/" },
        { name: "Task Management", to: "/" },
        { name: "All Use Cases", to: "/" },
      ],
    },
    {
      title: "By Team",
      links: [
        { name: "Creative Agencies", to: "/" },
        { name: "Consultancies", to: "/" },
        { name: "Implementation Teams", to: "/" },
      ],
    },
    {
      title: "Compare To",
      links: [
        { name: "Trello", to: "/" },
        { name: "Asana", to: "/" },
        { name: "Basecamp", to: "/" },
        { name: "Monday.com", to: "/" },
        { name: "MS Planner", to: "/" },
      ],
    },
    {
      title: "Useful Links",
      links: [
        { name: "Blog", to: "/" },
        { name: "Free Templates", to: "/" },
        { name: "Press Kit", to: "/" },
        { name: "Terms of Use", to: "/" },
        { name: "Privacy Policy", to: "/" },
      ],
    },
  ];

  return (
    <footer className="bg-purple-900 text-purple-200 p-6">
      <div className="container mx-auto">
        {/* Large screen layout */}
        <div className="hidden lg:flex justify-between">
          {menuData.map((section, index) => (
            <div key={index}>
              <h4 className="font-semibold mb-4">{section.title}</h4>
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
                className="w-full flex justify-between items-center bg-purple-700 p-3 rounded"
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
        <div className="mt-8 flex justify-between items-center text-purple-400">
          <div className="flex space-x-4">
            <FaTwitter />
            <FaFacebookF />
            <FaLinkedinIn />
            <FaYoutube />
            <FaInstagram />
          </div>
          <p>© 2024 Toggl Plan</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
