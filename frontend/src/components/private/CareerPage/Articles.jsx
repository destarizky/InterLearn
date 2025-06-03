import React from 'react';


export default function LatestArticles() {
  const articles = [
    {
      id: 1,
      title: "How to Create a Winning Resume",
      description: "Tips and steps to create a resume that catches the recruiter's attention.",
      date: "Nov 21, 2024",
      category: "Resume Writing",
      image: "/api/placeholder/400/300",
      categoryColor: "bg-blue-100 text-blue-800"
    },
    {
      id: 2,
      title: "Interview Preparation 101",
      description: "Simulations and job interview guides to boost confidence.",
      date: "Nov 20, 2024",
      category: "Interview Preparation",
      image: "/api/placeholder/400/300",
      categoryColor: "bg-orange-100 text-orange-800"
    },
    {
      id: 3,
      title: "Mastering LinkedIn Optimization",
      description: "Guide to maximizing your LinkedIn profile to be more professional and effective.",
      date: "Nov 19, 2024",
      category: "Personal Branding",
      image: "/api/placeholder/400/300",
      categoryColor: "bg-green-100 text-green-800"
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center space-x-3">
            <h2 className="text-3xl font-bold text-blue-600">Latest Articles</h2>
            
          </div>
        </div>

        {/* Articles Grid */}
        <div className="space-y-8">
          {articles.map((article, index) => (
            <article
              key={article.id}
              className="group cursor-pointer bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
            >
              <div className="flex flex-col lg:flex-row">
                {/* Image */}
                <div className="lg:w-2/5 relative overflow-hidden">
                  <div className="aspect-[4/3] lg:aspect-square bg-gradient-to-br from-gray-200 to-gray-300 group-hover:scale-105 transition-transform duration-500">
                    <div className="w-full h-full flex items-center justify-center">
                      {index === 0 && (
                        <div className="w-full h-full bg-gradient-to-br from-slate-700 to-slate-900 flex items-center justify-center">
                          <div className="text-center text-white">
                            <div className="w-16 h-16 bg-white bg-opacity-20 rounded-lg mx-auto mb-4 flex items-center justify-center">
                              <div className="w-8 h-1 bg-white rounded"></div>
                            </div>
                            <p className="text-sm opacity-80">Resume Writing</p>
                          </div>
                        </div>
                      )}
                      {index === 1 && (
                        <div className="w-full h-full bg-gradient-to-br from-blue-700 to-blue-900 flex items-center justify-center">
                          <div className="text-center text-white">
                            <div className="w-16 h-16 bg-white bg-opacity-20 rounded-lg mx-auto mb-4 flex items-center justify-center">
                              <div className="w-6 h-6 border-2 border-white rounded-full"></div>
                            </div>
                            <p className="text-sm opacity-80">Interview Prep</p>
                          </div>
                        </div>
                      )}
                      {index === 2 && (
                        <div className="w-full h-full bg-gradient-to-br from-amber-600 to-orange-700 flex items-center justify-center">
                          <div className="text-center text-white">
                            <div className="w-16 h-16 bg-white bg-opacity-20 rounded-lg mx-auto mb-4 flex items-center justify-center">
                              <div className="w-8 h-8 bg-white bg-opacity-30 rounded"></div>
                            </div>
                            <p className="text-sm opacity-80">LinkedIn Tips</p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="lg:w-3/5 p-8 lg:p-12 flex flex-col justify-center">
                  {/* Meta Info */}
                  <div className="flex flex-wrap items-center gap-4 mb-4">
                    <div className="flex items-center text-gray-500">
                      
                      <span className="text-sm font-medium">{article.date}</span>
                    </div>
                    <div className="flex items-center">
                      
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${article.categoryColor}`}>
                        {article.category}
                      </span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                    {article.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-lg leading-relaxed mb-6">
                    {article.description}
                  </p>

                  {/* Read More Link */}
                  <div className="flex items-center text-blue-600 font-semibold group-hover:text-blue-700 transition-colors">
                    <span className="mr-2">Read More</span>
                 
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View All Articles Button */}
        <div className="text-center mt-12">
          <button className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl group">
            View All Articles
            
          </button>
        </div>
      </div>
    </section>
  );
}
