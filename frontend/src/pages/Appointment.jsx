import React from 'react'

const Appointment = () => {
  return (
    <div className="bg-white min-h-screen px-6 py-12 font-outfit">
    <div className="max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row gap-10">
        {/* Doctor Info */}
        <div className="md:w-1/3 flex flex-col items-center text-center">
          <img src="/images/doctor-1.png" alt="Doctor" className="rounded-xl w-48 h-48 object-cover mb-4" />
          <h2 className="text-2xl font-bold text-gray-800">Dr. Richard James</h2>
          <p className="text-gray-600 text-sm">MBBS - General Physician · 7 years</p>
          <p className="text-gray-600 mt-4 text-sm">Fee: <span className="font-semibold">$50</span></p>
        </div>

        {/* Booking Section */}
        <div className="md:w-2/3">
          <p className="text-gray-700 mb-6">
            Dr. James is a strong proponent of delivering comprehensive medical care, focusing on preventive medicine, chronic disease management...
          </p>

          {/* Booking Slots */}
          <h3 className="text-xl font-semibold text-[#6A994E] mb-4">Booking Slots</h3>
          <div className="flex flex-wrap gap-4 mb-8">
            {['8:00 AM', '9:30 AM', '10:00 AM', '11:30 AM'].map((slot, idx) => (
              <button key={idx} className="bg-[#f0f7f3] text-[#6A994E] px-4 py-2 rounded-full hover:bg-[#6A994E] hover:text-white transition">{slot}</button>
            ))}
          </div>

          <button className="bg-[#6A994E] text-white px-6 py-3 rounded-xl font-medium hover:bg-[#5e8f45]">
            Book Appointment
          </button>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Appointment