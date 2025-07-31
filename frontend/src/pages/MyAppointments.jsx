// pages/MyAppointments.jsx
import React from 'react';

const appointments = [
  {
    name: 'Dr. Richard James',
    specialty: 'General Physician',
    address: '57th Cross, Delhi',
    date: 'Tue 25 July, 2024 | 8:30 PM',
    image: '/images/doctor-1.png',
  },
  // Duplicate as needed
];

const MyAppointments = () => {
  return (
    <div className="bg-white min-h-screen px-6 py-12 font-outfit">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-semibold text-gray-800 mb-8">My Appointments</h1>

        <div className="space-y-6">
          {appointments.map((appt, index) => (
            <div key={index} className="flex items-center justify-between bg-[#f9fdfb] p-6 rounded-2xl shadow-sm border border-[#e0f2e9]">
              <div className="flex items-center gap-4">
                <img src={appt.image} className="w-16 h-16 rounded-lg object-cover" alt={appt.name} />
                <div>
                  <h2 className="text-lg font-bold">{appt.name}</h2>
                  <p className="text-sm text-gray-600">{appt.specialty}</p>
                  <p className="text-sm text-gray-500">{appt.address}</p>
                  <p className="text-sm text-gray-400">{appt.date}</p>
                </div>
              </div>
              <div className="space-y-2">
                <button className="bg-[#6A994E] text-white px-4 py-2 rounded-lg text-sm">Pay Now</button>
                <button className="border border-red-300 text-red-500 px-4 py-2 rounded-lg text-sm hover:bg-red-50">Cancel</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyAppointments;
