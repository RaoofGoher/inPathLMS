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
    <form onSubmit={handleSubmit} className='m-8'> 
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <button type="submit">Send Reset Link</button>
      {message && <p>{message}</p>}
    </form>
  );
};

export default ForgotPassword;
