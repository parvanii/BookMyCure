import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import axios from 'axios';
import { toast } from 'react-toastify';

const MyProfile = () => {
  const { userData, setUserData, token, backendUrl, loadUserProfileData } = useContext(AppContext);

  const [isEdit, setIsEdit] = useState(false);
  const [image, setImage] = useState(false);

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

  const updateUserProfileData = async () => {
    try {
      const formData = new FormData();
      formData.append('name', userData.name);
      formData.append('phone', userData.phone);
      formData.append('address', JSON.stringify(userData.address));
      formData.append('gender', userData.gender);
      formData.append('dob', userData.dob);
      if (image) formData.append('image', image);

      const { data } = await axios.post(
        `${backendUrl}/api/user/update-profile`,
        formData,
        { headers: { token } }
      );

      if (data.success) {
        toast.success(data.message);
        await loadUserProfileData();
        setIsEdit(false);
        setImage(false);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.error(error);
      toast.error(error.message);
    }
  };

  return userData && (
    <div className="bg-white min-h-screen px-6 py-12 font-outfit">
      <div className="max-w-3xl mx-auto border rounded-xl p-8 shadow">
        <div className="text-center">
          <label htmlFor="image" className="cursor-pointer inline-block">
            <div className="relative w-28 h-28 mx-auto mb-4">
              <img
                src={image ? URL.createObjectURL(image) : userData.image || '/images/profile_pic.png'}
                alt="User"
                className="w-28 h-28 rounded-full border-4 border-[#6A994E] object-cover"
              />
              {isEdit && (
                <div className="absolute bottom-0 right-0 bg-white p-1 rounded-full shadow">
               
                </div>
              )}
            </div>
            <input type="file" id="image" hidden onChange={(e) => setImage(e.target.files[0])} />
          </label>

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
              <p>{userData.address.line1}, {userData.address.line2}</p>
            )}
          </div>

          <div>
            <label className="text-sm font-semibold block mb-1">Gender</label>
            {isEdit ? (
              <select
                value={userData.gender}
                onChange={(e) => handleChange('gender', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              >
                <option value="Not Selected">Not Selected</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            ) : (
              <p>{userData.gender}</p>
            )}
          </div>

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
              <p>{new Date(userData.dob).toLocaleDateString('en-IN', {
                day: 'numeric', month: 'long', year: 'numeric',
              })}</p>
            )}
          </div>
        </div>

        <div className="mt-10 flex justify-center gap-4">
          {isEdit ? (
            <>
              <button
                onClick={updateUserProfileData}
                className="bg-[#6A994E] text-white px-6 py-2 rounded-lg hover:bg-green-700"
              >
                Save Info
              </button>
              <button
                onClick={() => { setIsEdit(false); setImage(false); }}
                className="border border-gray-400 px-6 py-2 rounded-lg hover:bg-gray-100"
              >
                Cancel
              </button>
            </>
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