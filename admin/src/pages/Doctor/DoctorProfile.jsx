import React, { useContext, useEffect, useState } from 'react'
import { DoctorContext } from '../../context/DoctorContext'
import { AppContext } from '../../context/AppContext'
import { toast } from 'react-toastify'
import axios from 'axios'

const DoctorProfile = () => {

    const { dToken, profileData, setProfileData, getProfileData } = useContext(DoctorContext)
    const { currency, backendUrl } = useContext(AppContext)
    const [isEdit, setIsEdit] = useState(false)

    const updateProfile = async () => {
        try {
            const updateData = {
                address: profileData.address,
                fees: profileData.fees,
                about: profileData.about,
                available: profileData.available
            }

            const { data } = await axios.post(backendUrl + '/api/doctor/update-profile', updateData, { headers: { dToken } })

            if (data.success) {
                toast.success(data.message)
                setIsEdit(false)
                getProfileData()
            } else {
                toast.error(data.message)
            }
        } catch (error) {
            toast.error(error.message)
            console.log(error)
        }
    }

    useEffect(() => {
        if (dToken) {
            getProfileData()
        }
    }, [dToken])

    return profileData && (
        <div className="max-w-4xl mx-auto p-6">
            <div className='flex flex-col sm:flex-row gap-8 bg-white rounded-2xl shadow-lg p-8'>

                {/* Image */}
                <div className='flex-shrink-0'>
                    <img
                        className='w-48 h-48 sm:w-56 sm:h-56 rounded-3xl object-cover shadow-inner border-4 border-green-200'
                        src={profileData.image}
                        alt={profileData.name}
                    />
                </div>

                {/* Profile Details */}
                <div className='flex-1 flex flex-col justify-between'>

                    {/* Name and Credentials */}
                    <div>
                        <h1 className='text-4xl font-extrabold text-green-800'>{profileData.name}</h1>
                        <p className='mt-1 text-green-600 text-lg'>
                            {profileData.degree} - {profileData.speciality}
                        </p>
                        <span className='inline-block mt-2 px-3 py-0.5 text-sm font-semibold text-green-700 bg-green-100 rounded-full shadow-sm'>
                            {profileData.experience}
                        </span>
                    </div>

                    {/* About Section */}
                    <div className='mt-6'>
                        <label className='block text-green-900 font-semibold mb-1'>About</label>
                        {isEdit
                            ? <textarea
                                value={profileData.about}
                                onChange={(e) => setProfileData(prev => ({ ...prev, about: e.target.value }))}
                                rows={6}
                                className='w-full resize-none rounded-lg border border-green-300 p-3 text-green-700 placeholder-green-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition'
                                placeholder="Write something about yourself..."
                              />
                            : <p className='text-green-700 leading-relaxed whitespace-pre-line'>{profileData.about || 'No description provided.'}</p>
                        }
                    </div>

                    {/* Fees and Address */}
                    <div className='mt-6 space-y-4'>

                        <div>
                            <label className='block text-green-900 font-semibold mb-1'>Appointment Fee</label>
                            {isEdit
                                ? <input
                                    type='number'
                                    value={profileData.fees}
                                    onChange={(e) => setProfileData(prev => ({ ...prev, fees: e.target.value }))}
                                    className='w-32 rounded-lg border border-green-300 p-2 text-green-700 font-semibold focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition'
                                    min={0}
                                  />
                                : <p className='text-green-800 font-semibold'>{currency} {profileData.fees}</p>
                            }
                        </div>

                        <div>
                            <label className='block text-green-900 font-semibold mb-1'>Address</label>
                            {isEdit
                                ? <>
                                    <input
                                        type='text'
                                        value={profileData.address.line1}
                                        onChange={(e) => setProfileData(prev => ({ ...prev, address: { ...prev.address, line1: e.target.value } }))}
                                        placeholder="Line 1"
                                        className='w-full rounded-lg border border-green-300 p-2 mb-2 text-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition'
                                    />
                                    <input
                                        type='text'
                                        value={profileData.address.line2}
                                        onChange={(e) => setProfileData(prev => ({ ...prev, address: { ...prev.address, line2: e.target.value } }))}
                                        placeholder="Line 2"
                                        className='w-full rounded-lg border border-green-300 p-2 text-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition'
                                    />
                                  </>
                                : <p className='text-green-700 leading-relaxed whitespace-pre-line'>
                                    {profileData.address.line1}<br />
                                    {profileData.address.line2}
                                  </p>
                            }
                        </div>
                    </div>

                    {/* Availability Toggle */}
                    <div className='mt-6 flex items-center gap-3'>
                        <input
                            type="checkbox"
                            checked={profileData.available}
                            onChange={() => isEdit && setProfileData(prev => ({ ...prev, available: !prev.available }))}
                            className="accent-green-600 w-5 h-5 cursor-pointer"
                            id="availableToggle"
                        />
                        <label htmlFor="availableToggle" className='select-none text-green-800 font-semibold cursor-pointer'>
                            Available for appointments
                        </label>
                    </div>

                    {/* Action Buttons */}
                    <div className='mt-8'>
                        {isEdit
                            ? <button
                                onClick={updateProfile}
                                className='px-6 py-2 bg-green-600 text-white font-semibold rounded-full shadow-md hover:bg-green-700 transition'
                              >
                                Save
                              </button>
                            : <button
                                onClick={() => setIsEdit(true)}
                                className='px-6 py-2 border-2 border-green-600 text-green-700 font-semibold rounded-full shadow-sm hover:bg-green-50 transition'
                              >
                                Edit
                              </button>
                        }
                    </div>

                </div>

            </div>
        </div>
    )
}

export default DoctorProfile
