import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const MyAppointments = () => {
  const { doctors } = useContext(AppContext);

  return (
    <div className="min-h-screen px-4 py-10 bg-white font-outfit">
      <h1 className="text-2xl md:text-3xl font-semibold mb-8 text-center text-[#6A994E]">
        My Appointments
      </h1>

      <div className="space-y-6 max-w-3xl mx-auto">
        {doctors.slice(0, 2).map((item, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-xl shadow-sm p-4 md:p-6 flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6"
          >
            {/* Doctor Image */}
            <div className="w-full md:w-32 md:h-32 aspect-square flex-shrink-0">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>

            {/* Doctor Info */}
            <div className="flex-1">
              <p className="text-lg md:text-xl font-semibold">{item.name}</p>
              <p className="text-gray-600 text-sm md:text-base mb-1">
                {item.specialty}
              </p>

              <p className="text-xs md:text-sm font-medium mt-2 text-gray-700">
                Address:
              </p>
              <p className="text-xs md:text-sm text-gray-600">
                {item.address.line1}
              </p>
              <p className="text-xs md:text-sm text-gray-600">
                {item.address.line2}
              </p>

              <p className="mt-2 text-xs md:text-sm text-gray-700">
                <span className="font-medium">Date & Time:</span>{' '}
                25 July, 2024 | 8:30 PM
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col gap-2 w-full md:w-auto">
              <button className="bg-[#6A994E] hover:bg-[#5C8644] text-white px-4 py-2 rounded-lg text-sm">
                Pay Online
              </button>
              <button className="bg-red-100 text-red-600 hover:bg-red-200 px-4 py-2 rounded-lg text-sm">
                Cancel Appointment
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyAppointments;
