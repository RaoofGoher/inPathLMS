import React from "react";
import ScrollToTop from "../../components/ScrollToTop";

const PrivacyPolicy = () => {
  return (
    <>
      <ScrollToTop />
      <div className="bg-white p-8">
        <h1 className="text-4xl text-center font-semibold text-dark1 mb-8">
          Privacy Policy
        </h1>
        <div className="max-w-4xl mx-auto p-6  ">
          {/* Introduction */}
          <section className="mb-6">
            <h2 className="text-2xl font-bold text-blueColor mb-3">
              Introduction
            </h2>
            <p className="text-lg text-grayColor">
              This Privacy Policy outlines how we collect, use, and protect your
              personal information when you visit our website.
            </p>
          </section>

          {/* Information We Collect */}
          <section className="mb-6">
            <h2 className="text-2xl font-bold text-blueColor mb-3">
              Information We Collect
            </h2>
            <p className="text-lg text-grayColor">
              We collect personal information such as your name, email address,
              and browsing activity when you interact with our website.
            </p>
          </section>

          {/* How We Use Your Information */}
          <section className="mb-6">
            <h2 className="text-2xl font-bold text-blueColor mb-3">
              How We Use Your Information
            </h2>
            <p className="text-lg text-grayColor">
              Your information is used to improve your experience, process
              transactions, and communicate with you about updates or changes to
              our services.
            </p>
          </section>

          {/* Data Protection */}
          <section className="mb-6">
            <h2 className="text-2xl font-bold text-blueColor mb-3">
              Data Protection
            </h2>
            <p className="text-lg text-grayColor">
              We take the security of your personal information seriously and
              implement appropriate measures to protect it from unauthorized
              access.
            </p>
          </section>

          {/* Third-Party Sharing */}
          <section className="mb-6">
            <h2 className="text-2xl font-bold text-blueColor mb-3">
              Third-Party Sharing
            </h2>
            <p className="text-lg text-grayColor">
              We do not share your personal information with third parties without
              your consent, except as required by law.
            </p>
          </section>

          {/* Your Rights */}
          <section className="mb-6">
            <h2 className="text-2xl font-bold text-blueColor mb-3">
              Your Rights
            </h2>
            <p className="text-lg text-grayColor">
              You have the right to access, modify, or delete your personal
              information at any time by contacting us directly.
            </p>
          </section>

          {/* Changes to this Policy */}
          <section className="mb-6">
            <h2 className="text-2xl font-bold text-blueColor mb-3">
              Changes to this Policy
            </h2>
            <p className="text-lg text-grayColor">
              We may update this Privacy Policy from time to time. We will notify
              you of any significant changes by posting the updated policy on this
              page.
            </p>
          </section>

          {/* Contact Us */}
          <section>
            <h2 className="text-2xl font-bold text-blueColor mb-3">
              Contact Us
            </h2>
            <p className="text-lg text-grayColor">
              If you have any questions or concerns regarding this Privacy Policy,
              please contact us at{" "}
              <a
                href="mailto:support@website.com"
                className="text-blueColor/90 hover:underline font-medium"
              >
                support@website.com
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;
