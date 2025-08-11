import React, { useContext, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const NavBar = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const { token, setToken, userData,setUserData } = useContext(AppContext);

  const logout = () => {
    localStorage.removeItem('token');
    setToken(false);
    setUserData(false);
    navigate('/login');
  };

  return (
    <div className="flex items-center justify-between py-4 mb-5 font-poppins text-sm ">
      {/* Logo */}
      <img
        onClick={() => navigate('/')}
        className="w-[200px] h-auto object-contain cursor-pointer"
        src="/images/logo.png"
        alt="logo"
      />

      {/* Desktop Nav */}
      <ul className="hidden md:flex items-start gap-6 font-medium">
        <NavLink to="/">
          <li className="h-[30px] flex items-center justify-center px-2 text-[16px] leading-[30px]">
            Home
          </li>
          <hr className="border-none outline-none h-0.5 bg-[#809D3C] w-3/5 m-auto hidden" />
        </NavLink>

        <NavLink to="/doctors">
          <li className="h-[30px] flex items-center justify-center px-2 text-[16px] leading-[30px]">
            Doctors
          </li>
          <hr className="border-none outline-none h-0.5 bg-[#809D3C] w-3/5 m-auto hidden" />
        </NavLink>

        <NavLink to="/about">
          <li className="h-[30px] flex items-center justify-center px-2 text-[16px] leading-[30px]">
            About
          </li>
          <hr className="border-none outline-none h-0.5 bg-[#809D3C] w-3/5 m-auto hidden" />
        </NavLink>

        <NavLink to="/contact">
          <li className="h-[30px] flex items-center justify-center px-2 text-[16px] leading-[30px]">
            Contact
          </li>
          <hr className="border-none outline-none h-0.5 bg-[#809D3C] w-3/5 m-auto hidden" />
        </NavLink>
      </ul>

      {/* Right side: Auth + Menu */}
      <div className="flex items-center gap-4">
        {
          token && userData ? (
            <div className="flex items-center gap-2 cursor-pointer group relative">
              <img className="w-8 rounded-full" src={userData?.image || "/images/profile_pic.png"} alt="profile" />

              <img className="w-2.5" src="/images/dropdown_icon.svg" alt="dropdown" />
              <div className="absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block">
                <div className="min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4">
                  <p onClick={() => navigate('/my-profile')} className="hover:text-black cursor-pointer">My Profile</p>
                  <p onClick={() => navigate('/my-appointments')} className="hover:text-black cursor-pointer">My Appointments</p>
                  <p onClick={logout} className="hover:text-black cursor-pointer">Logout</p>
                </div>
              </div>
            </div>
          ) : (
            <button
              onClick={() => navigate('/login')}
              className="group w-[140px] h-[40px] flex justify-center items-center gap-2 rounded-[47px] bg-[#6a994e] px-6 py-2 font-poppins text-white text-[15px] transition-all hover:bg-[#6a994e]"
            >
              <span className="relative z-10 transition-transform group-hover:-translate-x-2">
                Signup
              </span>
              <svg
                className="relative z-10 h-5 w-5 transition-transform group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          )
        }

        
        <img onClick={() => setShowMenu(true)} className="w-6 md:hidden" src="/images/menu_icon.png" alt="menu" />
      </div>

    </div>
  );
};

export default NavBar;
