import React from 'react';

const EmailSection = () => {
  return (
    <section className="bg-white py-16 font-poppins">
      <div className="container mx-auto px-6 lg:px-16">
        <h1 className="text-3xl font-bold text-blue-900 text-center mb-8">
          Get in Touch with Our Team!
        </h1>
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 lg:gap-8">
          {/* Sales Card */}
          <div
            className="
              bg-white text-blue-800 p-6 rounded-lg shadow-lg w-full sm:w-80 border-2 border-blue-800 transition
              hover:bg-blue-800 hover:text-white hover:shadow-2xl hover:-translate-y-1 cursor-pointer
              focus:bg-blue-800 focus:text-white focus:shadow-2xl focus:-translate-y-1
              outline-none duration-200
              flex flex-col items-center text-center
            "
            tabIndex={0}
          >
            <div className="text-4xl mb-4 flex justify-center">
              <i className="fas fa-dollar-sign"></i>
            </div>
            <h2 className="text-xl font-semibold mb-2">Sales</h2>
            <p className="mb-4">
              Interested in learning more about partnerships and services? Contact our sales team at
            </p>
            <a
              href="mailto:sales@pintura.com"
              className="
                font-semibold inline-flex items-center gap-1 transition
                hover:underline
                group-hover:text-white
              "
              tabIndex={-1}
            >
              sales@pintura.com
              <i className="fas fa-arrow-right ml-1"></i>
            </a>
          </div>
          {/* Partners Card */}
          <div
            className="
              bg-white text-blue-800 p-6 rounded-lg shadow-lg w-full sm:w-80 border-2 border-blue-800 transition
              hover:bg-blue-800 hover:text-white hover:shadow-2xl hover:-translate-y-1 cursor-pointer
              focus:bg-blue-800 focus:text-white focus:shadow-2xl focus:-translate-y-1
              outline-none duration-200
              flex flex-col items-center text-center
            "
            tabIndex={0}
          >
            <div className="text-4xl mb-4 flex justify-center">
              <i className="fas fa-handshake"></i>
            </div>
            <h2 className="text-xl font-semibold mb-2">Partners</h2>
            <p className="mb-4">
              Looking to collaborate with PINTURA? Reach out to our partnerships team at
            </p>
            <a
              href="mailto:partners@pintura.com"
              className="
                font-semibold inline-flex items-center gap-1 transition
                hover:underline
                group-hover:text-white
              "
              tabIndex={-1}
            >
              partners@pintura.com
              <i className="fas fa-arrow-right ml-1"></i>
            </a>
          </div>
          {/* Help & Support Card */}
          <div
            className="
              bg-white text-blue-800 p-6 rounded-lg shadow-lg w-full sm:w-80 border-2 border-blue-800 transition
              hover:bg-blue-800 hover:text-white hover:shadow-2xl hover:-translate-y-1 cursor-pointer
              focus:bg-blue-800 focus:text-white focus:shadow-2xl focus:-translate-y-1
              outline-none duration-200
              flex flex-col items-center text-center
            "
            tabIndex={0}
          >
            <div className="text-4xl mb-4 flex justify-center">
              <i className="fas fa-question-circle"></i>
            </div>
            <h2 className="text-xl font-semibold mb-2">Help & Support</h2>
            <p className="mb-4">
              Have questions or need assistance? Our support team is here to help at
            </p>
            <a
              href="mailto:help@pintura.com"
              className="
                font-semibold inline-flex items-center gap-1 transition
                hover:underline
                group-hover:text-white
              "
              tabIndex={-1}
            >
              help@pintura.com
              <i className="fas fa-arrow-right ml-1"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmailSection;