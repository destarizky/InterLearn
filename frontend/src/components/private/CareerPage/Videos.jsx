import React, { useState } from 'react';


export default function VideosContent() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const categories = [
    'All',
    'Resume Writing',
    'Interview Preparation',
    'Portfolio Building',
    'Personal Branding',
    'Job Search Strategies',
    'Workplace Skills',
    'Career Growth'
  ];

  const videos = [
    {
      id: 1,
      title: "Crafting a Resume That Stands Out",
      category: "Resume Writing",
      instructor: "Michael Anderson",
      role: "HR Specialist at Google",
      duration: "12 min",
      thumbnail: "/api/placeholder/400/240",
      avatar: "/api/placeholder/40/40"
    },
    {
      id: 2,
      title: "5 Portfolio Tips to Land Your First UX Job",
      category: "Portfolio Building",
      instructor: "Sarah Lee",
      role: "UI/UX Designer at Airbnb",
      duration: "15 min",
      thumbnail: "/api/placeholder/400/240",
      avatar: "/api/placeholder/40/40"
    },
    {
      id: 3,
      title: "LinkedIn Profile Hacks",
      category: "Personal Branding",
      instructor: "Robert Tan",
      role: "LinkedIn Trainer",
      duration: "10 min",
      thumbnail: "/api/placeholder/400/240",
      avatar: "/api/placeholder/40/40"
    },
    {
      id: 4,
      title: "Elevate Your Personal Brand",
      category: "Personal Branding",
      instructor: "Rachel Lim",
      role: "Marketing Strategist at Amazon",
      duration: "18 min",
      thumbnail: "/api/placeholder/400/240",
      avatar: "/api/placeholder/40/40"
    },
    {
      id: 5,
      title: "Acing Behavioral Interviews",
      category: "Interview Preparation",
      instructor: "Jonathan Chen",
      role: "HR Manager at Amazon",
      duration: "20 min",
      thumbnail: "/api/placeholder/400/240",
      avatar: "/api/placeholder/40/40"
    },
    {
      id: 6,
      title: "Ace Your Next Job Interview",
      category: "Interview Preparation",
      instructor: "Iman Usman",
      role: "COO of Ruangguru",
      duration: "15 min",
      thumbnail: "/api/placeholder/400/240",
      avatar: "/api/placeholder/40/40"
    }
  ];

  const filteredVideos = selectedCategory === 'All'
    ? videos
    : videos.filter(video => video.category === selectedCategory);

  const videosPerPage = 6;
  const totalPages = Math.ceil(filteredVideos.length / videosPerPage);
  const startIndex = (currentPage - 1) * videosPerPage;
  const currentVideos = filteredVideos.slice(startIndex, startIndex + videosPerPage);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
    setIsDropdownOpen(false);
  };

  const getCategoryColor = (category) => {
    const colors = {
      'Resume Writing': 'bg-blue-100 text-blue-800',
      'Portfolio Building': 'bg-purple-100 text-purple-800',
      'Personal Branding': 'bg-green-100 text-green-800',
      'Interview Preparation': 'bg-orange-100 text-orange-800',
      'Job Search Strategies': 'bg-pink-100 text-pink-800',
      'Workplace Skills': 'bg-indigo-100 text-indigo-800',
      'Career Growth': 'bg-yellow-100 text-yellow-800'
    };
    return colors[category] || 'bg-gray-100 text-gray-800';
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
          <h2 className="text-3xl font-bold text-blue-600 mb-4 sm:mb-0">Videos Content</h2>

          {/* Category Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center space-x-2 px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
            >
              <span className="text-gray-700">Category</span>
              
            </button>

            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-56 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                <div className="py-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => handleCategorySelect(category)}
                      className={`w-full text-left px-4 py-2 hover:bg-gray-50 transition-colors ${
                        selectedCategory === category ? 'bg-blue-50 text-blue-600 font-medium' : 'text-gray-700'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Selected Category Indicator */}
        {selectedCategory !== 'All' && (
          <div className="mb-6">
            <span className="text-sm text-gray-600 mr-2">Showing:</span>
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(selectedCategory)}`}>
              {selectedCategory}
            </span>
          </div>
        )}

        {/* Videos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {currentVideos.map((video) => (
            <div key={video.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="relative group cursor-pointer">
                <div className="aspect-video bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                  <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-all duration-300"></div>
                  
                </div>
                <div className="absolute top-3 right-3">
                  <span className={`px-2 py-1 rounded text-xs font-medium ${getCategoryColor(video.category)}`}>
                    {video.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3 line-clamp-2">
                  {video.title}
                </h3>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm font-semibold">
                        {video.instructor.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">{video.instructor}</p>
                      <p className="text-xs text-gray-500">{video.role}</p>
                    </div>
                  </div>
                  <div className="flex items-center text-gray-500">
                   
                    <span className="text-sm font-medium">{video.duration}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center space-x-2">
            <button
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className="flex items-center px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              
              Previous
            </button>

            <div className="flex space-x-1">
              {[...Array(Math.min(5, totalPages))].map((_, i) => {
                const pageNum = i + 1;
                return (
                  <button
                    key={pageNum}
                    onClick={() => setCurrentPage(pageNum)}
                    className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                      currentPage === pageNum
                        ? 'bg-blue-600 text-white'
                        : 'text-gray-700 bg-white border border-gray-300 hover:bg-gray-50'
                    }`}
                  >
                    {pageNum}
                  </button>
                );
              })}
              {totalPages > 5 && (
                <>
                  <span className="px-2 py-2 text-gray-500">...</span>
                  <button
                    onClick={() => setCurrentPage(totalPages)}
                    className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                      currentPage === totalPages
                        ? 'bg-blue-600 text-white'
                        : 'text-gray-700 bg-white border border-gray-300 hover:bg-gray-50'
                    }`}
                  >
                    {totalPages}
                  </button>
                </>
              )}
            </div>

            <button
              onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
              className="flex items-center px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Next
              
            </button>
          </div>
        )}
      </div>
    </section>
  );

  
}


