import React, { createContext, useState,useEffect } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';

export const AdminContext = createContext();

const AdminContextProvider = (props) => {

  const [appointments, setAppointments] = useState([])
  const [aToken, setAToken] = useState(localStorage.getItem('aToken') || "");
  const [doctors, setDoctors] = useState([]);
  const [dashData, setDashData] = useState(false);


  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  console.log('Backend URL:', backendUrl); // Make sure this prints correctly

  const getAllDoctors = async () => {
    try {
      // Ensure backendUrl doesn't end with a trailing slash
      const endpoint = `${backendUrl.replace(/\/$/, '')}/api/admin/all-doctors`;

      const { data } = await axios.post(
        endpoint,
        {},
        {
          headers: { aToken }
        }
      );

      if (data.success) {
        setDoctors(data.doctors);
        console.log(data.doctors);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.error("Error fetching doctors:", error);
      toast.error(error.response?.data?.message || error.message || "Failed to fetch doctors");
    }
  };  

  useEffect(() => {
    if (aToken) {
      getAllDoctors();
    }
  }, [aToken]);

 const changeAvailability = async (docId) => {
  try {
    const url = `${backendUrl.replace(/\/$/, '')}/api/admin/change-availability`;
    const { data } = await axios.post(url, { docId }, {
      headers: { aToken }
    });

    if (data.success) {
      toast.success(data.message);
      getAllDoctors();
    } else {
      toast.error(data.message);
    }

  } catch (error) {
    toast.error(error.message);
  }
};
 // Getting all appointment data from Database using API
 const getAllAppointments = async () => {

  try {

      const { data } = await axios.get(backendUrl + '/api/admin/appointments', { headers: { aToken } })
      if (data.success) {
          setAppointments(data.appointments.reverse())
      } else {
          toast.error(data.message)
      }

  } catch (error) {
      toast.error(error.message)
      console.log(error)
  }

}

// Function to cancel appointment using API
const cancelAppointment = async (appointmentId) => {

  try {

      const { data } = await axios.post(backendUrl + '/api/admin/cancel-appointment', { appointmentId }, { headers: { aToken } })

      if (data.success) {
          toast.success(data.message)
          getAllAppointments()
      } else {
          toast.error(data.message)
      }

  } catch (error) {
      toast.error(error.message)
      console.log(error)
  }

}

// Getting Admin Dashboard data from Database using API
const getDashData = async () => {
  try {

      const { data } = await axios.get(backendUrl + '/api/admin/dashboard', { headers: { aToken } })

      if (data.success) {
          setDashData(data.dashData)
      } else {
          toast.error(data.message)
      }

  } catch (error) {
      console.log(error)
      toast.error(error.message)
  }

}



  const value = {
    aToken,
    setAToken,
    backendUrl,
    doctors,
    getAllDoctors,
    changeAvailability,appointments,setAppointments,
    getDashData,getAllAppointments,cancelAppointment,dashData
  };

  return (
    <AdminContext.Provider value={value}>
      {props.children}
    </AdminContext.Provider>
  );
};

export default AdminContextProvider;
