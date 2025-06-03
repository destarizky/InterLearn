import React from "react";

const ContactForm = () => {
  return (
    <section className="bg-white py-16 font-poppins mt-8">
      {/* Kontainer Utama */}
      <div className="container mx-auto px-6 lg:px-16">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-blue-900">
            Share Your Thoughts with Us!
          </h1>
          <p className="text-lg text-gray-600 mt-4">
            Have questions, feedback, or ideas? We're here to listen. Fill out the form below, and let's connect!
          </p>
        </div>

        {/* Form Section */}
        <div className="bg-white text-black p-8 rounded-lg shadow-lg w-full max-w-2xl mx-auto">
          <form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold mb-1">Name</label>
                <input
                  type="text"
                  placeholder="Your Full Name"
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1">Email</label>
                <input
                  type="email"
                  placeholder="Your Email Address"
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1">Phone</label>
                <input
                  type="text"
                  placeholder="Your Contact Number"
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1">Company</label>
                <input
                  type="text"
                  placeholder="Your University or Organization"
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
            </div>
            <div className="mt-4">
              <label className="block text-sm font-semibold mb-1">Message</label>
              <textarea
                placeholder="Type your message here..."
                className="w-full p-2 border border-gray-300 rounded h-32"
              ></textarea>
            </div>
            <div className="mt-4">
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 flex items-center"
              >
                Send message <i className="fas fa-arrow-right ml-2"></i>
              </button>
            </div>
          </form>
        </div>

        {/* Contact Information Section */}
        <div className="text-center mt-16">
          <h2 className="text-xl font-bold text-blue-900">
            Prefer to reach out directly?
          </h2>
          <p className="text-lg text-gray-600 mt-4">
            Get in touch with us via email or phone. We're happy to assist you with any inquiries.
          </p>
          <div className="flex flex-wrap justify-center mt-8 gap-4">
            {/* Email Card */}
            <div className="flex flex-col items-center border border-blue-300 rounded-lg px-8 py-4 min-w-[260px] max-w-xs shadow-sm text-left">
              <div className="flex items-center mb-2">
                <svg className="text-blue-900 mr-2" width="32" height="32" fill="none" viewBox="0 0 32 32">
                  <rect width="32" height="32" rx="8" fill="#F4F8FB" />
                  <path d="M8 11.5A2.5 2.5 0 0 1 10.5 9h11A2.5 2.5 0 0 1 24 11.5v9A2.5 2.5 0 0 1 21.5 23h-11A2.5 2.5 0 0 1 8 20.5v-9Z" stroke="#2953c7" strokeWidth="2"/>
                  <path d="M9.5 11.5 16 16.5l6.5-5" stroke="#2953c7" strokeWidth="2" strokeLinejoin="round"/>
                </svg>
                <span className="font-semibold text-gray-800 text-base">Email:</span>
              </div>
              <p className="text-gray-600 ml-0 text-base break-all">contact@pintura.com</p>
            </div>
            {/* Phone Card */}
            <div className="flex flex-col items-center border border-blue-300 rounded-lg px-8 py-4 min-w-[260px] max-w-xs shadow-sm text-left">
              <div className="flex items-center mb-2">
                <svg className="text-blue-900 mr-2" width="32" height="32" fill="none" viewBox="0 0 32 32">
                  <rect width="32" height="32" rx="8" fill="#F4F8FB" />
                  <path d="M20 21c-2.5 0-7-4.5-7-7a2 2 0 0 1 2-2h1l1 2-2 2c.5 1 2.5 3 3.5 3.5l2-2 2 1v1a2 2 0 0 1-2 2Z" stroke="#2953c7" strokeWidth="2" strokeLinejoin="round"/>
                </svg>
                <span className="font-semibold text-gray-800 text-base">Phone:</span>
              </div>
              <p className="text-gray-600 ml-0 text-base">(414) 687 - 5892</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;