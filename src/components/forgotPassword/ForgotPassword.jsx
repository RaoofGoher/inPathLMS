import React, { useState } from 'react';
import axios from 'axios';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post('https://api.inpath.us/users/forgot-password/', { email });
      console.log("hello",response)
      setMessage(response.data.message);
    } catch (error) {
      setMessage('Error sending reset email');
    }
  };
  

  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
    <form
      onSubmit={handleSubmit}
      className="bg-white p-8 rounded-lg shadow-grayColor shadow-lg w-96"
    >
      <h2 className="text-2xl font-semibold mb-4 text-center text-blueColor">Reset Your Password</h2>
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blueColor"
      />
      <button
        type="submit"
        className="w-full p-3 bg-blueColor text-white rounded-lg hover:bg-blueColor/90 transition duration-200"
      >
        Send Reset Link
      </button>
      {message && <p className="mt-4 text-green-600 text-center">{message}</p>}
    </form>
  </div>
  );
};

export default ForgotPassword;
