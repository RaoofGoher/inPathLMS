import React from "react";

const MoneyBackGuarantee = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-teal-400 py-16 px-6 md:px-12 text-center rounded-lg shadow-lg">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-extrabold text-white">
          30-Day Money-Back Guarantee
        </h2>
        <p className="mt-4 text-xl text-white opacity-80">
          Try our LMS platform risk-free for 30 days. If you’re not completely
          satisfied, we’ll give you your money back—no questions asked.
        </p>

        <div className="mt-8">
          <a
            href="#signup"
            className="inline-block px-10 py-4 bg-lightColor1 text-white text-xl font-semibold rounded-full shadow-md hover:bg-primaryColor transition duration-300 ease-in-out transform hover:scale-105"
          >
            Start Your Free Trial
          </a>
        </div>

        <div className="mt-6 text-sm text-white opacity-70">
          <p>
            No payment is required for the first 14 days. If you decide it’s not
            for you, get a full refund within 30 days.
          </p>
        </div>

        <div className="mt-12">
          <p className="mt-4 text-white opacity-80">
            We’re committed to your success. If you're not fully satisfied, just
            let us know.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MoneyBackGuarantee;
