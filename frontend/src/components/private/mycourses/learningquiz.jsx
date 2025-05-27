import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from '/logo/logo.png';

const Learningquiz = () => {
  const navigate = useNavigate();
  const [showConfirmationDialog, setShowConfirmationDialog] = useState(false);
  
  // State to track expanded/collapsed modules
  const [expandedModules, setExpandedModules] = useState({
    // Module 1 is expanded by default
    0: true
  });

  // Toggle module expansion
  const toggleModule = (moduleIndex) => {
    setExpandedModules(prev => ({
      ...prev,
      [moduleIndex]: !prev[moduleIndex]
    }));
  };

  // Mock quiz data
  const quizData = {
    title: "Module 1: Introduction to Data Analysis",
    rules: {
      description: "The quiz aims to test your knowledge of the material Introduction to Data Analysis.",
      questionCount: 5,
      conditions: [
        "Passing score requirement: 80%",
        "Exam duration: 5 minutes"
      ],
      retakeInfo: "If you do not meet the passing score, you must wait for 1 minute before retaking the quiz. Use the waiting time to review the previous material, okay?"
    },
    result: {
      date: "-",
      percentage: "-",
      status: "Not Yet Handled",
      action: "-"
    }
  };
  
  // Navigation links for breadcrumb
  const navigationLinks = [
    { name: "Home", path: "/" },
    { name: "My Courses", path: "/courses" },
    { name: "Data Analysis Fundamentals", path: "/courses/data-analysis" },
    { name: "Module 1", path: "/courses/data-analysis/module-1" },
    { name: "Quiz", path: "/courses/data-analysis/module-1/quiz" }
  ];

  // List of modules for sidebar with consistent structure
  const modules = [
    {
      id: "introduction",
      title: "Introduction",
      isIntroduction: true
    },
    {
      id: "module1",
      number: 1,
      title: "Introduction to Data Analysis",
      lessons: [
        { number: "1.1", title: "What is Data Analysis", completed: true },
        { number: "1.2", title: "Types of Data", completed: true },
        { number: "1.3", title: "Tools and Technologies", completed: true },
        { title: "Quiz", isQuiz: true, active: true }
      ]
    },
    {
      id: "module2",
      number: 2,
      title: "Data Collection and Cleaning",
      lessons: []
    },
    {
      id: "module3",
      number: 3,
      title: "Data Manipulation with Excel & SQL",
      lessons: []
    },
    {
      id: "module4",
      number: 4,
      title: "Data Visualization with Power BI",
      lessons: []
    },
    {
      id: "module5",
      number: 5,
      title: "Basic Statistical Analysis",
      lessons: []
    },
    {
      id: "module6",
      number: 6,
      title: "Real-world Case Studies and Applications",
      lessons: []
    },
    {
      id: "final-exam",
      title: "Final Exam",
      isExam: true
    }
  ];

  const handleStartButtonClick = () => {
    // Show confirmation dialog instead of starting quiz immediately
    setShowConfirmationDialog(true);
  };

  const handleCancelConfirmation = () => {
    setShowConfirmationDialog(false);
  };

  const handleContinueConfirmation = () => {
    setShowConfirmationDialog(false);
    // Navigate directly to the quiz page
    navigate('/dashboard/workshop/learningstartquiz');
  };

  const handleGoBack = (path) => {
    // In a real app, this would navigate to the specified path
    console.log(`Navigating to: ${path}`);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header with Logo and Border */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-full mx-auto px-4 py-4">
          <div className="text-center flex items-center justify-center">
            <img src={Logo} alt="Pintura" className="w-[125px] h-[25px] object-contain" />
          </div>
        </div>
      </header>

      {/* Breadcrumb Navigation */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-full mx-auto px-6 py-2 flex justify-between items-center">
          <nav className="flex items-center text-sm">
            {navigationLinks.map((link, index) => (
              <React.Fragment key={link.path}>
                <span 
                  className={`cursor-pointer ${index === navigationLinks.length - 1 ? 'text-gray-700' : 'text-gray-500 hover:text-blue-600'}`}
                  onClick={() => handleGoBack(link.path)}
                >
                  {link.name}
                </span>
                {index < navigationLinks.length - 1 && (
                  <span className="mx-2 text-gray-400">›</span>
                )}
              </React.Fragment>
            ))}
          </nav>
          
          {/* Previous/Next Navigation */}
          <div className="flex text-sm">
            <button 
              onClick={() => handleGoBack('/previous')}
              className="text-blue-600 hover:text-blue-800 flex items-center"
            >
              <span className="mr-1">‹</span> Previous
            </button>
            <span className="mx-2 text-gray-300">|</span>
            <button 
              onClick={() => handleGoBack('/next')}
              className="text-blue-600 hover:text-blue-800 flex items-center"
            >
              Next <span className="ml-1">›</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-1 max-w-full">
        {/* Sidebar - Fixed width */}
        <div className="w-64 bg-gray-50 border-r border-gray-200">
          {modules.map((module, moduleIndex) => (
            <div key={module.id}>
              {module.isIntroduction ? (
                <button className="w-full px-4 py-3 text-left text-sm bg-blue-600 text-white font-medium">
                  {module.title}
                </button>
              ) : module.isExam ? (
                <button className="w-full px-4 py-3 text-left text-sm border-t border-gray-200 hover:bg-gray-100">
                  {module.title}
                </button>
              ) : (
                <>
                  <button 
                    className={`w-full px-4 py-2 text-left text-sm border-t border-gray-200 flex items-center justify-between ${
                      moduleIndex === 1 ? 'bg-blue-50' : 'hover:bg-gray-100'
                    }`}
                    onClick={() => toggleModule(moduleIndex)}
                  >
                    <div>
                      <div className="font-medium">Module {module.number}</div>
                      <div className="text-xs text-gray-600">{module.title}</div>
                    </div>
                    {module.lessons && (
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className={`h-4 w-4 text-gray-500 transition-transform ${expandedModules[moduleIndex] ? 'transform rotate-180' : ''}`} 
                        viewBox="0 0 20 20" 
                        fill="currentColor"
                      >
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    )}
                  </button>
                  {module.lessons && expandedModules[moduleIndex] && moduleIndex === 1 && (
                    <div className="bg-blue-50">
                      {module.lessons.map((lesson, lessonIndex) => (
                        <div 
                          key={lessonIndex}
                          className="pl-4 pr-2 py-2 flex items-center border-t border-blue-100"
                        >
                          {lesson.completed && !lesson.isQuiz && (
                            <svg className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                            </svg>
                          )}
                          {lesson.isQuiz && (
                            <svg className="h-4 w-4 text-gray-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <circle cx="12" cy="12" r="10" strokeWidth="2" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                            </svg>
                          )}
                          <span className="text-sm">{lesson.number ? `Lesson ${lesson.number}: ${lesson.title}` : lesson.title}</span>
                          {lesson.number && (
                            <svg className="h-4 w-4 text-gray-400 ml-auto flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </>
              )}
            </div>
          ))}
        </div>

        {/* Main Quiz Content - Full width */}
        <div className="flex-1 p-6 bg-white">
          <h2 className="text-lg font-medium mb-4">Rules</h2>
          <p className="mb-4">{quizData.rules.description}</p>
          <p className="mb-2">There are {quizData.rules.questionCount} questions that must be completed in this quiz. Some of the conditions are as follows:</p>
          
          <ul className="list-disc pl-8 mb-4">
            {quizData.rules.conditions.map((condition, index) => (
              <li key={index} className="mb-1">{condition}</li>
            ))}
          </ul>
          
          <p className="mb-6">{quizData.rules.retakeInfo}</p>
          <p className="mb-8">Good luck with your quiz!</p>

          <h2 className="text-lg font-medium mb-2">Result</h2>
          <div className="overflow-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="bg-gray-100 text-left px-4 py-2">Date</th>
                  <th className="bg-gray-100 text-left px-4 py-2">Percentage</th>
                  <th className="bg-gray-100 text-left px-4 py-2">Status</th>
                  <th className="bg-gray-100 text-left px-4 py-2">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-4 py-2">{quizData.result.date}</td>
                  <td className="border px-4 py-2">{quizData.result.percentage}</td>
                  <td className="border px-4 py-2">{quizData.result.status}</td>
                  <td className="border px-4 py-2">{quizData.result.action}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="flex justify-end mt-6">
            <button
              onClick={handleStartButtonClick}
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded"
            >
              Start
            </button>
          </div>
        </div>
      </div>

      {/* Confirmation Dialog */}
      {showConfirmationDialog && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-md mx-4">
            <div className="p-5">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 rounded-full p-2 mr-3">
                  <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-blue-700">Are you sure want to take this quiz?</h3>
              </div>
              
              <p className="text-blue-700 mb-6 pl-11">
                If you take this quiz, you will only be able to take it again 1 minute after the exam ends.
              </p>
              
              <div className="flex justify-end space-x-2">
                <button
                  onClick={handleCancelConfirmation}
                  className="px-6 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100"
                >
                  Cancel
                </button>
                <button
                  onClick={handleContinueConfirmation}
                  className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                >
                  Continue
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Learningquiz;