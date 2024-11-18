import React from "react";
import ScrollToTop from "../../components/ScrollToTop";

const PrivacyPolicy = () => {
  return (
    <>
      <ScrollToTop />
      <div className="bg-gradient-to-r from-primaryColor to-secondaryColor p-8">
        <h1 className="text-4xl text-center font-semibold text-white">
          Privacy Policy
        </h1>
        <div className="max-w-4xl mx-auto p-8 bg-white shadow-lg rounded-lg my-8">
          <h2 className="text-2xl font-bold text-primaryColor mb-4">
            Introduction
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            This Privacy Policy outlines how we collect, use, and protect your
            personal information when you visit our website.
          </p>

          <h2 className="text-2xl font-bold text-primaryColor mb-4">
            Information We Collect
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            We collect personal information such as your name, email address,
            and browsing activity when you interact with our website.
          </p>

          <h2 className="text-2xl font-bold text-primaryColor mb-4">
            How We Use Your Information
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Your information is used to improve your experience, process
            transactions, and communicate with you about updates or changes to
            our services.
          </p>

          <h2 className="text-2xl font-bold text-primaryColor mb-4">
            Data Protection
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            We take the security of your personal information seriously and
            implement appropriate measures to protect it from unauthorized
            access.
          </p>

          <h2 className="text-2xl font-bold text-primaryColor mb-4">
            Third-Party Sharing
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            We do not share your personal information with third parties without
            your consent, except as required by law.
          </p>

          <h2 className="text-2xl font-bold text-primaryColor mb-4">
            Your Rights
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            You have the right to access, modify, or delete your personal
            information at any time by contacting us directly.
          </p>

          <h2 className="text-2xl font-bold text-primaryColor mb-4">
            Changes to this Policy
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            We may update this Privacy Policy from time to time. We will notify
            you of any significant changes by posting the updated policy on this
            page.
          </p>

          <h2 className="text-2xl font-bold text-primaryColor mb-4">
            Contact Us
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            If you have any questions or concerns regarding this Privacy Policy,
            please contact us at{" "}
            <a
              href="mailto:support@website.com"
              className="text-primaryColor hover:underline"
            >
              support@website.com
            </a>
            .
          </p>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;
