import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Footer = () => {
  const navigate = useNavigate(); // Initialize navigate

  return (
    <footer className="bg-white">
      {/* Top Green Banner */}
      

      {/* Bottom Links */}
      <div className="py-12 px-4 border-t border-gray-200">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* BookMyCure Info */}
          <div className="flex flex-col items-start">
            <div className="flex items-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 text-[#6A994E] mr-2"
              >
                <path d="M11.645 20.917 3.033 12.29a4.99 4.99 0 0 1 0-7.07 4.99 4.99 0 0 1 7.07 0L12 7.439l1.897-1.897a4.99 4.99 0 0 1 7.07 0 4.99 4.99 0 0 1 0 7.07l-8.612 8.627-.175.144-.176-.144Z" />
              </svg>
              <span className="font-outfit text-2xl font-semibold text-gray-800">BookMyCure</span>
            </div>
            <p className="font-outfit text-sm text-gray-600 leading-relaxed">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry...
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-outfit text-lg font-medium text-gray-800 mb-4">COMPANY</h3>
            <ul className="space-y-2">
              <li><a href="#" className="font-outfit text-base text-gray-600 hover:text-[#6A994E]">Home</a></li>
              <li><a href="#" className="font-outfit text-base text-gray-600 hover:text-[#6A994E]">About us</a></li>
              <li><a href="#" className="font-outfit text-base text-gray-600 hover:text-[#6A994E]">Contact us</a></li>
              <li><a href="#" className="font-outfit text-base text-gray-600 hover:text-[#6A994E]">Privacy policy</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-outfit text-lg font-medium text-gray-800 mb-4">GET IN TOUCH</h3>
            <ul className="space-y-2">
              <li className="font-outfit text-base text-gray-600">+1-212-456-7890</li>
              <li className="font-outfit text-base text-gray-600">XYZ@gmail.com</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-100 text-center">
          <p className="font-outfit text-sm text-gray-500">
            Copyright &copy; 2025 XYZ — All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
