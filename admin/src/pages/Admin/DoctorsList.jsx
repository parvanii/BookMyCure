import React from 'react'
import { useEffect,useContext } from 'react'
import { createContext } from 'react'
import { AdminContext } from '../../context/AdminContext'
import axios from 'axios'


const DoctorsList = () => { 

  const{doctors,aToken,getAllDoctors,changeAvailability} =useContext(AdminContext)
  useEffect(() => {
    // fetch doctors only once when component mounts and aToken exists
    if (aToken && doctors.length === 0) {
      getAllDoctors()
    }
  }, [aToken]) // ✅ run only when aToken is set
  return (
    <div className='m-5 max-h-[90vh] overflow-y-scroll'>
      <h1 className='text-lg font-medium'> All Doctors</h1>
      <div className='w-full flex  flex-wrap gap-4 pt-5 gap-y-6'>
        {
          doctors.map((item,index)=>(
          <div className='border border-gray-200 rounded-xl max-w-56 overflow-hidden cursor-pointer group' key={index}>
        
          <img className='bg-white group-hover:bg-[#6A994E] transition-all duration-500' src={item.image} alt=''/>
          <div className='p-4'>
            <p className='text-neutral-800 text-lg font-medium'>{item.name}</p>
            <p className='text-zinc-600 text-sm'>{item.speciality}</p>
            <div className='mt-2 flex items-center gap-1 text-sm'>
              <input onChange={()=>changeAvailability(item._id)} type="checkbox" checked ={item.available}  style={{accentColor: '#6A994E'}}/>
              <p>Available</p>
              </div>
            </div>
          </div>
          ))
        }
      </div>
    </div>
  )
}

export default DoctorsList