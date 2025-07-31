import React from 'react'

const MyProfile = () => {
  return (
    <div className="bg-white min-h-screen px-6 py-12 font-outfit">
    <div className="max-w-4xl mx-auto text-center">
      <img src="/images/user.png" alt="User" className="w-24 h-24 rounded-full mx-auto mb-4" />
      <h2 className="text-2xl font-bold mb-2">Edward Vincent</h2>

      <div className="mt-8 text-left space-y-4">
        <div>
          <h4 className="text-sm font-semibold text-gray-600">Email</h4>
          <p className="text-gray-800">richardjamesvv@gmail.com</p>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-gray-600">Phone</h4>
          <p className="text-gray-800">+91 123 456 7890</p>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-gray-600">Address</h4>
          <p className="text-gray-800">Delhi, India</p>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-gray-600">Gender</h4>
          <p className="text-gray-800">Male</p>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-gray-600">Birthday</h4>
          <p className="text-gray-800">20 July, 2004</p>
        </div>
      </div>

      <div className="mt-8 flex justify-center gap-4">
        <button className="border border-gray-400 text-gray-600 px-5 py-2 rounded-lg">Edit</button>
        <button className="bg-[#6A994E] text-white px-6 py-2 rounded-lg">Save Info</button>
      </div>
    </div>
  </div>
  )
}

export default MyProfile