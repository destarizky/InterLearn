import React from "react";

// Use public folder image path for recently1.png based on folder structure
const course = {
  src: "/courses/recently1.png",  // Correct relative path for public assets
  institution: "University of Indonesia",
  institutionLogo: "/logo-companies/ui.png", // Logo path for the institution
  title: "Data Analysis Fundamentals",
  description: "Master the basics of data analysis with practical industry application.",
  rating: 4,
  total_reviews: 1200,
  price: 0,
  credits: 5,
};

const StarRating = ({ rating = 0, totalReviews = 0 }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="flex items-center mb-2">
      <div className="flex items-center text-yellow-400 mr-2 text-xl">
        {Array.from({ length: fullStars }).map((_, index) => (
          <i key={`full-${index}`} className="fas fa-star"></i>
        ))}
        {hasHalfStar && <i className="fas fa-star-half-alt"></i>}
        {Array.from({ length: emptyStars }).map((_, index) => (
          <i key={`empty-${index}`} className="far fa-star"></i>
        ))}
      </div>
      <span className="text-gray-600 text-[15px] font-medium ml-1">
        ({rating}/5) based on {totalReviews.toLocaleString()} reviews
      </span>
    </div>
  );
};

const Hero = () => {
  // Remove all backend logic, display only
  return (
    <div className="flex flex-col md:flex-row items-stretch w-full bg-[#f4f7fb]">
      {/* Left: Course Image */}
      <div className="md:w-[44%] w-full min-w-[260px]">
        <img
          src={course.src}  // Use public/courses/recently1.png
          alt={course.title}
          className="object-cover w-full h-full max-h-[227px] md:max-h-none"
        />
      </div>
      {/* Right: Course Details */}
      <div className="flex-1 flex items-center px-6 py-6 bg-[#f4f7fb]">
        <div className="w-full">
          {/* Institution with logo */}
          <div className="flex items-center mb-3">
            <img 
              src={course.institutionLogo} 
              alt={course.institution}
              className="w-7 h-7 object-contain mr-2"
            />
            <span className="text-gray-700 font-medium text-[17px]">{course.institution}</span>
          </div>
          {/* Title */}
          <h1 className="text-[2rem] md:text-[2.2rem] font-bold text-blue-800 mb-2 leading-tight">
            {course.title}
          </h1>
          {/* Description */}
          <p className="text-gray-600 text-[16px] mb-4 max-w-2xl">{course.description}</p>
          {/* Rating */}
          <StarRating rating={course.rating} totalReviews={course.total_reviews} />
          {/* Enroll Button + Credits */}
          <div className="flex items-center gap-2 mt-4">
            <button
              className="bg-blue-700 hover:bg-blue-800 text-white font-semibold px-6 py-2 rounded-lg text-base transition"
              type="button"
            >
              Enroll Now
            </button>
            <span className="text-gray-500 text-[15px] font-medium ml-2">
              Using {course.credits} Credits
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;