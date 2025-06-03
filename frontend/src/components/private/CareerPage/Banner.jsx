import React from 'react';


export default function HighlightEvent() {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-400 mb-4">
            Highlight Event
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Don't miss out on this exclusive opportunity to elevate your career and gain insights from top speaker —secure your spot now!
          </p>
        </div>

        {/* Event Card */}
        <div className="relative max-w-6xl mx-auto">
          <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 shadow-2xl">
            <div className="bg-gray-200 rounded-2xl p-6 relative overflow-hidden">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="flex flex-col lg:flex-row">
                  {/* Left content */}
                  <div className="flex-1 p-8">
                    <h3 className="text-3xl font-bold text-gray-900 mb-3">
                      Data Science Career Week 2024
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      Join us in exploring the latest trends in Data Science and 
                      career development with Xaviera Putri Ardianingsih Listya!
                    </p>
                    
                    <div className="space-y-4 mb-8">
                      <div className="flex items-center text-gray-700">
                        
                        <span className="font-semibold">26 December 2024</span>
                      </div>
                      <div className="flex items-center text-gray-700">
                        
                        <span className="font-semibold">Zoom (Online)</span>
                      </div>
                    </div>

                    <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 flex items-center group shadow-lg hover:shadow-xl">
                      Register Now
                      
                    </button>
                  </div>

                  {/* Right image */}
                  <div className="lg:w-80 relative">
                    <div className="h-full bg-gradient-to-br from-blue-50 to-blue-100 p-8 flex items-center justify-center relative overflow-hidden">
                      {/* Decorative elements */}
                      <div className="absolute top-4 right-4 w-16 h-16 bg-blue-600 rounded-lg opacity-20"></div>
                      <div className="absolute bottom-4 left-4 w-12 h-12 bg-blue-400 rounded-full opacity-30"></div>
                      <div className="absolute top-1/2 right-8 w-8 h-8 bg-blue-500 rounded opacity-40"></div>
                      
                      {/* Speaker placeholder */}
                      <div className="relative z-10 text-center">
                        <div className="w-32 h-32 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full mx-auto mb-4 flex items-center justify-center shadow-xl">
                          <div className="text-white text-4xl font-bold">XP</div>
                        </div>
                        <div className="bg-white rounded-lg p-3 shadow-lg">
                          <p className="text-sm font-semibold text-gray-900">Xaviera Putri</p>
                          <p className="text-xs text-gray-600">Data Science Expert</p>
                        </div>
                      </div>

                      {/* Background pattern */}
                      <div className="absolute inset-0 opacity-10">
                        <div className="grid grid-cols-8 gap-2 h-full">
                          {Array.from({ length: 32 }).map((_, i) => (
                            <div 
                              key={i} 
                              className={`bg-blue-600 rounded ${i % 3 === 0 ? 'opacity-60' : 'opacity-30'}`}
                              style={{ 
                                animationDelay: `${i * 100}ms`,
                                animation: 'pulse 3s infinite'
                              }}
                            ></div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Laptop base */}
            <div className="h-8 bg-gradient-to-b from-gray-300 to-gray-400 rounded-b-3xl mt-2 relative">
              <div className="absolute inset-x-0 top-0 h-1 bg-gray-200 rounded-full"></div>
            </div>
          </div>

          {/* Decorative blur elements */}
          <div className="absolute -top-10 -right-10 w-20 h-20 bg-blue-600 rounded-full opacity-20 blur-xl"></div>
          <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-purple-600 rounded-full opacity-20 blur-xl"></div>
        </div>
      </div>

      {/* Animation style */}
      <style jsx="true">{`
        @keyframes pulse {
          0%, 100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.6;
          }
        }
      `}</style>
    </section>
  );
}
