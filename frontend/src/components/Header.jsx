import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="w-full px-8 py-8 flex flex-col md:flex-row justify-between items-center gap-8">
      {/* Left Text Section */}
      <div className="w-full md:w-1/2">
        <h1 className="text-[63px] font-semibold font-[Outfit] leading-tight whitespace-nowrap">
          <span className="text-[#386641]">Healthcare </span> <br/>
          <span className="text-[#6A994E]">Anytime, Anywhere.</span>
        </h1>
        <p className="mt-4 text-[18px] font-[Poppins] text-gray-600 text-center md:text-left">
          Get expert health consultations from the comfort of your home or while on the move, with trusted doctors available around the clock.
        </p>

        {/* Button with Link */}
        <Link to="/appointment">
          <button className="mt-6 bg-[#6CA06C] text-white px-6 py-3 rounded-full font-medium text-sm hover:bg-[#5a8c5a] transition">
            Book appointment
          </button>
        </Link>
      </div>

      {/* Right Image Section */}
      <div className="relative w-[695px] h-[462px]">
        <img
          src="images/mockup.png"
          alt="Doctor Mockup"
          className="w-full h-full object-contain"
        />
        <img
          src="images/arrow.png"
          alt="Arrow"
          className="absolute w-[292px] h-[84px] left-[-35%] top-[90%] -translate-x-1/2 -translate-y-1/2"
        />
      </div>
    </header>
  );
};

export default Header;
