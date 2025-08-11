import React, { useContext } from 'react';
import { AdminContext } from '../context/AdminContext';
import { DoctorContext } from '../context/DoctorContext';  // you forgot to import this in Code 1
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const { aToken, setAToken } = useContext(AdminContext);
  const { dToken, setDToken } = useContext(DoctorContext);
  const navigate = useNavigate();

  const logout = () => {
    navigate('/');
    if (dToken) {
      setDToken('');
      localStorage.removeItem('dToken');
    }
    if (aToken) {
      setAToken('');
      localStorage.removeItem('aToken');
    }
  };

  return (
    <nav className="w-full px-6 py-2 font-poppins text-[#333] bg-white border-b shadow-sm z-10">
      <div className="max-w-[1200px] mx-auto flex items-center justify-between h-[64px]">

        {/* Left: Logo + Admin/Doctor Badge */}
        <div className="flex items-center gap-2">
          <img
            src="/logo.png"
            alt="BookMyCure"
            className="w-[160px] h-[70px] object-contain cursor-pointer"
            onClick={() => navigate('/')}
          />
          <span className="text-xs px-2 py-[2px] rounded-full border border-black text-black font-medium leading-none">
            {aToken ? 'Admin' : dToken ? 'Doctor' : ''}
          </span>
        </div>

        {/* Right: Logout Button */}
        <button
          onClick={logout}
          className="bg-[#6A994E] text-white font-medium px-4 py-1.5 rounded-full hover:bg-[#5a8544] transition"
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
