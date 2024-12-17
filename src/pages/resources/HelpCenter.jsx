import React, { useState } from 'react';
import ScrollToTop from '../../components/ScrollToTop';

const HelpCenter = () => {
  const [activeFAQ, setActiveFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  return (
    <>
      <ScrollToTop />
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl font-extrabold text-dark1 text-center mb-8">Help Center</h1>

          {/* FAQ Section */}
          <section id="faq" className="bg-white shadow-lg rounded-lg p-8 mb-8 border border-gray-200">
            <h2 className="text-2xl font-semibold text-blueColor mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div className="border-b pb-4">
                <h3
                  className="text-xl font-medium text-dark1 cursor-pointer hover:text-blueColor transition-all duration-300"
                  onClick={() => toggleFAQ(0)}
                >
                  How do I reset my password?
                </h3>
                {activeFAQ === 0 && (
                  <p className="text-lg text-grayColor mt-2">
                    To reset your password, go to the login page and click on "Forgot Password". Follow the instructions sent to your email to set a new password.
                  </p>
                )}
              </div>

              <div className="border-b pb-4">
                <h3
                  className="text-xl font-medium text-dark1 cursor-pointer hover:text-blueColor  transition-all duration-300"
                  onClick={() => toggleFAQ(1)}
                >
                  How can I update my profile information?
                </h3>
                {activeFAQ === 1 && (
                  <p className="text-lg text-grayColor mt-2">
                    You can update your profile information by logging into your account, navigating to the "Profile" section, and editing your details.
                  </p>
                )}
              </div>

              <div className="border-b pb-4">
                <h3
                  className="text-xl font-medium text-dark1 cursor-pointer hover:text-blueColor  transition-all duration-300"
                  onClick={() => toggleFAQ(2)}
                >
                  What should I do if I encounter a technical issue?
                </h3>
                {activeFAQ === 2 && (
                  <p className="text-lg text-grayColor mt-2">
                    If you experience any technical issues, try refreshing the page or clearing your browser cache. If the problem persists, please contact our support team.
                  </p>
                )}
              </div>

              <div>
                <h3
                  className="text-xl font-medium text-dark1 cursor-pointer hover:text-blueColor  transition-all duration-300"
                  onClick={() => toggleFAQ(3)}
                >
                  How do I cancel my subscription?
                </h3>
                {activeFAQ === 3 && (
                  <p className="text-lg text-grayColor mt-2">
                    To cancel your subscription, go to your account settings, select "Subscription" and click on "Cancel Subscription". Follow the prompts to complete the process.
                  </p>
                )}
              </div>
            </div>
          </section>

          {/* Contact Support Section */}
          <section id="contact" className="bg-white shadow-lg rounded-lg p-8 mb-8 border border-gray-200">
            <h2 className="text-2xl font-semibold text-blueColor mb-6">Contact Support</h2>
            <p className="text-lg text-grayColor mb-6">
              If you can't find an answer to your question in the FAQ or need further assistance, feel free to reach out to our support team. We're here to help!
            </p>
            <div>
              <p className="text-lg text-dark1 mb-2">Email: <a href="mailto:support@website.com" className="text-blueColor hover:underline">support@website.com</a></p>
              <p className="text-lg text-dark1">Phone: <span className="text-blueColor hover:underline">(123) 456-7890</span></p>
            </div>
          </section>

          {/* Troubleshooting Section */}
          <section id="troubleshooting" className="bg-white shadow-lg rounded-lg p-8 border border-gray-200">
            <h2 className="text-2xl font-semibold text-blueColor mb-6">Troubleshooting</h2>
            <p className="text-lg text-grayColor mb-6">
              If you're experiencing issues with our services, here are some common solutions to try before reaching out to our support team.
            </p>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-medium text-dark1">Issue 1:<span className='text-blueColor'> Unable to Log In</span></h3>
                <p className="text-lg text-grayColor">
                  Make sure you're using the correct email and password. If you've forgotten your password, click on "Forgot Password" to reset it.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-medium text-dark1"> Issue 2:<span className='text-blueColor'> Page Not Loading </span></h3>
                <p className="text-lg text-grayColor">
                  Try refreshing the page or clearing your browser's cache and cookies. If the issue continues, try using a different browser or device.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-medium text-dark1">Issue 3:<span className='text-blueColor'> Missing Features</span></h3>
                <p className="text-lg text-grayColor">
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
