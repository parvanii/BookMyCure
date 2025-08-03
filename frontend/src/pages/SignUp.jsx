import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SignupPage = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    // Log the input data (replace this with real signup logic)
    console.log('Signing up with:', { fullName, email, password });

    // TODO: Connect to backend here
    // await signUpUser({ fullName, email, password });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white font-outfit px-4">
      <div className="bg-white rounded-3xl shadow-lg p-10 w-full max-w-md border border-gray-200">
        <h2 className="text-3xl font-bold text-[#6A994E] mb-6 text-center">Create Your Account</h2>

        <form className="space-y-5" onSubmit={onSubmitHandler}>
          <div>
            <label className="block text-gray-700 mb-1">Full Name</label>
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#6A994E]"
              placeholder="Your name"
              required
            />
          </div>

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
            Sign Up
          </button>
        </form>

        <p className="text-center text-gray-600 mt-6">
          Already have an account?{' '}
          <Link to="/login" className="text-[#6A994E] font-semibold hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;
