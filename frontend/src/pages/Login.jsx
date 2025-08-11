import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../context/AppContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Login = () => {
  const [state, setState] = useState('Sign Up');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();
  const { backendUrl, token, setToken, userData , loadUserProfileData } = useContext(AppContext);

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      const endpoint =
        state === 'Sign Up' ? '/api/user/register' : '/api/user/login';
      const payload =
        state === 'Sign Up' ? { name, email, password } : { email, password };

      const { data } = await axios.post(`${backendUrl}${endpoint}`, payload);

      if (data.success) {
        localStorage.setItem('token', data.token);
        setToken(data.token);
        await loadUserProfileData(); 
        toast.success(`${state === 'Sign Up' ? 'Signup' : 'Login'} successful`);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error?.response?.data?.message || 'Something went wrong');
    }
  };

  useEffect(() => {
    if (token && userData && Object.keys(userData).length > 0) {
      navigate('/');
    }
  }, [token, userData]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-white font-outfit px-4">
      <div className="bg-white rounded-3xl shadow-lg p-10 w-full max-w-md border border-gray-200">
        <h2 className="text-3xl font-bold text-[#6A994E] mb-2 text-center">
          {state === 'Sign Up' ? 'Create Account' : 'Login to BookMyCure'}
        </h2>
        <p className="text-center text-gray-600 mb-6">
          Please {state === 'Sign Up' ? 'sign up' : 'log in'} to book appointment
        </p>

        <form className="space-y-5" onSubmit={onSubmitHandler}>
          {state === 'Sign Up' && (
            <div>
              <label className="block text-gray-700 mb-1">Full Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#6A994E]"
                placeholder="John Doe"
                required
              />
            </div>
          )}

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
            {state === 'Sign Up' ? 'Create account' : 'Login'}
          </button>
        </form>

        <p className="text-center text-gray-600 mt-6">
          {state === 'Sign Up' ? (
            <>
              Already have an account?{' '}
              <span
                onClick={() => setState('Login')}
                className="text-[#6A994E] font-semibold hover:underline cursor-pointer"
              >
                Login here
              </span>
            </>
          ) : (
            <>
              Don’t have an account?{' '}
              <span
                onClick={() => setState('Sign Up')}
                className="text-[#6A994E] font-semibold hover:underline cursor-pointer"
              >
                Sign up
              </span>
            </>
          )}
        </p>
      </div>
    </div>
  );
};

export default Login;
