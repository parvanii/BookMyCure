import React, { useEffect, useContext } from 'react';
import { assets } from '../../assets/assets';
import { AdminContext } from '../../context/AdminContext';
import { AppContext } from '../../context/AppContext';

const AllAppointments = () => {
  const { aToken, appointments = [], cancelAppointment, getAllAppointments } = useContext(AdminContext);
  const { slotDateFormat, calculateAge } = useContext(AppContext);

  useEffect(() => {
    if (aToken) {
      getAllAppointments();
    }
  }, [aToken]);

  return (
    <div className="w-full max-w-6xl mx-auto my-6 px-4">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">All Appointments</h2>

      <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
        {/* Header Row */}
        <div className="hidden sm:grid grid-cols-[0.5fr_3fr_1fr_3fr_3fr_1fr_1fr] bg-gray-50 py-3 px-6 border-b border-gray-200 text-gray-600 font-medium text-sm">
          <p>#</p>
          <p>Patient</p>
          <p>Age</p>
          <p>Date & Time</p>
          <p>Doctor</p>
          <p>Fees</p>
          <p>Action</p>
        </div>

        {/* Data Rows */}
        {appointments.length > 0 ? (
          appointments.map((item, index) => (
            <div
              key={index}
              className="flex flex-wrap justify-between sm:grid sm:grid-cols-[0.5fr_3fr_1fr_3fr_3fr_1fr_1fr] items-center text-gray-700 py-3 px-6 border-b border-gray-100 hover:bg-gray-50 transition-colors"
            >
              <p className="max-sm:hidden">{index + 1}</p>

              {/* Patient */}
              <div className="flex items-center gap-3">
                <img
                  src={item.userData.image}
                  className="w-9 h-9 rounded-full object-cover border border-gray-200"
                  alt={item.userData.name}
                />
                <p className="font-medium">{item.userData.name}</p>
              </div>

              {/* Age */}
              <p className="max-sm:hidden">{calculateAge(item.userData.dob)}</p>

              {/* Date & Time */}
              <p className="text-sm text-gray-500">
                {slotDateFormat(item.slotDate)}, {item.slotTime}
              </p>

              {/* Doctor */}
              <div className="flex items-center gap-3">
                <img
                  src={item.docData.image}
                  className="w-9 h-9 rounded-full object-cover border border-gray-200 bg-gray-100"
                  alt={item.docData.name}
                />
                <p className="font-medium">{item.docData.name}</p>
              </div>

              {/* Fees */}
              <p className="font-semibold">
  {item.amount.toLocaleString("en-IN", { style: "currency", currency: "INR" })}
</p>


              {/* Action */}
              <div>
                {item.cancelled ? (
                  <span className="text-red-500 text-xs font-semibold bg-red-50 px-2 py-1 rounded-lg">
                    Cancelled
                  </span>
                ) : item.isCompleted ? (
                  <span className="text-green-500 text-xs font-semibold bg-green-50 px-2 py-1 rounded-lg">
                    Completed
                  </span>
                ) : (
                  <img
                    onClick={() => cancelAppointment(item._id)}
                    className="w-8 cursor-pointer hover:scale-105 transition-transform"
                    src={assets.cancel_icon}
                    alt="Cancel"
                  />
                )}
              </div>
            </div>
          ))
        ) : (
          <div className="py-6 px-6 text-gray-500 text-center text-sm">
            No appointments found.
          </div>
        )}
      </div>
    </div>
  );
};

export default AllAppointments;
