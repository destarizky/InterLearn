import React, { useState } from 'react';
import FrameBg from '../../../assets/public/FrameBg.png'; // If you use this, ensure path is correct

const NewsletterSection = () => {
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = () => {
    setIsSubscribed(true);
    setTimeout(() => {
      setIsSubscribed(false); // Pop-up will disappear after 3 seconds
    }, 3000);
  };

  return (
    <section className="relative bg-[#2046b3] py-6 overflow-hidden min-h-[90px]">
      {/* Frame/white decorations */}
      <img
        src={FrameBg}
        alt=""
        className="absolute top-0 left-0 w-28 md:w-36 z-0 pointer-events-none select-none"
        style={{objectFit: 'contain'}}
      />
      <img
        src={FrameBg}
        alt=""
        className="absolute top-0 right-0 w-24 md:w-32 z-0 pointer-events-none select-none"
        style={{objectFit: 'contain'}}
      />
      <img
        src={FrameBg}
        alt=""
        className="absolute bottom-0 right-3 w-16 md:w-24 z-0 pointer-events-none select-none"
        style={{objectFit: 'contain'}}
      />

      <div className="relative flex flex-col md:flex-row justify-between items-center z-10 max-w-7xl mx-auto px-4 gap-4">
        {/* Heading and icon */}
        <div className="flex items-center gap-4 w-full md:w-2/3">
          {/* Custom icon as in the image */}
          <span className="flex items-center justify-center">
            <svg
              width="38"
              height="38"
              viewBox="0 0 38 38"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-white"
            >
              <g stroke="white" strokeWidth="2" strokeLinecap="round">
                {/* Paperclip shape */}
                <path d="M11 24L25 10C26.3807 8.61929 28.6193 8.61929 30 10C31.3807 11.3807 31.3807 13.6193 30 15L16 29C13.2386 31.7614 8.76142 31.7614 6 29C3.23858 26.2386 3.23858 21.7614 6 19L20 5"/>
                {/* Sparkle pluses */}
                <path d="M6 13V15"/>
                <path d="M5 14H7"/>
                <path d="M29 25V27"/>
                <path d="M28 26H30"/>
              </g>
            </svg>
          </span>
          <p className="text-white font-semibold text-base md:text-lg lg:text-xl leading-snug">
            Stay Updated with <span className="font-bold">PINTURA</span>! Subscribe to receive exclusive tips,
            <br className="hidden md:block" /> career insights, and the latest updates straight to your inbox.
          </p>
        </div>

        {/* Newsletter Form */}
        <form
      className="w-full max-w-md mx-auto bg-white border-4 border-[#2046b3] rounded-xl flex overflow-hidden"
      onSubmit={e => {
        e.preventDefault();
        handleSubscribe();
      }}
    >
      <input
        type="email"
        placeholder="Enter your email address"
        required
        className="flex-1 px-4 py-3 text-base text-[#888FA3] placeholder-[#888FA3] bg-white outline-none"
        style={{ minWidth: 0 }}
      />
      <button
        type="submit"
        className="bg-[#2046b3] text-white font-semibold px-6 py-2 m-2 rounded-lg transition hover:bg-[#233ea3] text-sm"
        style={{ minWidth: 110 }}
      >
        Subscribe
      </button>
    </form>
      </div>

      {/* Pop-up Subscribe Success */}
      {isSubscribed && (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white text-blue-700 px-8 py-4 rounded-md shadow-lg z-50">
          <p className="text-lg font-medium">Thank you for subscribing!</p>
        </div>
      )}
    </section>
  );
};

export default NewsletterSection;