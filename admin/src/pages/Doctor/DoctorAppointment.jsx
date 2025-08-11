import React, { useContext, useEffect } from 'react'
import { DoctorContext } from '../../context/DoctorContext'
import { AppContext } from '../../context/AppContext'
import { assets } from '../../assets/assets'

const DoctorAppointments = () => {
  const { dToken, appointments, getAppointments, cancelAppointment, completeAppointment } = useContext(DoctorContext)
  const { slotDateFormat, calculateAge, currency } = useContext(AppContext) 

  useEffect(() => {
    if (dToken) {
      getAppointments()
    }
 },)



  return (
    <div className='w-full max-w-6xl m-5'>
      <p className='mb-3 text-lg font-medium text-[#6A994E]'>All Appointments</p>

      <div className='bg-white border rounded text-sm max-h-[80vh] overflow-y-scroll'>
        <div className='max-sm:hidden grid grid-cols-[0.5fr_2fr_1fr_1fr_3fr_1fr_1fr] gap-1 py-3 px-6 border-b border-green-300'>
          <p className='text-green-700 font-semibold'>#</p>
          <p className='text-green-700 font-semibold'>Patient</p>
          <p className='text-green-700 font-semibold'>Payment</p>
          <p className='text-green-700 font-semibold'>Age</p>
          <p className='text-green-700 font-semibold'>Date & Time</p>
          <p className='text-green-700 font-semibold'>Fees</p>
          <p className='text-green-700 font-semibold'>Action</p>
        </div>

        {appointments.map((item, index) => (
          <div
            className='flex flex-wrap justify-between max-sm:gap-5 max-sm:text-base sm:grid grid-cols-[0.5fr_2fr_1fr_1fr_3fr_1fr_1fr] gap-1 items-center text-green-800 py-3 px-6 border-b border-green-200 hover:bg-green-50'
            key={index}
          >
            <p className='max-sm:hidden'>{index + 1}</p>
            <div className='flex items-center gap-2'>
              <img src={item.userData.image} className='w-8 rounded-full' alt="" />
              <p>{item.userData.name}</p>
            </div>
            <div>
              <p className='text-xs inline border border-[#6A994E] px-2 rounded-full text-[#6A994E] font-medium'>
                {item.payment ? 'Online' : 'CASH'}
              </p>
            </div>
            <p className='max-sm:hidden'>
  {(() => {
    const age = calculateAge(item.userData.dob);
    return isNaN(age) ? 'N/A' : age;
  })()}
</p>

            <p>{slotDateFormat(item.slotDate)}, {item.slotTime}</p>
            <p>{currency}{item.amount}</p> {/* now uses currency */}
            {item.cancelled
              ? <p className='text-red-500 text-xs font-semibold'>Cancelled</p>
              : item.isCompleted
                ? <p className='text-green-600 text-xs font-semibold'>Completed</p>
                : <div className='flex gap-2'>
                    <img
                      onClick={() => cancelAppointment(item._id)}
                      className='w-10 cursor-pointer hover:opacity-80'
                      src={assets.cancel_icon}
                      alt="Cancel"
                    />
                    <img
                      onClick={() => completeAppointment(item._id)}
                      className='w-10 cursor-pointer hover:opacity-80'
                      src={assets.tick_icon}
                      alt="Complete"
                    />
                  </div>
            }
          </div>
        ))}
      </div>
    </div>
  )
}

export default DoctorAppointments
