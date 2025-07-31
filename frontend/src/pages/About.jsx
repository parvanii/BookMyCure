import React from 'react';
import { FaClock, FaUserMd, FaPhoneAlt } from 'react-icons/fa';

const AboutUs = () => {
  return (
    <div className="bg-white min-h-screen px-6 py-20 font-outfit">
      {/* Heading */}
      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-bold text-[#6A994E] mb-4">About Us</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Simplifying healthcare access with a click — welcome to BookMyCure.
        </p>
      </div>

      {/* Image + Text Section */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 mb-20">
        {/* Image */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src="/images/about.png"
            alt="About Doctors"
            className="rounded-3xl shadow-xl w-[400px] h-[400px] object-cover"
          />
        </div>

        {/* Text */}
        <div className="md:w-1/2 text-lg text-gray-700 leading-relaxed">
          <p className="mb-6">
            At <span className="font-semibold text-[#6A994E]">BookMyCure</span>, we're revolutionizing the way people access healthcare. Whether you're
            looking for a specialist, scheduling appointments, or managing follow-ups — we’ve got you covered.
          </p>
          <p className="mb-6">
            We blend user-focused design with cutting-edge technology to ensure a stress-free healthcare journey. No more long queues or endless calls — just simple, smart care.
          </p>

          <h3 className="text-2xl font-semibold text-[#6A994E] mt-8 mb-4">Our Vision</h3>
          <p>
            To bridge the gap between patients and healthcare providers by building a seamless, accessible, and personalized medical platform for everyone.
          </p>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="max-w-7xl mx-auto mb-10">
        <h2 className="text-center text-4xl font-semibold text-gray-800 mb-12">Why Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Card 1 */}
          <div className="bg-white rounded-2xl shadow-md p-8 text-center hover:shadow-xl transition duration-300 border border-[#e0f2e9]">
            <FaClock className="text-[#6A994E] text-4xl mb-4 mx-auto" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Efficiency</h3>
            <p className="text-gray-600">Book appointments instantly, manage schedules, and avoid long wait times.</p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl shadow-md p-8 text-center hover:shadow-xl transition duration-300 border border-[#e0f2e9]">
            <FaUserMd className="text-[#6A994E] text-4xl mb-4 mx-auto" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Trusted Professionals</h3>
            <p className="text-gray-600">Verified doctors and clinics across multiple specialities — all in one place.</p>
          </div>

          {/* Card 3 - Replaced */}
          <div className="bg-white rounded-2xl shadow-md p-8 text-center hover:shadow-xl transition duration-300 border border-[#e0f2e9]">
            <FaPhoneAlt className="text-[#6A994E] text-4xl mb-4 mx-auto" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">24/7 Support</h3>
            <p className="text-gray-600">Round-the-clock assistance for appointment queries, emergencies, and more.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
