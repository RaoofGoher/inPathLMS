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
    <form onSubmit={handleSubmit} className="m-8">
      <div>
        <input
          type="password"
          placeholder="Enter new password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          minLength="8"
        />
      </div>
      <div>
        <input
          type="password"
          placeholder="Confirm new password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
          minLength="8"
        />
      </div>
      <div>
        <button type="submit">Reset Password</button>
      </div>
      {message && <p style={{ color: 'green' }}>{message}</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </form>
  );
};

export default ResetPassword;
