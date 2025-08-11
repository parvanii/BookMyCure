import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import axios from 'axios';
import { toast } from 'react-toastify';

import razorpay_logo from '../assets/razorpay_logo.png';

const MyAppointments = () => {
  const { backendUrl, token, getDoctorsData } = useContext(AppContext);
  const navigate = useNavigate();

  const [appointments, setAppointments] = useState([]);
  const [payment, setPayment] = useState('');

  const months = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
  ];

  const slotDateFormat = (slotDate) => {
    const dateArray = slotDate.split('_');
    return `${dateArray[0]} ${months[Number(dateArray[1])]} ${dateArray[2]}`;
  };

  const getUserAppointments = async () => {
    try {
      const { data } = await axios.get(
        `${backendUrl}/api/user/appointments`,
        { headers: { token } }
      );
      setAppointments(data.appointments.reverse());
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const cancelAppointment = async (appointmentId) => {
    try {
      const { data } = await axios.post(
        `${backendUrl}/api/user/cancel-appointments`,
        { appointmentId },
        { headers: { token } }
      );

      if (data.success) {
        toast.success(data.message);
        getUserAppointments();
        getDoctorsData();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const initPay = (order) => {
    const options = {
      key: import.meta.env.VITE_RAZORPAY_KEY_ID,
      amount: order.amount,
      currency: order.currency,
      name: 'Appointment Payment',
      description: 'Appointment Payment',
      order_id: order.id,
      receipt: order.receipt,
      handler: async (response) => {
        try {
          const { data } = await axios.post(
            `${backendUrl}/api/user/verifyRazorpay`,
            response,
            { headers: { token } }
          );
          if (data.success) {
            navigate('/my-appointments');
            getUserAppointments();
          }
        } catch (error) {
          console.log(error);
          toast.error(error.message);
        }
      }
    };
    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  const appointmentRazorpay = async (appointmentId) => {
    try {
      const { data } = await axios.post(
        `${backendUrl}/api/user/payment-razorpay`,
        { appointmentId },
        { headers: { token } }
      );
      if (data.success) {
        initPay(data.order);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (token) {
      getUserAppointments();
    }
  }, [token]);

  return (
    <div className="min-h-screen px-6 py-10 bg-white font-outfit">
      <h1 className="text-3xl font-semibold mb-8 text-center text-[#6A994E]">
        My Appointments
      </h1>

      <div className="space-y-6 max-w-4xl mx-auto">
        {appointments.map((item, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 flex flex-col md:flex-row items-center gap-6"
          >
            {/* Doctor Image */}
            <div className="w-32 h-32 flex-shrink-0">
              <img
                src={item.docData.image}
                alt={item.docData.name}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>

            {/* Doctor Info */}
            <div className="flex-1">
              <p className="text-xl font-semibold">{item.docData?.name}</p>
              <p className="text-gray-600 mb-1">{item.docData?.speciality}</p>

              <p className="text-sm font-medium mt-2 text-gray-700">Address:</p>
              <p className="text-sm text-gray-600">
                {item.docData?.address?.line1 || 'No address available'}
              </p>
              <p className="text-sm text-gray-600">
                {item.docData?.address?.line2 || ''}
              </p>

              <p className="mt-2 text-sm text-gray-700">
                <span className="font-medium">Date & Time:</span>{' '}
                {slotDateFormat(item.slotDate)} | {item.slotTime}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col gap-2 mt-4 md:mt-0 md:ml-4 text-sm text-center">
              {!item.cancelled && !item.payment && !item.isCompleted && payment !== item._id && (
                <button
                  onClick={() => setPayment(item._id)}
                  className="bg-[#6A994E] hover:bg-[#5C8644] text-white px-4 py-2 rounded-lg"
                >
                  Pay Online
                </button>
              )}
              {!item.cancelled && !item.payment && !item.isCompleted && payment === item._id && (
                <button
                  onClick={() => appointmentRazorpay(item._id)}
                  className="border px-4 py-2 rounded-lg hover:bg-gray-100 flex items-center justify-center"
                >
                  <img className="max-w-20 max-h-5" src={razorpay_logo} alt="Razorpay" />
                </button>
              )}
              {!item.cancelled && item.payment && !item.isCompleted && (
                <button className="bg-green-100 text-green-700 px-4 py-2 rounded-lg">
                  Paid
                </button>
              )}
              {item.isCompleted && (
                <button className="border border-green-500 text-green-500 px-4 py-2 rounded-lg">
                  Completed
                </button>
              )}
              {!item.cancelled && !item.isCompleted && (
                <button
                  onClick={() => cancelAppointment(item._id)}
                  className="bg-red-100 text-red-600 hover:bg-red-200 px-4 py-2 rounded-lg"
                >
                  Cancel Appointment
                </button>
              )}
              {item.cancelled && !item.isCompleted && (
                <button className="border border-red-500 text-red-500 px-4 py-2 rounded-lg">
                  Appointment Cancelled
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyAppointments;
