import React, { useState } from 'react';

const BillingPage = () => {
  const [billingDetails, setBillingDetails] = useState({
    fullName: '',
    email: '',
    address: '',
    city: '',
    zipCode: '',
    country: '',
    paymentMethod: 'Credit Card', // default to Credit Card
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  });

  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBillingDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  // Handle payment method change
  const handlePaymentMethodChange = (e) => {
    setBillingDetails((prevDetails) => ({
      ...prevDetails,
      paymentMethod: e.target.value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Add form validation logic here
    if (
      !billingDetails.fullName ||
      !billingDetails.email ||
      !billingDetails.address ||
      !billingDetails.city ||
      !billingDetails.zipCode ||
      !billingDetails.country ||
      !billingDetails.cardNumber ||
      !billingDetails.expiryDate ||
      !billingDetails.cvv
    ) {
      alert('Please fill out all fields.');
      return;
    }

    // Simulate form submission and loading state
    setLoading(true);
    setTimeout(() => {
      setIsFormSubmitted(true);
      setLoading(false);
      console.log('Form Submitted: ', billingDetails);
    }, 2000); // Simulate delay
  };

  return (
    <div className="flex justify-center py-12 bg-gradient-to-r from-[#4A90E2] to-[#50E3C2]">
      <div className="w-full max-w-2xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center bg-white p-6 rounded-2xl shadow-2xl text-[#F5A623] mb-8">Billing Information</h2>

        {/* Billing Form */}
        <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-xl shadow-2xl hover:shadow-slate-700">
          {/* Billing Address Section */}
          <div>
            <label htmlFor="fullName" className="block text-sm font-medium text-gray-600">Full Name</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={billingDetails.fullName}
              onChange={handleInputChange}
              className="w-full mt-2 p-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F5A623] transition duration-200"
              placeholder="John Doe"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-600">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={billingDetails.email}
              onChange={handleInputChange}
              className="w-full mt-2 p-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F5A623] transition duration-200"
              placeholder="you@example.com"
              required
            />
          </div>

          <div>
            <label htmlFor="address" className="block text-sm font-medium text-gray-600">Address</label>
            <input
              type="text"
              id="address"
              name="address"
              value={billingDetails.address}
              onChange={handleInputChange}
              className="w-full mt-2 p-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F5A623] transition duration-200"
              placeholder="123 Main St."
              required
            />
          </div>

          <div>
            <label htmlFor="city" className="block text-sm font-medium text-gray-600">City</label>
            <input
              type="text"
              id="city"
              name="city"
              value={billingDetails.city}
              onChange={handleInputChange}
              className="w-full mt-2 p-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F5A623] transition duration-200"
              placeholder="New York"
              required
            />
          </div>

          <div>
            <label htmlFor="zipCode" className="block text-sm font-medium text-gray-600">Zip Code</label>
            <input
              type="text"
              id="zipCode"
              name="zipCode"
              value={billingDetails.zipCode}
              onChange={handleInputChange}
              className="w-full mt-2 p-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F5A623] transition duration-200"
              placeholder="10001"
              required
            />
          </div>

          <div>
            <label htmlFor="country" className="block text-sm font-medium text-gray-600">Country</label>
            <input
              type="text"
              id="country"
              name="country"
              value={billingDetails.country}
              onChange={handleInputChange}
              className="w-full mt-2 p-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F5A623] transition duration-200"
              placeholder="USA"
              required
            />
          </div>

          {/* Payment Section */}
          <div>
            <label htmlFor="payment-method" className="block text-sm font-medium text-gray-600">Payment Method</label>
            <select
              id="payment-method"
              name="paymentMethod"
              value={billingDetails.paymentMethod}
              onChange={handlePaymentMethodChange}
              className="w-full mt-2 p-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F5A623] transition duration-200"
            >
              <option value="Visa">Visa</option>
              <option value="MasterCard">MasterCard</option>
              <option value="American Express">American Express</option>
              <option value="Credit Card">Credit Card</option>
            </select>
          </div>

          {billingDetails.paymentMethod && (
            <>
              <div>
                <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-600">Card Number</label>
                <input
                  type="text"
                  id="cardNumber"
                  name="cardNumber"
                  value={billingDetails.cardNumber}
                  onChange={handleInputChange}
                  className="w-full mt-2 p-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F5A623] transition duration-200"
                  placeholder="1234 5678 9101 1121"
                  required
                />
              </div>

              <div className="flex space-x-4">
                <div className="w-1/2">
                  <label htmlFor="expiryDate" className="block text-sm font-medium text-gray-600">Expiry Date</label>
                  <input
                    type="text"
                    id="expiryDate"
                    name="expiryDate"
                    value={billingDetails.expiryDate}
                    onChange={handleInputChange}
                    className="w-full mt-2 p-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F5A623] transition duration-200"
                    placeholder="MM/YY"
                    required
                  />
                </div>
                <div className="w-1/2">
                  <label htmlFor="cvv" className="block text-sm font-medium text-gray-600">CVV</label>
                  <input
                    type="text"
                    id="cvv"
                    name="cvv"
                    value={billingDetails.cvv}
                    onChange={handleInputChange}
                    className="w-full mt-2 p-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F5A623] transition duration-200"
                    placeholder="123"
                    required
                  />
                </div>
              </div>
            </>
          )}

          {/* Submit Button */}
          <div className="flex justify-center mt-6">
            <button
              type="submit"
              className={`px-6 py-3 bg-[#F5A623] text-white font-semibold rounded-lg shadow-md transition duration-300 ${loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#50E3C2]'}`}
              disabled={loading}
            >
              {loading ? 'Processing...' : isFormSubmitted ? 'Payment Successful!' : 'Submit Payment'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BillingPage;
