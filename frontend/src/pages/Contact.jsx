import React from 'react';

const ContactUs = () => {
  return (
    <div className="flex flex-col items-center py-20 px-4 bg-white font-outfit">
      {/* Hero Section */}
      <div className="w-full max-w-7xl text-center mb-16">
        <h1 className="text-[60px] md:text-[65px] font-bold text-[#6A994E] leading-tight mb-2">
          CONTACT US
        </h1>
        <p className="text-gray-600 text-lg">We’re always here to support your healthcare journey.</p>
      </div>

      {/* Content Section */}
      <div className="w-full max-w-7xl flex flex-col md:flex-row items-start gap-10 bg-white rounded-3xl shadow-lg p-10 border border-gray-200">
        {/* Image Column */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src="/images/contact.png"
            alt="Contact Doctors"
            className="rounded-2xl shadow-lg w-[500px] h-[400px] object-cover"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src =
                'https://placehold.co/400x400/e0e0e0/000000?text=Contact+Image';
            }}
          />
        </div>

        {/* Text Column */}
        <div className="md:w-1/2 text-gray-700 text-lg leading-relaxed">
          {/* Our Office Section */}
          <h2 className="text-3xl font-semibold text-[#6A994E] mb-4">Our Office</h2>
          <p className="mb-1">Plot 47B, Sunrise Enclave</p>
          <p className="mb-1">South Extension, New Delhi – 110049</p>
          <p className="mb-1">Tel: +91 99999 88888</p>
          <p className="mb-6">Email: support@bookmycure.com</p>

          {/* Support Section */}
          <h2 className="text-3xl font-semibold text-[#6A994E] mt-10 mb-4">Support & Feedback</h2>
          <p className="mb-6">
            Have suggestions, questions, or need help? Reach out — your feedback helps us improve and serve you better.
          </p>
          <button className="bg-[#6A994E] hover:bg-green-700 transition-colors duration-300 text-white py-3 px-8 rounded-xl text-lg shadow-md font-medium">
            Send Feedback
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
