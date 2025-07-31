import React, { useState } from 'react';

const FAQ = () => {
  
  const [openIndex, setOpenIndex] = useState(null);

  
  const faqs = [
    {
      question: 'How do I book an appointment?',
      answer: 'You can easily book an appointment by browsing through our list of specialties, selecting a doctor, and choosing an available time slot that suits you. Our platform guides you through each step of the process.'
    },
    {
      question: 'Is online consultation available?',
      answer: 'Yes, many of our doctors offer online consultation services. Look for the "Online Consultation" badge on their profile, or filter your search results to find doctors who provide virtual appointments.'
    },
    {
      question: 'What payment methods are accepted?',
      answer: 'We accept various secure payment methods, including credit/debit cards, net banking, and popular digital wallets. All transactions are encrypted for your security.'
    },
    {
      question: 'Can I reschedule or cancel an appointment?',
      answer: 'Yes, you can reschedule or cancel your appointment directly from your user dashboard. Please refer to our cancellation policy for any applicable charges or notice periods.'
    },
    {
      question: 'How do I find a doctor for a specific condition?',
      answer: 'You can use the "Find by Speciality" section to narrow down your search, or use the search bar to look for doctors by name, specialty, or specific medical conditions. Each doctor\'s profile provides detailed information about their expertise.'
    },
  ];

  
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index); 
  };

  return (
    <div className="flex flex-col items-center py-16 px-4">
     
      <h2 className="text-[65px] mt-5 font-outfit font-medium text-[#6A994E] leading-none text-center">
        Frequently Asked Questions
      </h2>

      
      <p className="font-outfit text-lg text-gray-600 mt-4 mb-12 text-center max-w-2xl">
        Find answers to the most common questions about our services.
      </p>

     
      <div className="w-full max-w-3xl">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md mb-4 border border-gray-200 overflow-hidden"
          >
            
            <button
              className="flex justify-between items-center w-full p-6 text-left focus:outline-none
                         font-outfit text-xl font-medium text-gray-800 cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <span>{faq.question}</span>
              <span className="text-[#6A994E] text-3xl transition-transform duration-300">
                {openIndex === index ? '-' : '+'} 
              </span>
            </button>

            
            {openIndex === index && (
              <div className="p-6 pt-0 font-outfit text-gray-700 text-base leading-relaxed">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
