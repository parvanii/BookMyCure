import React from 'react';
import { Link } from 'react-router-dom';

const Speciality = () => {
  const specialties = [
    { name: 'Gynecologist', image: '/images/gynaecologist.png' },
    { name: 'Pediatrician', image: '/images/pediatricians.png' },
    { name: 'Cardiologist', image: '/images/cardio.png' },
    { name: 'Veterinary', image: '/images/vet.png' },
    { name: 'Oncologist', image: '/images/oncologist.png' },
    { name: 'General Physician', image: '/images/gp.png' },
    { name: 'Radiologist', image: '/images/radiologist.png' },
    { name: 'Orthopedic', image: '/images/ortho.png' },
  ];

  return (
    <div className="flex flex-col items-center py-16">
      <h2 className="text-[65px] mt-5 font-outfit font-medium text-[#6A994E] leading-none">
        Find by Speciality
      </h2>

      <p className="font-outfit text-lg text-gray-600 mt-4 mb-12 text-center max-w-2xl">
        Simply browse through our comprehensive <br />
        list of top doctors and book your appointment effortlessly.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {specialties.map((speciality, index) => (
          <Link
            key={index}
            to={`/doctors/${encodeURIComponent(
              speciality.name.toLowerCase().replace(/\s+/g, '-')
            )}`}
            className="w-[331px] h-[304px] bg-white rounded-lg shadow-md flex flex-col items-center justify-center p-4
                       border border-gray-200 transition-all duration-300 hover:shadow-lg hover:scale-105 cursor-pointer"
          >
            <div className="w-full h-4/5 flex items-center justify-center">
              <img
                src={speciality.image}
                alt={speciality.name}
                className="max-w-full max-h-full object-contain"
              />
            </div>
            <h3 className="font-outfit text-lg text-gray-800 mt-4">
              {speciality.name}
            </h3>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Speciality;
