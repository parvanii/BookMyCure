import React from 'react'
import Header from '../components/Header';
import Body from '../components/Body';
import Stats from "../components/Stats";
import Speciality from '../components/Speciality';
import FAQ from '../components/FAQ';



const HomePage = () => {
  return (
    
    <div className="m-0 p-0">
     <Header/>
     <Stats/>
     <Body/>
     <Speciality/>
     <FAQ/>
     <div className="bg-[#6A994E] w-full">
        <div className="max-w-7xl h-[455px] py-16 px-4 flex flex-col md:flex-row items-center justify-center rounded-lg mx-auto my-12 shadow-lg">
          
          {/* Left Text Section */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left md:w-1/2 mb-8 md:mb-0">
            <h2 className="font-outfit text-white text-[52px] font-semibold leading-tight mb-4">
              Book Appointment
            </h2>
            <h2 className="font-outfit text-white text-[52px] font-semibold leading-tight mb-8">
              100+ Trusted Doctors
            </h2>

            {/* ✅ Button with navigate onClick */}
            <button
              onClick={() => navigate('/login')}
              className="bg-white text-black font-outfit font-medium py-3 px-8 rounded-full text-lg shadow-md hover:bg-gray-100 transition-colors duration-300 focus:outline-none focus:ring-0 active:bg-white"
            >
              Create account
            </button>
          </div>

          {/* Right Image Section */}
          <div className="md:w-1/2 flex justify-center md:justify-end">
            <img
              src="/images/footer-docs.png"
              alt="Doctors"
              className="max-h-[480px] w-[523px] object-contain rounded-lg"
            />
          </div>
        </div>
      </div>
     

    </div>
  )
}

export default HomePage