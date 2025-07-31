import React from 'react';

const Body = () => {
  return (
    <div className="relative bg-white flex flex-col items-center text-center mt-20">
      
      {/* Centered text */}
      <h1 className="text-[50px] outfit font-semibold text-[#000000] leading-tight">
        The Right Doctor For Every Need
      </h1>

      <p className="text-[45px] figma-hand text-[#6A994E] mt-2">
        just a click away!!
      </p>

      {/* Full-width image */}
      <img 
        src="/images/img.png" 
        alt="Doctor illustration" 
        className="w-full max-h-[700px] object-cover mt-6"
      />

    </div>
  );
};

export default Body;
