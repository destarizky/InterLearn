import React from 'react';


export default function CareerBlogPage() {
  const articles = [
    {
      category: "Interview Preparation",
      date: "Nov 15, 2024",
      title: "Mastering LinkedIn Optimization",
      excerpt: "Read more"
    },
    {
      category: "Personal Branding", 
      date: "Nov 10, 2024",
      title: "Building Your Personal Brand for Career Success",
      excerpt: "Read more"
    },
    {
      category: "Resume Writing",
      date: "Nov 18, 2024", 
      title: "Resume Formats You Should Avoid to Land Your Dream Job",
      excerpt: "Read more"
    },
    {
      category: "Resume Writing",
      date: "Nov 14, 2024",
      title: "Crafting a Winning Resume for Fresh Graduates", 
      excerpt: "Read more"
    },
    {
      category: "Interview Preparation",
      date: "Nov 16, 2024",
      title: "Top 10 Behavioral Questions and How to Answer Them",
      excerpt: "Read more"
    },
    {
      category: "Interview Preparation", 
      date: "Nov 19, 2024",
      title: "Job Interview Skills: Mastering Body Language",
      excerpt: "Read more"
    },
    {
      category: "Portfolio Building",
      date: "Nov 14, 2024",
      title: "Designing a Standout Portfolio for Creative Professionals",
      excerpt: "Read more"
    },
    {
      category: "Portfolio Building",
      date: "Nov 13, 2024",
      title: "Why Every Data Scientist Should Build a GitHub Portfolio",
      excerpt: "Read more"
    },
    {
      category: "Personal Branding",
      date: "Nov 9, 2024", 
      title: "How to Build a Professional LinkedIn Profile in 5 Easy Steps",
      excerpt: "Read more"
    },
    {
      category: "Personal Branding",
      date: "Nov 7, 2024",
      title: "The Art of Personal Branding for Freelancers",
      excerpt: "Read more"
    },
    {
      category: "Job Search Strategies",
      date: "Nov 6, 2024",
      title: "Exploring Job Boards: Finding Hidden Opportunities Online", 
      excerpt: "Read more"
    },
    {
      category: "Workplace Skills",
      date: "Nov 5, 2024",
      title: "Time Management Tips for Young Professionals",
      excerpt: "Read more"
    }
  ];

  const categories = [
    "All",
    "Resume Writing", 
    "Interview Preparation",
    "Portfolio Building",
    "Personal Branding",
    "Job Search Strategies",
    "Workplace Skills", 
    "Career Growth"
  ];

  return (
    <div className="min-h-screen bg-white">
      

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col md:flex-row gap-8">
        {/* Sidebar */}
        <aside className="w-full md:w-64 flex-shrink-0">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Latest Articles</h2>
          <nav className="space-y-2">
            {categories.map((category, index) => (
              <a
                key={index}
                href="#"
                className={`block px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  category === "All" 
                    ? "bg-blue-100 text-blue-700" 
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                }`}
              >
                {category}
              </a>
            ))}
          </nav>
        </aside>

        {/* Articles Grid */}
        <section className="flex-1 grid gap-6">
          {articles.map((article, index) => (
            <div key={index} className="border-b border-gray-200 pb-6">
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-4 mb-2">
                    <span className="text-sm text-blue-600 font-medium">{article.category}</span>
                    <span className="text-sm text-gray-500">{article.date}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{article.title}</h3>
                  <button className="flex items-center text-blue-600 font-medium text-sm hover:text-blue-700">
                    {article.excerpt}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </section>
      </main>

      
    </div>
  );
}
