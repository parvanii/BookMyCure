import React from 'react';

const Stats = () => {
  return (
    <div className="flex flex-col md:flex-row gap-10 mt-10 px-6 justify-center items-start">
      
     
      <div className="flex items-start gap-4 md:w-1/3">
        <div className="flex flex-col">
          <h1 className="text-[42px] outfit font-semibold text-[#386641] leading-tight">
            Access to Quality 
            Healthcare in India
          </h1>
        </div>
        <div className="w-[2px] h-[190px] bg-[#386641] hidden md:block" />
      </div>

   
      <div className="flex flex-col md:flex-row md:gap-10 lg:gap-20 md:w-2/3 items-center">
        
        
        <div className="ml-[2px] mb-6 md:mb-0 flex flex-col items-center text-center max-w-[250px]">
          <h2 className="text-[46px] outfit font-semibold text-[#386641] leading-snug">
            65% 
          </h2>
          <p className="text-[18px] font-poppins text-[#000000] mt-2">
            of patients delay hospital visits <br /> due to long wait times or confusion
          </p>
        </div>

        
        <div className="ml-[2px] mb-6 md:mb-0 flex flex-col items-center text-center max-w-[250px]">
          <h2 className="text-[46px] outfit font-semibold text-[#386641] leading-snug">
            80% 
          </h2>
          <p className="text-[18px] font-poppins text-[#000000] mt-2">
            of Indians prefer in-person consultation <br /> but struggle to find available slots
          </p>
        </div>

        
        <div className="ml-[2px] flex flex-col items-center text-center max-w-[250px]">
          <h2 className="text-[46px] outfit font-semibold text-[#386641] leading-snug whitespace-nowrap">
            50 Million+
          </h2>
          <p className="text-[18px] font-poppins text-[#000000] mt-2">
            outpatient appointments missed each  year <br /> due to poor booking systems
          </p>
        </div>

      </div>
    </div>
  );
};

export default Stats;
