import React from 'react'
import ScrollToTop from '../../components/ScrollToTop'

const TermsOfService = () => {
  return (
    <>
    <ScrollToTop/>
    <div className=" py-16 bg-gradient-to-tr from-primaryColor to-secondaryColor">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">Terms of Service</h1>
        <div className="bg-white shadow-lg rounded-lg p-8">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Introduction</h2>
            <p className="text-lg text-gray-600">
              These Terms of Service govern your use of our website and services. By accessing or using our site, you agree to be bound by these terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Acceptance of Terms</h2>
            <p className="text-lg text-gray-600">
              By using our website, you agree to comply with and be bound by these Terms of Service. If you do not agree with any of the terms, please do not use our website.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Use of Services</h2>
            <p className="text-lg text-gray-600">
              You are permitted to access and use our website for lawful purposes only. You agree not to engage in any activities that may disrupt or harm the website.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Account Responsibilities</h2>
            <p className="text-lg text-gray-600">
              If you create an account on our website, you are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Intellectual Property</h2>
            <p className="text-lg text-gray-600">
              All content, features, and functionality on our website are the exclusive property of the company, and may not be used without our permission.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Limitation of Liability</h2>
            <p className="text-lg text-gray-600">
              We are not liable for any damages, losses, or issues arising from the use of our services or website. You use the site at your own risk.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Privacy Policy</h2>
            <p className="text-lg text-gray-600">
              Your use of our website is also governed by our Privacy Policy. Please review it for more information about how we collect, use, and protect your information.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Modifications to Terms</h2>
            <p className="text-lg text-gray-600">
              We reserve the right to modify these Terms of Service at any time. Any changes will be posted on this page, and by continuing to use our site, you agree to the updated terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Us</h2>
            <p className="text-lg text-gray-600">
              If you have any questions regarding these Terms of Service, please contact us at <a href="mailto:support@website.com" className="text-primaryColor hover:underline">support@website.com</a>.
            </p>
          </section>
        </div>
      </div>
    </div>
    </>
  )
}

export default TermsOfService
