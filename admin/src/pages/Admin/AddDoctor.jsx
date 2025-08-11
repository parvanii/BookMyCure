import React, { useContext } from 'react';
import { assets } from '../../assets/assets';
import { useState } from 'react';
import { AdminContext } from '../../context/AdminContext';
import { toast } from 'react-toastify';
import axios from 'axios'

const AddDoctor = () => {
  const [docImg, setDocImg] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [degree, setDegree] = useState('');
  const [speciality, setSpeciality] = useState('');
  const [address1, setAddress1] = useState('');
  const [address2, setAddress2] = useState('');
  const [experience, setExperience] = useState('');
  const [fees, setFees] = useState('');
  const [about, setAbout] = useState('');

  const { backendUrl, aToken } = useContext(AdminContext)
  const onSubmitHandler = async (event) => {
    event.preventDefault()

    try {

      if (!docImg) {
        return toast.error('Image not selected')
      }

      const formData = new FormData()
      formData.append('image', docImg)//same as multer
      formData.append('name', name)
      formData.append('email', email)
      formData.append('password', password)
      formData.append('experience', experience)
      formData.append('fees', fees)
      formData.append('about', about)
      formData.append('speciality', speciality)
      formData.append('degree', degree)
      formData.append('address', JSON.stringify({ line1: address1, line2: address2 }))

      formData.forEach((value, key) => {
        console.log(`${key}:${value}`);
      })

      const { data } = await axios.post(
        backendUrl + '/api/admin/add-doctor',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
            aToken: aToken,
          },
        }
      );
  
      console.log('API response:', data);
  
      if (data.success) {
        toast.success(data.message || 'Doctor added successfully!');
        setDocImg(false)
        setName('')
        setPassword('')
        setEmail('')
        setSpeciality('')
        setDegree('')
        setExperience('')
        setFees('')
        setAddress1('')
        setAddress2('')
        setAbout('')
      } else {
        toast.error(data.message || 'Something went wrong.');
        console.log(error)
      }
  
    } catch (error) {
      console.error(error);
      toast.error('Server error or network issue.');
    }
  };
  return (
    <div className="w-full min-h-screen bg-[#f7f9fb] px-4 py-8 flex justify-center">
      <div className="bg-white w-full max-w-5xl rounded-xl shadow-md p-8">
        <h2 className="text-2xl font-semibold text-[#333] mb-6">Add Doctor</h2>

        <div className="flex items-center gap-4 mb-8">
          <label
            htmlFor="doc-img"
            className="w-20 h-20 bg-gray-200 rounded-full overflow-hidden flex items-center justify-center cursor-pointer hover:bg-gray-300 transition"
          >
            <img
              src={docImg ? URL.createObjectURL(docImg) : assets.upload_area}
              alt="Upload"
              className="w-full h-full object-cover"
            />
            <input onChange={(e) => setDocImg(e.target.files[0])} type="file" id="doc-img" hidden required />
          </label>
          <p className="text-gray-600 text-sm">
            Upload doctor picture <span className="text-red-500">*</span>
          </p>
        </div>

        <form onSubmit={onSubmitHandler} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <label className="block text-sm text-gray-700 mb-1">Doctor Name <span className="text-red-500">*</span></label>
            <input
              onChange={(e) => setName(e.target.value)} value={name}
              type="text"
              placeholder="Name"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#6A994E]"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-700 mb-1">Speciality <span className="text-red-500">*</span></label>
            <select onChange={(e) => setSpeciality(e.target.value)} value={speciality}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#6A994E]"
            >
              <option value="">Select speciality</option>
              <option>General physician</option>
              <option>Gynecologist</option>
              <option>Cardiologist</option>
              <option>Pediatrician</option>
              <option>Veterinary</option>
              <option>Oncologist</option>
              <option>Radiologist</option>
              <option>Orthopedic</option>
            </select>
          </div>

          <div>
            <label className="block text-sm text-gray-700 mb-1">Doctor Email <span className="text-red-500">*</span></label>
            <input
              onChange={(e) => setEmail(e.target.value)} value={email}
              type="email"
              placeholder="Email"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#6A994E]"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-700 mb-1">Education <span className="text-red-500">*</span></label>
            <input
              onChange={(e) => setDegree(e.target.value)} value={degree}
              type="text"
              placeholder="Education"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#6A994E]"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-700 mb-1">Doctor Password <span className="text-red-500">*</span></label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type="password"
              placeholder="Password"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#6A994E]"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-700 mb-1">Address <span className="text-red-500">*</span></label>
            <input
              onChange={(e) => setAddress1(e.target.value)} value={address1}
              type="text"
              placeholder="Address 1"
              required
              className="w-full px-4 py-2 mb-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#6A994E]"
            />
            <input
              onChange={(e) => setAddress2(e.target.value)} value={address2}

              type="text"
              placeholder="Address 2"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#6A994E]"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-700 mb-1">Experience <span className="text-red-500">*</span></label>
            <select onChange={(e) => setExperience(e.target.value)} value={experience}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#6A994E]"
            >
              <option value="">Select experience</option>
              {Array.from({ length: 10 }, (_, i) => (
                <option key={i + 1}>{i + 1} year{(i + 1) > 1 ? 's' : ''}</option>
              ))}
              <option>10+ years</option>
            </select>
          </div>

          <div>
            <label className="block text-sm text-gray-700 mb-1">Fees <span className="text-red-500">*</span></label>
            <input onChange={(e) => setFees(e.target.value)} value={fees}
              type="number"
              placeholder="Your fees"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#6A994E]"
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm text-gray-700 mb-1">About Me <span className="text-red-500">*</span></label>
            <textarea
              onChange={(e) => setAbout(e.target.value)} value={about}
              placeholder="Write about yourself"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md h-28 resize-none focus:outline-none focus:ring-2 focus:ring-[#6A994E]"
            ></textarea>
          </div>

          <div className="md:col-span-2 flex justify-end pt-4">
            <button onSubmit={onSubmitHandler}
              type="submit"
              className="bg-[#6A994E] text-white font-medium px-6 py-2 rounded-full hover:bg-[#5a8544] transition"
            >
              Add Doctor
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddDoctor;
