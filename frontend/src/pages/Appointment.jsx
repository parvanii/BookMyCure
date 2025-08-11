import React, { useEffect, useState, useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { toast } from 'react-toastify';
import axios from 'axios';

const Appointment = () => {
  const { docId } = useParams();
  const { doctors, backendUrl, token, getDoctorsData } = useContext(AppContext);
  const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  const navigate = useNavigate();
  const [docInfo, setDocInfo] = useState(null);
  const [docSlots, setDocSlots] = useState([]);
  const [slotIndex, setSlotIndex] = useState(0);
  const [slotTime, setSlotTime] = useState('');

  const fetchDocInfo = () => {
    const doc = doctors.find((doc) => doc._id === docId);
    setDocInfo(doc);
  };

  const getAvailableSlots = () => {
    setDocSlots([]);
    const today = new Date();

    for (let i = 0; i < 7; i++) {
      const dayDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + i);

      let currentDate = new Date(dayDate);
      let endTime = new Date(dayDate);
      endTime.setHours(21, 0, 0, 0);

      if (i === 0) {
        // If today, start from the next half-hour slot
        if (currentDate.getHours() < 10) {
          currentDate.setHours(10, 0, 0, 0);
        } else {
          currentDate.setMinutes(currentDate.getMinutes() > 30 ? 0 : 30);
          currentDate.setHours(currentDate.getHours() + 1);
        }
      } else {
        currentDate.setHours(10, 0, 0, 0);
      }

      let timeSlots = [];

      while (currentDate < endTime) {
        const formattedTime = currentDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

        const day = dayDate.getDate();
        const month = dayDate.getMonth() + 1;
        const year = dayDate.getFullYear();
        const slotDate = `${day}_${month}_${year}`;

        const isSlotAvailable = !(docInfo.slots_booked?.[slotDate]?.includes(formattedTime));

        if (isSlotAvailable) {
          timeSlots.push({
            time: formattedTime,
            dateTime: new Date(currentDate)
          });
        }

        currentDate.setMinutes(currentDate.getMinutes() + 30);
      }

      setDocSlots((prev) => [
        ...prev,
        { date: dayDate, slots: timeSlots }
      ]);
    }
  };

  const bookAppointment = async () => {
    if (!token) {
      toast.warning('Login to book appointment');
      return navigate('/login');
    }

    const date = docSlots[slotIndex]?.date;
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    const slotDate = `${day}_${month}_${year}`;

    try {
      const { data } = await axios.post(
        `${backendUrl}/api/user/book-appointment`,
        { docId, slotDate, slotTime },
        { headers: { token } }
      );

      if (data.success) {
        toast.success(data.message);
        getDoctorsData();
        navigate('/my-appointments');
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchDocInfo();
  }, [doctors, docId]);

  useEffect(() => {
    if (docInfo) getAvailableSlots();
  }, [docInfo]);

  if (!docInfo) {
    return (
      <div className="text-center py-10 text-gray-500 font-medium">
        Loading doctor details...
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen px-6 py-12 font-outfit">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10">
        {/* Left: Image */}
        <div className="md:w-1/3 flex justify-center md:justify-start">
          <div className="w-full h-80 rounded-xl overflow-hidden shadow-lg">
            <img
              src={docInfo.image}
              alt={docInfo.name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right: Info */}
        <div className="md:w-2/3 space-y-8">
          <div className="h-80 border border-gray-200 rounded-2xl p-6 bg-white shadow-md space-y-4 overflow-auto">
            <h2 className="text-3xl font-semibold text-gray-800">{docInfo.name}</h2>
            <p className="text-base text-gray-600">
              <span className="font-medium">{docInfo.degree}</span> · {docInfo.speciality}
            </p>
            <p className="text-sm text-gray-500">
              <span className="font-semibold">Experience:</span> {docInfo.experience}
            </p>

            <div className="pt-4 border-t border-gray-100">
              <h3 className="text-lg font-semibold text-[#6A994E] mb-1">About</h3>
              <p className="text-gray-700 text-sm leading-relaxed">{docInfo.about}</p>
            </div>

            <div className="pt-3">
              <p className="text-sm text-gray-700 mb-1 font-medium">Appointment Fee</p>
              <div className="inline-block bg-[#f0f7f3] text-[#6A994E] px-4 py-2 rounded-full text-sm font-semibold shadow">
                ₹{docInfo.fees}
              </div>
            </div>
          </div>

          {/* Booking UI */}
          <div>
            <h3 className="text-xl font-semibold text-[#6A994E] mb-4">Booking Slots</h3>

            {/* Days of the week */}
            <div className="flex gap-3 overflow-x-auto pb-3">
              {docSlots.map((day, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setSlotIndex(index);
                    setSlotTime('');
                  }}
                  className={`w-16 h-16 flex flex-col justify-center items-center text-sm rounded-xl border transition 
                    ${index === slotIndex
                      ? 'bg-[#6A994E] text-white border-[#6A994E]'
                      : 'bg-white text-gray-800 border-gray-300 hover:bg-gray-100'
                    }`}
                >
                  <span className="font-medium">{daysOfWeek[day.date.getDay()]}</span>
                  <span className="text-base font-semibold">{day.date.getDate()}</span>
                </button>
              ))}
            </div>

            {/* Time Slots */}
            <div className="flex flex-wrap gap-3 mt-4">
              {docSlots[slotIndex]?.slots.map((slot, idx) => (
                <button
                  key={idx}
                  onClick={() => setSlotTime(slot.time)}
                  className={`px-4 py-2 rounded-full border text-sm transition ${
                    slot.time === slotTime
                      ? 'bg-[#6A994E] text-white border-[#6A994E]'
                      : 'bg-[#f0f7f3] text-[#6A994E] border-transparent hover:bg-[#6A994E] hover:text-white'
                  }`}
                >
                  {slot.time}
                </button>
              ))}
            </div>

            <div className="mt-6">
              <button
                onClick={bookAppointment}
                disabled={!slotTime}
                className={`w-full sm:w-auto px-6 py-3 rounded-full font-semibold transition ${
                  slotTime
                    ? 'bg-[#6A994E] text-white hover:bg-[#5e8f45]'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                {slotTime ? `Book Appointment for ${slotTime}` : 'Select a time slot'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appointment;
