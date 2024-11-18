import React, { useState } from 'react'
import ScrollToTop from '../../components/ScrollToTop'

const HelpCenter = () => {
  const [activeFAQ, setActiveFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  return (
    <>
      <ScrollToTop />
      <div className="bg-gradient-to-br from-secondaryColor to-primaryColor py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">Help Center</h1>

          <section id="faq" className="bg-white shadow-lg rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Frequently Asked Questions</h2>

            <div className="space-y-6">
              <div className="border-b pb-4">
                <h3
                  className="text-xl font-medium text-gray-800 cursor-pointer"
                  onClick={() => toggleFAQ(0)}
                >
                  How do I reset my password?
                </h3>
                {activeFAQ === 0 && (
                  <p className="text-lg text-gray-600 mt-2">
                    To reset your password, go to the login page and click on "Forgot Password". Follow the instructions sent to your email to set a new password.
                  </p>
                )}
              </div>

              <div className="border-b pb-4">
                <h3
                  className="text-xl font-medium text-gray-800 cursor-pointer"
                  onClick={() => toggleFAQ(1)}
                >
                  How can I update my profile information?
                </h3>
                {activeFAQ === 1 && (
                  <p className="text-lg text-gray-600 mt-2">
                    You can update your profile information by logging into your account, navigating to the "Profile" section, and editing your details.
                  </p>
                )}
              </div>

              <div className="border-b pb-4">
                <h3
                  className="text-xl font-medium text-gray-800 cursor-pointer"
                  onClick={() => toggleFAQ(2)}
                >
                  What should I do if I encounter a technical issue?
                </h3>
                {activeFAQ === 2 && (
                  <p className="text-lg text-gray-600 mt-2">
                    If you experience any technical issues, try refreshing the page or clearing your browser cache. If the problem persists, please contact our support team.
                  </p>
                )}
              </div>

              <div>
                <h3
                  className="text-xl font-medium text-gray-800 cursor-pointer"
                  onClick={() => toggleFAQ(3)}
                >
                  How do I cancel my subscription?
                </h3>
                {activeFAQ === 3 && (
                  <p className="text-lg text-gray-600 mt-2">
                    To cancel your subscription, go to your account settings, select "Subscription" and click on "Cancel Subscription". Follow the prompts to complete the process.
                  </p>
                )}
              </div>
            </div>
          </section>

          <section id="contact" className="bg-white shadow-lg rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Support</h2>
            <p className="text-lg text-gray-600 mb-6">
              If you can't find an answer to your question in the FAQ or need further assistance, feel free to reach out to our support team. We're here to help!
            </p>
            <div>
              <p className="text-lg text-gray-600 mb-2">Email: <a href="mailto:support@website.com" className="text-primaryColor hover:underline">support@website.com</a></p>
              <p className="text-lg text-gray-600">Phone: <span className="text-primaryColor">(123) 456-7890</span></p>
            </div>
          </section>

          <section id="troubleshooting" className="bg-white shadow-lg rounded-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Troubleshooting</h2>
            <p className="text-lg text-gray-600 mb-6">
              If you're experiencing issues with our services, here are some common solutions to try before reaching out to our support team.
            </p>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-medium text-gray-800">Issue 1: Unable to Log In</h3>
                <p className="text-lg text-gray-600">
                  Make sure you're using the correct email and password. If you've forgotten your password, click on "Forgot Password" to reset it.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-medium text-gray-800">Issue 2: Page Not Loading</h3>
                <p className="text-lg text-gray-600">
                  Try refreshing the page or clearing your browser's cache and cookies. If the issue continues, try using a different browser or device.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-medium text-gray-800">Issue 3: Missing Features</h3>
                <p className="text-lg text-gray-600">
                  If you're missing certain features, make sure your account is active and you have the correct subscription plan. You can view and manage your subscription in your account settings.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default HelpCenter;
