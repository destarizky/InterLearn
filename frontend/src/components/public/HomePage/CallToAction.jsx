import React from 'react';
import ImgMain from '../../../assets/public/imgcalltoaction.png';
import FrameBg from '../../../assets/public/FrameBg.png';

const CallToAction = () => {
  return (
    <div>
      {/* Top main image */}
      <div className="relative w-full">
        <img
          src={ImgMain}
          alt="Three people sitting at a table with laptops, smiling and talking"
          className="w-full object-cover max-h-[380px] md:max-h-[500px]"
        />
      </div>
      {/* Call to action section with background decorations */}
      <div className="relative bg-[#2953c7] py-12 md:py-16 px-4 md:px-0 overflow-hidden">
        {/* Top-left frame decoration */}
        <img
          src={FrameBg}
          alt=""
          className="absolute left-0 top-0 w-[120px] md:w-[160px] select-none pointer-events-none"
          style={{ zIndex: 1 }}
          aria-hidden="true"
        />
        {/* Bottom-right frame decoration */}
        <img
          src={FrameBg}
          alt=""
          className="absolute right-0 bottom-0 w-[120px] md:w-[180px] select-none pointer-events-none rotate-180"
          style={{ zIndex: 1 }}
          aria-hidden="true"
        />
        <div className="relative z-10 flex flex-col items-center justify-center">
          <h1 className="text-2xl md:text-3xl font-bold text-white mb-4 text-center">
            Ready to Start Your Learning Journey?
          </h1>
          <p className="text-white/90 mb-6 text-base md:text-lg text-center">
            Join thousands of students who have already built their future with PINTURA.
          </p>
          <button className="bg-white text-[#2953c7] px-8 py-3 rounded-full font-bold shadow hover:bg-blue-100 transition duration-300 flex items-center gap-2">
            Get Started Now <i className="fas fa-arrow-right ml-2"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;