import React, { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ResetPassword = () => {
  const { uid, token } = useParams(); // Extract uid and token from URL
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setError('');

    // Validate passwords
    if (password !== confirmPassword) {
      setError("Passwords don't match");
      return;
    }

    if (password.length < 8) {
      setError('Password must be at least 8 characters long');
      return;
    }

    try {
      const response = await axios.post('https://api.inpath.us/users/reset-password/', {
        uid,
        token,
        new_password: password,
      });
      setMessage(response.data.message || 'Password reset successfully');
    } catch (error) {
      setError(error.response?.data?.error || 'Error resetting password');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-white">
      <div className="bg-white p-8 rounded-lg shadow-grayColor shadow-xl w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-blueColor mb-6">Reset Your Password</h2>

        <form onSubmit={handleSubmit}>
          {/* Password Field */}
          <div className="mb-4">
            <input
              type="password"
              placeholder="Enter new password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              minLength="8"
              className="w-full p-4 border border-grayColor rounded-md focus:outline-none focus:ring-2 focus:ring-blueColor/90"
            />
          </div>

          {/* Confirm Password Field */}
          <div className="mb-6">
            <input
              type="password"
              placeholder="Confirm new password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              minLength="8"
              className="w-full p-4 border border-grayColor rounded-md focus:outline-none focus:ring-2 focus:ring-blueColor/90"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full p-4 bg-blueColor  text-white font-semibold rounded-md hover:bg-blueColor/90 focus:outline-none focus:ring-2 focus:ring-blueColor/90"
          >
            Reset Password
          </button>
        </form>

        {/* Success or Error Messages */}
        {message && <p className="mt-4 text-green-500 text-center">{message}</p>}
        {error && <p className="mt-4 text-red-500 text-center">{error}</p>}
      </div>
    </div>
  );
};

export default ResetPassword;
