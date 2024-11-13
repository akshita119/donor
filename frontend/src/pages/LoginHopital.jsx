import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginHospital = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Here you would validate the login (replace with actual API call if necessary)
    if (email === 'hospital@example.com' && password === 'password') {
      // If login is successful, redirect to the Hospital Dashboard
      navigate('/hospital-dashboard');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleLogin} className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>

        <div className="mb-4">
          <label htmlFor="email" className="block text-lg font-medium text-gray-700">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 mt-2 border border-gray-300 rounded-lg"
            placeholder="Enter your email"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block text-lg font-medium text-gray-700">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 mt-2 border border-gray-300 rounded-lg"
            placeholder="Enter your password"
          />
        </div>

        <div className="flex justify-center mt-6">
          <button
            type="submit"
            className="bg-[#E63946] text-white px-6 py-3 rounded-lg text-lg hover:bg-[#D62828]"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginHospital;
