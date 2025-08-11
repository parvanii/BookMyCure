import React, { useContext } from 'react';
import { AdminContext } from '../context/AdminContext';
import { DoctorContext } from '../context/DoctorContext';
import { NavLink } from 'react-router-dom';
import { assets } from '../assets/assets.js';

const Sidebar = () => {
  const { aToken } = useContext(AdminContext);
  const { dToken } = useContext(DoctorContext);

  const navClasses = ({ isActive }) =>
    `flex items-center gap-3 px-4 py-2 rounded-lg transition-all duration-200 text-sm font-medium 
     ${isActive ? 'bg-[#6A994E] text-white' : 'text-gray-700 hover:bg-gray-100'}`;

  return (
    <div className="w-[220px] border-r min-h-screen bg-white pt-6 px-2 shadow-sm">
      {aToken && (
        <ul className="space-y-1">
          <li>
            <NavLink to="/admin-dashboard" className={navClasses}>
              <img src={assets.home_icon} alt="Dashboard" className="w-5 h-5" />
              <span>Dashboard</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/all-appointments" className={navClasses}>
              <img src={assets.appointment_icon} alt="Appointments" className="w-5 h-5" />
              <span>Appointments</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/add-doctor" className={navClasses}>
              <img src={assets.add_icon} alt="Add Doctor" className="w-5 h-5" />
              <span>Add Doctor</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/doctor-list" className={navClasses}>
              <img src={assets.people_icon} alt="Doctors List" className="w-5 h-5" />
              <span>Doctors List</span>
            </NavLink>
          </li>
        </ul>
      )}

      {dToken && (
        <ul className="space-y-1 mt-6">
          <li>
            <NavLink to="/doctor-dashboard" className={navClasses}>
              <img src={assets.home_icon} alt="Dashboard" className="w-5 h-5" />
              <span>Dashboard</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/doctor-appointments" className={navClasses}>
              <img src={assets.appointment_icon} alt="Appointments" className="w-5 h-5" />
              <span>Appointments</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/doctor-profile" className={navClasses}>
              <img src={assets.people_icon} alt="Profile" className="w-5 h-5" />
              <span>Profile</span>
            </NavLink>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Sidebar;
