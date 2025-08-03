import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    // For now, just log the credentials (replace with actual login logic)
    console.log('Logging in:', { email, password });

    
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white font-outfit px-4">
      <div className="bg-white rounded-3xl shadow-lg p-10 w-full max-w-md border border-gray-200">
        <h2 className="text-3xl font-bold text-[#6A994E] mb-6 text-center">Login to BookMyCure</h2>

        <form className="space-y-5" onSubmit={onSubmitHandler}>
          <div>
            <label className="block text-gray-700 mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#6A994E]"
              placeholder="you@example.com"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#6A994E]"
              placeholder="••••••••"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-[#6A994E] hover:bg-green-700 text-white font-medium rounded-xl shadow-md transition duration-300"
          >
            Login
          </button>
        </form>

        <p className="text-center text-gray-600 mt-6">
          Don’t have an account?{' '}
          <Link to="/signup" className="text-[#6A994E] font-semibold hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
