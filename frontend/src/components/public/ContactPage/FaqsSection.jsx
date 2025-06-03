import React, { useState } from 'react';

// FAQItem with styles & click effect to match the image
const FAQItem = ({ question, answer, isOpen, onClick }) => (
  <div
    className={`rounded-lg mb-4 shadow transition-all duration-200 ${
      isOpen
        ? 'bg-[#2953c7] text-white'
        : 'bg-white hover:bg-gray-100 text-[#11143A]'
    }`}
    style={{
      border: 'none',
    }}
  >
    <button
      type="button"
      onClick={onClick}
      className={`flex justify-between items-center w-full px-6 py-4 focus:outline-none transition-colors duration-200 ${
        isOpen ? 'font-bold text-white' : 'font-medium text-[#11143A]'
      }`}
      tabIndex={0}
    >
      <span className="text-base md:text-lg text-left">{question}</span>
      <span
        className={`transition-transform duration-200 flex items-center justify-center`}
      >
        {isOpen ? (
          // X icon
          <svg width="18" height="18" fill="none">
            <path d="M4 4l10 10M14 4L4 14" stroke="white" strokeWidth="2" strokeLinecap="round" />
          </svg>
        ) : (
          // Plus icon
          <svg width="18" height="18" fill="none">
            <path d="M9 4v10M4 9h10" stroke="#2953c7" strokeWidth="2" strokeLinecap="round" />
          </svg>
        )}
      </span>
    </button>
    {isOpen && answer && (
      <div className="px-6 pb-4">
        <p className="text-white/90 text-sm mt-2">{answer}</p>
      </div>
    )}
  </div>
);

const FaqsSection = () => {
  const [openIndex, setOpenIndex] = useState(1); // Open the second item by default (as in image)

  const faqs = [
    {
      question: 'How long does it take to complete a course on PINTURA?',
      answer: '',
    },
    {
      question: 'What factors determine the course cost on PINTURA?',
      answer:
        'The cost of PINTURA courses is mostly free. Only specific features, like downloadable resume templates, require a paid subscription.',
    },
    {
      question: 'Do you provide career support services?',
      answer: '',
    },
    {
      question: 'What is the process to enroll in a PINTURA course?',
      answer: '',
    },
  ];

  const handleClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#eaf0fb] py-16 font-poppins min-h-screen">
      <div className="container mx-auto px-6 lg:px-16">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-[#2953c7] mb-3">
          Frequently Asked Questions
        </h1>
        <p className="text-center text-gray-600 mb-10">
          Need quick answers? Here are some common questions to help guide you.
        </p>
        <div className="max-w-2xl mx-auto">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => handleClick(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqsSection;