import React from 'react';

const Instructor = () => {
  return (
    <div className="max-w-5xl p-8 mx-auto">
      <h1 className="text-2xl font-bold text-blue-700 mb-4">Instruktur</h1>
      <div className="border border-blue-500 rounded-lg px-6 py-5 mb-8 flex items-center bg-white">
        {/* Use original image, not avatar/illustration */}
        <img
          src="https://randomuser.me/api/portraits/men/32.jpg"
          alt="Dr. Andi Prasetyo"
          className="w-20 h-20 object-cover rounded-lg mr-6 border border-gray-300"
        />
        <div className="flex-1">
          <h2 className="text-xl font-bold mb-1">Dr. Andi Prasetyo, Ph.D.</h2>
          <p className="text-gray-700 text-[15px] mb-2">
            Data Scientist and Lecturer at Universitas Indonesia with over 10 years of experience in data analytics and business intelligence.
          </p>
          <div className="flex items-center">
            <div className="flex text-yellow-500 text-lg">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star-half-alt"></i>
            </div>
            <span className="text-gray-600 ml-3 text-sm">
              (4.0/5) based on 1,200 reviews
            </span>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <h3 className="text-lg font-bold mb-2">Key Achievement</h3>
          <ul className="list-disc list-inside text-gray-800 leading-relaxed text-[15px]">
            <li>
              Authored 15+ Research Papers: Published in leading international journals, focusing on predictive analytics, big data solutions, and AI innovations.
            </li>
            <li>
              Industry Collaborations: Partnered with Fortune 500 companies to implement data-driven strategies that increased operational efficiency by 30% on average.
            </li>
            <li>
              Award-Winning Educator: Recognized as "Best Lecturer in Data Analytics" by Universitas Indonesia for three consecutive years (2021–2023).
            </li>
            <li>
              Conference Speaker: Regular speaker at global data science conferences, including the World Data Summit and AI Innovations Expo.
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-2">Notable Projects</h3>
          <ul className="list-disc list-inside text-gray-800 leading-relaxed text-[15px]">
            <li>
              Healthcare Predictive Modeling: Led a team in creating machine learning models to predict patient readmissions, reducing hospital costs by 25%.
            </li>
            <li>
              E-commerce Customer Segmentation: Developed algorithms for segmenting customer data, boosting targeted marketing ROI by 40%.
            </li>
            <li>
              Smart City Analytics: Designed a real-time traffic management system using big data analytics, implemented in Jakarta's smart city initiative.
            </li>
            <li>
              Financial Fraud Detection System: Built a predictive model to detect fraudulent transactions in banking systems, reducing financial fraud cases by 45%.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Instructor;