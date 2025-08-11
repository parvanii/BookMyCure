

import doc1 from '../assets/doc1.png';
import doc2 from '../assets/doc2.png';
import doc3 from '../assets/doc3.png';
import doc4 from '../assets/doc4.png';
import doc5 from '../assets/doc5.png';
import doc6 from '../assets/doc6.png';
import doc7 from '../assets/doc7.png';
import doc8 from '../assets/doc8.png';



export const specialityData = [
  {
    speciality: 'General Physician',
    image: '/images/gp.png',
  },
  {
    speciality: 'Gynecologist',
    image: '/images/gynaecologist.png',
  },
  {
    speciality: 'Pediatrician',
    image: '/images/pediatricians.png',
  },
  {
    speciality: 'Cardiologist',
    image: '/images/cardio.png',
  },
  {
    speciality: 'Veterinary',
    image: '/images/vet.png',
  },
  {
    speciality: 'Oncologist',
    image: '/images/oncologist.png',
  },
  {
    speciality: 'Radiologist',
    image: '/images/radiologist.png',
  },
  {
  speciality:'Orthopedic',
  image:'/images/orthopedic.png',
  },

];



export const doctors = [
  {
    _id: 'doc1',
    name: 'Dr. Rohan Mehra',
    image: doc1,
    speciality: 'Veterinary',
    degree: 'BVSc & AH',
    experience: '5 Years',
    about: 'Experienced veterinarian passionate about animal welfare and preventive care.',
    fees: 45,
    address: {
      line1: 'Animal Care Avenue',
      line2: 'Sector 12, Delhi'
    }
  },
  {
    _id: 'doc2',
    name: 'Dr. Aisha Khan',
    image: doc2,
    speciality: 'Oncologist',
    degree: 'MD Oncology',
    experience: '6 Years',
    about: 'Dedicated oncologist focused on patient-centered cancer treatment and research.',
    fees: 80,
    address: {
      line1: 'Cancer Care Center',
      line2: 'Green Park, Delhi'
    }
  },
  {
    _id: 'doc3',
    name: '9',
    image: doc3,
    speciality: 'Cardiologist',
    degree: 'DM Cardiology',
    experience: '7 Years',
    about: 'Cardiologist skilled in heart health diagnostics and minimally invasive procedures.',
    fees: 90,
    address: {
      line1: 'Heart Beat Clinic',
      line2: 'Connaught Place, Delhi'
    }
  },
  {
    _id: 'doc4',
    name: 'Dr. Sara Iqbal',
    image: doc4,
    speciality: 'Pediatrician',
    degree: 'MD Pediatrics',
    experience: '4 Years',
    about: 'Pediatrician committed to holistic and friendly child healthcare.',
    fees: 50,
    address: {
      line1: 'Children’s Wellness Centre',
      line2: 'Lajpat Nagar, Delhi'
    }
  },
  {
    _id: 'doc5',
    name: 'Dr. Aryan Gupta',
    image: doc5,
    speciality: 'General Physician',
    degree: 'MBBS',
    experience: '5 Years',
    about: 'General physician with experience in treating a wide range of adult illnesses.',
    fees: 40,
    address: {
      line1: 'City Health Clinic',
      line2: 'Rajouri Garden, Delhi'
    }
  },
  {
    _id: 'doc6',
    name: 'Dr. Neha Sharma',
    image: doc6,
    speciality: 'Radiologist',
    degree: 'MD Radiology',
    experience: '6 Years',
    about: 'Radiologist specializing in advanced imaging diagnostics and accuracy.',
    fees: 65,
    address: {
      line1: 'Diagnostic Imaging Hub',
      line2: 'Karol Bagh, Delhi'
    }
  },
  {
    _id: 'doc7',
    name: 'Dr. Revati Iyer',
    image: doc7,
    speciality: 'Gynecologist',
    degree: 'MS Obstetrics & Gynecology',
    experience: '8 Years',
    about: 'Compassionate gynecologist focused on women’s reproductive health and well-being.',
    fees: 70,
    address: {
      line1: 'Women’s Health Centre',
      line2: 'Saket, Delhi'
    }
  },
  {
    _id: 'doc8',
    name: 'Dr. Meenal Kapoor',
    image: doc8,
    speciality: 'Orthopedic',
    degree: 'MS Orthopedics',
    experience: '9 Years',
    about: 'Experienced orthopedic surgeon dedicated to treating joint, bone, and mobility issues in all age groups.',
    fees: 75,
    address: {
      line1: 'Joint & Spine Clinic',
      line2: 'Dwarka, Delhi'
    }
  }
];
