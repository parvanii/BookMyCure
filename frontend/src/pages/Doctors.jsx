import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const Doctors = () => {
  const { speciality } = useParams();
  const { doctors } = useContext(AppContext);
  const navigate = useNavigate();

  const [filterDoc, setFilterDoc] = useState([]);
  const [selectedSpeciality, setSelectedSpeciality] = useState('');

  // Prepare list of specialities
  
  const allSpecialities = [...new Set(doctors.map((doc) => doc.speciality))];

  // Sync selectedSpeciality with URL param
  useEffect(() => {
    if (speciality) {
      const decoded = decodeURIComponent(speciality).replace(/-/g, ' ');
      setSelectedSpeciality(decoded);
    }
  }, [speciality]);

  // Filter doctors when speciality or doctors change
  useEffect(() => {
    if (!selectedSpeciality) {
      setFilterDoc(doctors);
    } else {
      const filtered = doctors.filter(
        (doc) => doc.speciality.toLowerCase() === selectedSpeciality.toLowerCase()
      );
      setFilterDoc(filtered);
    }
  }, [selectedSpeciality, doctors]);

  return (
    <div className="flex flex-col lg:flex-row px-6 py-10 gap-10 bg-white min-h-screen">
      {/* Sidebar Speciality Filter */}
      <aside className="w-full lg:w-1/5">
        <h3 className="text-xl font-semibold mb-4 text-[#6A994E]">Browse by Speciality</h3>
        <div className="flex flex-wrap lg:flex-col gap-3">
          {allSpecialities.map((spec, index) => (
            <p
              key={index}
              onClick={() => setSelectedSpeciality(spec)}
              className={`px-4 py-2 rounded-md border text-center cursor-pointer transition text-sm shadow-sm hover:shadow-md ${
                selectedSpeciality === spec
                  ? 'bg-[#6A994E] text-white border-[#6A994E]'
                  : 'text-gray-700 border-gray-300 hover:bg-gray-100'
              }`}
            >
              {spec}
            </p>
          ))}
          <button
            onClick={() => setSelectedSpeciality('')}
            className="mt-4 px-4 py-2 text-sm text-[#6A994E] border border-[#6A994E] rounded-md hover:bg-[#6A994E]/10 transition duration-300 shadow-sm hover:shadow-md"
          >
            ✖ Clear Filter
          </button>
        </div>
      </aside>

      {/* Doctor Cards Grid */}
      <main className="w-full lg:w-4/5">
        <h2 className="text-3xl font-semibold text-[#6A994E] mb-4">Doctors</h2>
        <p className="text-gray-600 mb-6">Browse doctors by specialisation</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filterDoc.length > 0 ? (
            filterDoc.map((item) => (
              <div
                key={item._id}
                onClick={() => navigate(`/appointment/${item._id}`)}
                className="border border-blue-200 rounded-xl cursor-pointer hover:-translate-y-2 transition-all duration-300 bg-white shadow-md"
              >
                <img
                  className="w-full h-60 object-cover bg-blue-50 rounded-t-xl"
                  src={item.image}
                  alt={item.name}
                />
                <div className="p-4">
                  <div className="flex items-center gap-2 text-sm text-green-500 mb-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full inline-block"></span>
                    <p>Available</p>
                  </div>
                  <p className="text-gray-900 text-lg font-medium">{item.name}</p>
                  <p className="text-gray-600 text-sm">{item.speciality}</p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500 col-span-full text-center">
              No doctors found for this speciality.
            </p>
          )}
        </div>
      </main>
    </div>
  );
};

export default Doctors;
