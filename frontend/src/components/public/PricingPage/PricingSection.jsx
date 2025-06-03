import { useState } from 'react';

const PricingSection = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  // Prices as in your earlier code
  const basicPrice = isAnnual ? { old: '5', new: '0', suffix: '/year' } : { old: '1', new: '0', suffix: '/month' };
  const premiumPrice = isAnnual
    ? { old: '20', new: '9', suffix: '/year' }
    : { old: '8', new: '2', suffix: '/month' };

  return (
    <div className="text-center py-10 px-2 bg-white min-h-screen font-poppins">
      <h1 className="text-3xl md:text-4xl font-bold text-blue-800 mb-2" style={{letterSpacing:"-1px"}}>
        Choose Your Plan and Start Learning Your Way
      </h1>
      <div className="text-[15px] text-[#282828] mb-2">
        <div>Explore affordable plans tailored to support your learning and career growth.</div>
        <div>Choose the best option for your needs and unlock a world of knowledge.</div>
      </div>

      {/* Toggle Monthly/Annually */}
      <div className="flex justify-center items-center mb-8 mt-6 gap-2">
        <span className={`text-sm font-medium ${!isAnnual ? "text-blue-700" : "text-gray-500"}`}>Monthly</span>
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            className="sr-only peer"
            checked={isAnnual}
            onChange={() => setIsAnnual(!isAnnual)}
          />
          <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 peer-checked:bg-blue-600 transition-colors duration-200">
            <div className={`absolute left-[2px] top-0.5 bg-white border border-gray-300 rounded-full h-5 w-5 transition-all duration-200 ${isAnnual ? 'translate-x-full border-white' : ''}`}></div>
          </div>
        </label>
        <span className={`text-sm font-medium ${isAnnual ? "text-blue-700" : "text-gray-500"}`}>Annually</span>
      </div>

      {/* Pricing Cards */}
      <div className="flex flex-col md:flex-row justify-center items-start md:items-stretch gap-6 md:gap-10 w-full max-w-5xl mx-auto">
        {/* Basic Plan */}
        <div className="relative border border-blue-300 rounded-xl bg-white p-8 w-full md:w-[380px] flex flex-col text-left shadow-sm hover:shadow-md transition">
          <h2 className="font-semibold text-[16px] text-blue-800 mb-1">Basic plan</h2>
          <p className="mb-1 flex items-center">
            <span className="text-3xl font-bold text-blue-700">
              <span className="line-through text-gray-400 mr-1">{basicPrice.old}</span>
              {basicPrice.new} USD
            </span>
            <span className="text-lg text-[#343434] font-semibold ml-1">{basicPrice.suffix}</span>
          </p>
          <p className="text-gray-500 text-[14px] mb-4 mt-1">Ideal for individual learners seeking essential resources.</p>
          <hr className="mb-4 border-blue-100" />
          <div>
            <div className="font-semibold text-[15px] text-blue-800 mb-3">What's included?</div>
            <ul className="space-y-2 text-[15px]">
              <li className="flex items-start">
                <i className="fas fa-check-circle text-blue-700 mr-2 mt-0.5 text-[17px]" />
                <span>Enroll in Free Courses</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-check-circle text-blue-700 mr-2 mt-0.5 text-[17px]" />
                <span>Access to Discussion Forums</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-check-circle text-blue-700 mr-2 mt-0.5 text-[17px]" />
                <span>Completion Certificates for Free Courses</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-check-circle text-blue-700 mr-2 mt-0.5 text-[17px]" />
                <span>Limited Monthly Credits (5 Credits/Month)</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-check-circle text-blue-700 mr-2 mt-0.5 text-[17px]" />
                <span>Normal support</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Premium Plan */}
        <div className="relative border border-blue-700 rounded-xl bg-blue-700 text-white p-8 w-full md:w-[380px] flex flex-col text-left shadow-md hover:shadow-lg transition">
          {/* Popular badge */}
          <span className="absolute top-4 right-4 bg-white text-blue-700 text-[14px] font-semibold rounded px-3 py-1 shadow-sm border border-blue-100">
            Popular
          </span>
          <h2 className="font-semibold text-[16px] text-white mb-1">Premium plan</h2>
          <p className="mb-1 flex items-center">
            <span className="text-3xl font-bold">
              <span className="line-through text-blue-200 mr-1">{premiumPrice.old}</span>
              {premiumPrice.new} USD
            </span>
            <span className="text-lg font-semibold ml-1">{premiumPrice.suffix}</span>
          </p>
          <p className="text-blue-100 text-[14px] mb-4 mt-1">
            For serious learners focused on career development with extra support.
          </p>
          <hr className="mb-4 border-blue-300" />
          <div>
            <div className="font-semibold text-[15px] mb-3 text-white">What's included?</div>
            <ul className="space-y-2 text-[15px]">
              <li className="flex items-start">
                <i className="fas fa-check-circle text-white mr-2 mt-0.5 text-[17px]" />
                <span>Unlimited Course Enrollments (Free & Premium Courses)</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-check-circle text-white mr-2 mt-0.5 text-[17px]" />
                <span>Increased Monthly Credits (50 Credits/Month)</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-check-circle text-white mr-2 mt-0.5 text-[17px]" />
                <span>Exclusive Access to Career Development Content</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-check-circle text-white mr-2 mt-0.5 text-[17px]" />
                <span>Early Access to New Courses and Features</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-check-circle text-white mr-2 mt-0.5 text-[17px]" />
                <span>Personalized Learning Recommendations</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-check-circle text-white mr-2 mt-0.5 text-[17px]" />
                <span>Priority Support for Queries</span>
              </li>
            </ul>
          </div>
          <button
            className="mt-7 bg-white text-blue-700 py-2 px-4 rounded-lg w-full font-semibold transition hover:bg-blue-50 hover:text-blue-800"
            tabIndex={-1}
          >
            Upgrade to Premium plan <span aria-hidden>→</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PricingSection;