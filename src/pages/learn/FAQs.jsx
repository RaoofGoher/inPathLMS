import React from "react";
import GeneralQuestions from "../../components/GeneralQuestions";
import ScrollToTop from "../../components/ScrollToTop"
import {Link} from "react-router-dom"
const FAQs = () => {
  const handleScrollToFAQ = () => {
    const section = document.getElementById("general-questions");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
    <ScrollToTop/>
      {/* Hero Section */}
      <section>
        <div className="bg-gradient-to-r from-primaryColor to-secondaryColor text-lightColor2 py-24 text-center ">
          {/* Content Section */}
          <div className="relative z-10">
            <h1 className="text-5xl font-bold mb-6 text-white leading-tight transform transition-transform duration-500 hover:scale-105">
              Frequently Asked Questions
            </h1>
            <p className="text-lg mb-6 text-lightColor2 opacity-90">
              Find answers to common questions about our platform and services.
            </p>
            {/* Scroll to FAQ section when the button is clicked */}
            <button
              onClick={handleScrollToFAQ}
              className="inline-block text-lg px-6 py-3 bg-lightColor1 text-dark1 rounded-lg shadow-md transform transition-all duration-300 hover:bg-primaryColor hover:shadow-lg"
            >
              Explore FAQs
            </button>
          </div>
        </div>
      </section>

      {/* Need More Help Section */}
      <section>
        <div className="py-12 bg-lightColor2">
          <h2 className="text-2xl font-bold text-dark1 text-center mb-8">
            Need More Help?
          </h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="mb-4">
              If you didn’t find your question here, our support team is here to
              help!
            </p>
            <Link to='/help-center'>
            <button className="px-6 py-2 bg-primaryColor text-dark1 font-semibold rounded-md hover:bg-lightColor1">
              Contact Support
            </button>
            </Link>
          </div>
        </div>
      </section>

      {/* General Questions Component */}
      <GeneralQuestions />

      {/* Still Have Questions Section */}
      <section className="mt-8">
        <div className="bg-gradient-to-r from-primaryColor to-secondaryColor text-lightColor2 py-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Still Have Questions?</h2>
          <p className="mb-6">We’re here to help. Reach out to us anytime.</p>
          <Link to='/help-center'>
          <button className="px-6 py-2 bg-lightColor1 text-dark1 font-semibold rounded-md hover:bg-primaryColor">
            Contact Us
          </button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default FAQs;
