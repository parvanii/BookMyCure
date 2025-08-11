import React, { useContext, useEffect } from 'react'
import { DoctorContext } from '../../context/DoctorContext'
import { AppContext } from '../../context/AppContext'
import { assets } from '../../assets/assets'

const DoctorDashboard = () => {

  const { dToken, dashData, getDashData, cancelAppointment, completeAppointment } = useContext(DoctorContext)
  const { slotDateFormat, currency } = useContext(AppContext)

  useEffect(() => {
    if (dToken) {
      getDashData()
    }
  }, [dToken])

  return dashData && (
    <div className='m-5'>

      <div className='flex flex-wrap gap-4'>
        {[{
          icon: assets.earning_icon,
          label: 'Earnings',
          value: `${currency} ${dashData.earnings}`
        }, {
          icon: assets.appointments_icon,
          label: 'Appointments',
          value: dashData.appointments
        }, {
          icon: assets.patients_icon,
          label: 'Patients',
          value: dashData.patients
        }].map(({ icon, label, value }, idx) => (
          <div
            key={idx}
            className='flex items-center gap-3 bg-white p-5 min-w-56 rounded-lg border-2 border-[#6A994E] cursor-pointer hover:bg-[#6A994E] hover:text-white transition-all'
          >
            <img className='w-16' src={icon} alt={label} />
            <div>
              <p className='text-2xl font-semibold'>{value}</p>
              <p className='text-[#6A994E] font-medium'>{label}</p>
            </div>
          </div>
        ))}
      </div>

      <div className='bg-white mt-10 rounded-lg shadow border border-[#6A994E]'>
        <div className='flex items-center gap-3 px-5 py-4 rounded-t-lg border-b border-[#6A994E]'>
          <img src={assets.list_icon} alt="Latest Bookings" />
          <p className='font-semibold text-[#6A994E] text-lg'>Latest Bookings</p>
        </div>

        <div className='pt-4'>
          {dashData.latestAppointments.slice(0, 5).map((item, index) => (
            <div
              key={index}
              className='flex items-center px-6 py-3 gap-4 hover:bg-[#E6F0DF] rounded cursor-pointer transition-colors'
            >
              <img className='rounded-full w-12 h-12 object-cover' src={item.userData.image} alt={item.userData.name} />
              <div className='flex-1 text-sm text-[#3C6E47]'>
                <p className='font-semibold'>{item.userData.name}</p>
                <p>Booking on {slotDateFormat(item.slotDate)}</p>
              </div>
              {item.cancelled ? (
                <p className='text-red-600 text-xs font-semibold'>Cancelled</p>
              ) : item.isCompleted ? (
                <p className='text-green-700 text-xs font-semibold'>Completed</p>
              ) : (
                <div className='flex gap-2'>
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
              )}
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}

export default DoctorDashboard
