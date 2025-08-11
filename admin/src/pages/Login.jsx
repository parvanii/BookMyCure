import React, { useContext, useState } from 'react';
import { AdminContext } from '../context/AdminContext';
import { DoctorContext } from '../context/DoctorContext';
import axios from 'axios';
import { toast } from 'react-toastify';

const Login = () => {
  const [state, setState] = useState('Admin');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const { setAToken } = useContext(AdminContext);
  const { setDToken } = useContext(DoctorContext);

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      if (state === 'Admin') {
        const { data } = await axios.post(backendUrl + '/api/admin/login', { email, password });
        if (data.success) {
          setAToken(data.token);
          localStorage.setItem('aToken', data.token);
        } else {
          toast.error(data.message);
        }
      } else {
        const { data } = await axios.post(backendUrl + '/api/doctor/login', { email, password });
        if (data.success) {
          setDToken(data.token);
          localStorage.setItem('dToken', data.token);
        } else {
          toast.error(data.message);
        }
      }
    } catch (error) {
      toast.error('Something went wrong. Please try again.');
      console.error('Login error:', error);
  
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white font-outfit px-4">
      <div className="bg-white rounded-3xl shadow-lg p-10 w-full max-w-md border border-gray-200">
        <h2 className="text-3xl font-bold text-[#6A994E] mb-6 text-center">
          {state} Login
        </h2>

        <form onSubmit={onSubmitHandler} className="space-y-5">
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

          {state === 'Admin' ? (
            <p>
              Doctor Login?{' '}
              <span
                className="text-[#6A994E] underline cursor-pointer"
                onClick={() => setState('Doctor')}
              >
                Click here
              </span>
            </p>
          ) : (
            <p>
              Admin Login?{' '}
              <span
                className="text-[#6A994E] underline cursor-pointer"
                onClick={() => setState('Admin')}
              >
                Click here
              </span>
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Login;
