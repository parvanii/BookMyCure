import React, { useState } from 'react';

const MyProfile = () => {
  const [userData, setUserData] = useState({
    name: 'Dan Joe',
    email: 'xyz@gmail.com',
    phone: '+91 XXXXXXXXXX',
    address: {
      line1: 'Lorem ipsum dolor sit amet',
      line2: 'Lorem ipsum dolor sit amet',
    },
    gender: 'Male',
    dob: '2000-01-20',
  });

  const [isEdit, setIsEdit] = useState(false);

  const handleChange = (field, value) => {
    if (field.includes('address')) {
      const key = field.split('.')[1];
      setUserData((prev) => ({
        ...prev,
        address: {
          ...prev.address,
          [key]: value,
        },
      }));
    } else {
      setUserData((prev) => ({
        ...prev,
        [field]: value,
      }));
    }
  };

  return (
    <div className="bg-white min-h-screen px-6 py-12 font-outfit">
      <div className="max-w-3xl mx-auto border rounded-xl p-8 shadow">
        <div className="text-center">
          <img
            src="/images/profile_pic.png"
            alt="User"
            className="w-28 h-28 rounded-full mx-auto mb-4 border-4 border-[#6A994E]"
          />

          {isEdit ? (
            <input
              type="text"
              value={userData.name}
              onChange={(e) => handleChange('name', e.target.value)}
              className="text-xl font-semibold text-center w-full px-4 py-2 border border-gray-300 rounded-md mb-2"
            />
          ) : (
            <h2 className="text-2xl font-bold mb-2 text-[#333]">{userData.name}</h2>
          )}
        </div>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Email */}
          <div>
            <label className="text-sm font-semibold block mb-1">Email</label>
            {isEdit ? (
              <input
                type="email"
                value={userData.email}
                onChange={(e) => handleChange('email', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            ) : (
              <p>{userData.email}</p>
            )}
          </div>

          {/* Phone */}
          <div>
            <label className="text-sm font-semibold block mb-1">Phone</label>
            {isEdit ? (
              <input
                type="tel"
                value={userData.phone}
                onChange={(e) => handleChange('phone', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            ) : (
              <p>{userData.phone}</p>
            )}
          </div>

          {/* Address */}
          <div className="sm:col-span-2">
            <label className="text-sm font-semibold block mb-1">Address</label>
            {isEdit ? (
              <>
                <input
                  type="text"
                  value={userData.address.line1}
                  onChange={(e) => handleChange('address.line1', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md mb-2"
                />
                <input
                  type="text"
                  value={userData.address.line2}
                  onChange={(e) => handleChange('address.line2', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                />
              </>
            ) : (
              <p>
                {userData.address.line1}, {userData.address.line2}
              </p>
            )}
          </div>

          {/* Gender */}
          <div>
            <label className="text-sm font-semibold block mb-1">Gender</label>
            {isEdit ? (
              <select
                value={userData.gender}
                onChange={(e) => handleChange('gender', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              >
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
            ) : (
              <p>{userData.gender}</p>
            )}
          </div>

          {/* Birthday */}
          <div>
            <label className="text-sm font-semibold block mb-1">Birthday</label>
            {isEdit ? (
              <input
                type="date"
                value={userData.dob}
                onChange={(e) => handleChange('dob', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            ) : (
              <p>
                {new Date(userData.dob).toLocaleDateString('en-IN', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric',
                })}
              </p>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-10 flex justify-center gap-4">
          {isEdit ? (
            <button
              onClick={() => setIsEdit(false)}
              className="bg-[#6A994E] text-white px-6 py-2 rounded-lg hover:bg-green-700"
            >
              Save Info
            </button>
          ) : (
            <button
              onClick={() => setIsEdit(true)}
              className="border border-[#6A994E] text-[#6A994E] px-6 py-2 rounded-lg hover:bg-green-50"
            >
              Edit
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
