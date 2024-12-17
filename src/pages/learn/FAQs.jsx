import React from "react";
import GeneralQuestions from "../../components/GeneralQuestions";
import ScrollToTop from "../../components/ScrollToTop";
import { Link } from "react-router-dom";
const FAQs = () => {
  const handleScrollToFAQ = () => {
    const section = document.getElementById("general-questions");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <ScrollToTop />
      {/* Hero Section */}
      <section>
        <div className="bg-white py-14 text-center ">
          {/* Content Section */}
          <div className="relative z-10">
            <h1 className="text-5xl font-bold mb-6 text-blueColor leading-tight transform transition-transform duration-500 hover:scale-105">
              Frequently Asked Questions
            </h1>
            <p className="text-lg mb-6 text-grayColor ">
              Find answers to common questions about our platform and services.
            </p>
            {/* Scroll to FAQ section when the button is clicked */}
            <button
              onClick={handleScrollToFAQ}
              className="inline-block text-lg px-6 py-3 bg-blueColor text-white rounded-lg shadow-md transform transition-all duration-300 hover:bg-blueColor/90 hover:shadow-lg"
            >
              Explore FAQs
            </button>
          </div>
        </div>
      </section>

      {/* Need More Help Section */}
      <section>
        <div className="py-12 bg-blueColor/90">
          <h2 className="text-2xl font-bold text-white text-center mb-8">
            Need More Help?
          </h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="mb-4 text-white" >
              If you didn’t find your question here, our support team is here to
              help!
            </p>
            <Link to="/help-center">
              <button className="px-6 py-2 bg-white text-dark1 font-semibold rounded-md hover:bg-white/90">
                Contact Support
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* General Questions Component */}
      <GeneralQuestions />

      {/* Still Have Questions Section */}
      <section className="mt-8 mb-8">
        <div className="bg-blueColor py-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Still Have Questions?</h2>
          <p className="mb-6">We’re here to help. Reach out to us anytime.</p>
          <Link to="/help-center">
            <button className="px-6 py-2 bg-white text-dark1 font-semibold rounded-md hover:bg-white/90">
              Contact Us
            </button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default FAQs;
