import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '/logo/logo.png';

const Learningstartquiz = () => {
  const navigate = useNavigate();
  
  // Module states
  const [isModuleOpen, setIsModuleOpen] = useState(Array(6).fill(false));
  const [selectedModule, setSelectedModule] = useState(0); // Module 1 selected by default
  
  // Quiz states
  const [currentQuestion, setCurrentQuestion] = useState(3); // Question 4 selected by default
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  
  // Timer states
  const [seconds, setSeconds] = useState(0);
  const [timerActive, setTimerActive] = useState(true);
  
  // Format time as mm:ss
  const formatTime = (totalSeconds) => {
    const minutes = Math.floor(totalSeconds / 60);
    const remainingSeconds = totalSeconds % 60;
    return `${minutes.toString().padStart(2, '0')}m:${remainingSeconds.toString().padStart(2, '0')}s`;
  };

  // Timer effect
  useEffect(() => {
    let interval = null;
    
    if (timerActive) {
      interval = setInterval(() => {
        setSeconds(seconds => seconds + 1);
      }, 1000);
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [timerActive]);
  
  // Toggle module expansion
  const toggleModule = (index) => {
    const updatedModuleStatus = [...isModuleOpen];
    updatedModuleStatus[index] = !updatedModuleStatus[index];
    setIsModuleOpen(updatedModuleStatus);

    if (selectedModule === index) {
      setSelectedModule(null);
    } else {
      setSelectedModule(index);
    }
  };

  // Quiz questions data
  const quizQuestions = [
    {
      id: 1,
      question: "What is data analysis?",
      options: [
        "The process of collecting data only",
        "The process of interpreting data to find insights",
        "A software program for storing data",
        "A type of database structure"
      ]
    },
    {
      id: 2,
      question: "Which of these is NOT a type of data?",
      options: [
        "Quantitative",
        "Qualitative",
        "Categorical",
        "Supervisory"
      ]
    },
    {
      id: 3,
      question: "What tool is commonly used for data visualization?",
      options: [
        "Microsoft Word",
        "Notepad",
        "Power BI",
        "Calculator"
      ]
    },
    {
      id: 4,
      question: "What is the primary purpose of data analysis?",
      options: [
        "To organize data alphabetically",
        "To make informed decisions based on insights derived from data",
        "To collect as much data as possible",
        "To replace manual processes with automated systems"
      ]
    },
    {
      id: 5,
      question: "What is a key characteristic of good data analysis?",
      options: [
        "Using only one data source",
        "Ignoring outliers",
        "Reproducibility of results",
        "Manual calculations only"
      ]
    }
  ];

  // Navigate to previous or next question
  const goToPrevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setSelectedAnswer(null);
    }
  };

  const goToNextQuestion = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
    }
  };

  const handleAnswerSelect = (index) => {
    setSelectedAnswer(index);
  };

  const handleGoBack = (path) => {
    console.log(`Navigating to: ${path}`);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header with Logo */}
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
            <span className="cursor-pointer text-gray-500 hover:text-blue-600" onClick={() => handleGoBack('/')}>
              Home
            </span>
            <span className="mx-2 text-gray-400">›</span>
            <span className="cursor-pointer text-gray-500 hover:text-blue-600" onClick={() => handleGoBack('/courses')}>
              My Courses
            </span>
            <span className="mx-2 text-gray-400">›</span>
            <span className="cursor-pointer text-gray-500 hover:text-blue-600" onClick={() => handleGoBack('/courses/data-analysis')}>
              Data Analysis Fundamentals
            </span>
            <span className="mx-2 text-gray-400">›</span>
            <span className="cursor-pointer text-gray-500 hover:text-blue-600" onClick={() => handleGoBack('/courses/data-analysis/module-1')}>
              Module 1
            </span>
            <span className="mx-2 text-gray-400">›</span>
            <span className="text-gray-700">Quiz</span>
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
          {/* Introduction */}
          <button className="w-full px-4 py-3 text-left text-sm bg-blue-600 text-white font-medium">
            Introduction
          </button>
          
          {/* Module 1 */}
          <div>
            <button 
              className="w-full px-4 py-2 text-left text-sm border-t border-gray-200 flex items-center justify-between bg-blue-50"
              onClick={() => toggleModule(0)}
            >
              <div>
                <div className="font-medium">Module 1</div>
                <div className="text-xs text-gray-600">Introduction to Data Analysis</div>
              </div>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className={`h-4 w-4 text-gray-500 transition-transform transform rotate-180`}
                viewBox="0 0 20 20" 
                fill="currentColor"
              >
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
            <div className="bg-blue-50">
              <div className="pl-4 pr-2 py-2 flex items-center border-t border-blue-100">
                <svg className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <span className="text-sm">Lesson 1.1: What is Data Analysis</span>
                <svg className="h-4 w-4 text-gray-400 ml-auto flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
              
              <div className="pl-4 pr-2 py-2 flex items-center border-t border-blue-100">
                <svg className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <span className="text-sm">Lesson 1.2: Types of Data</span>
                <svg className="h-4 w-4 text-gray-400 ml-auto flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
              
              <div className="pl-4 pr-2 py-2 flex items-center border-t border-blue-100">
                <svg className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <span className="text-sm">Lesson 1.3: Tools and Technologies</span>
                <svg className="h-4 w-4 text-gray-400 ml-auto flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
              
              <div className="pl-4 pr-2 py-2 flex items-center border-t border-blue-100">
                <svg className="h-4 w-4 text-blue-600 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <span className="text-sm font-medium">Quiz</span>
              </div>
            </div>
          </div>
          
          {/* Modules 2-6 */}
          {[
            { number: 2, title: "Data Collection and Cleaning" },
            { number: 3, title: "Data Manipulation with Excel & SQL" },
            { number: 4, title: "Data Visualization with Power BI" },
            { number: 5, title: "Basic Statistical Analysis" },
            { number: 6, title: "Real-world Case Studies and Applications" }
          ].map((module, index) => (
            <div key={index + 1}>
              <button 
                className="w-full px-4 py-2 text-left text-sm border-t border-gray-200 flex items-center justify-between hover:bg-gray-100"
                onClick={() => toggleModule(index + 1)}
              >
                <div>
                  <div className="font-medium">Module {module.number}</div>
                  <div className="text-xs text-gray-600">{module.title}</div>
                </div>
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-4 w-4 text-gray-500"
                  viewBox="0 0 20 20" 
                  fill="currentColor"
                >
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          ))}

          {/* Final Exam */}
          <button className="w-full px-4 py-3 text-left text-sm border-t border-gray-200 hover:bg-gray-100">
            Final Exam
          </button>
        </div>

        {/* Main Quiz Content - Full width */}
        <div className="flex-1 bg-white">
          {/* Quiz header section */}
          <div className="border-b border-gray-200 p-6">
            <h2 className="text-base font-medium">Questions category: Introduction to Data Analysis</h2>
            <div className="flex justify-between items-center mt-4">
              {/* Question navigation */}
              <div className="flex space-x-2">
                {[1, 2, 3, 4, 5].map((num) => (
                  <button
                    key={num}
                    onClick={() => setCurrentQuestion(num - 1)}
                    className={`w-8 h-8 flex items-center justify-center border ${
                      currentQuestion === num - 1 
                        ? 'bg-blue-600 text-white border-blue-600' 
                        : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                    }`}
                  >
                    {num}
                  </button>
                ))}
              </div>
              
              {/* Timer - Now counts up from zero */}
              <div className="text-sm font-medium">
                {formatTime(seconds)}
              </div>
            </div>
          </div>

          {/* Question content */}
          <div className="p-6">
            <h3 className="text-lg font-medium mb-6">
              {quizQuestions[currentQuestion].question}
            </h3>

            <div className="space-y-4">
              {quizQuestions[currentQuestion].options.map((option, index) => (
                <div key={index} className="flex items-start">
                  <input
                    type="radio"
                    id={`option-${index}`}
                    name="quiz-option"
                    className="mt-1 mr-3"
                    checked={selectedAnswer === index}
                    onChange={() => handleAnswerSelect(index)}
                  />
                  <label htmlFor={`option-${index}`} className="text-base">
                    {option}
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* Quiz navigation buttons */}
          <div className="flex justify-between p-6">
            <button
              onClick={goToPrevQuestion}
              className="flex items-center text-blue-600 hover:text-blue-800"
            >
              <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Previous
            </button>
            
            <button
              onClick={goToNextQuestion}
              className="flex items-center text-blue-600 hover:text-blue-800"
            >
              Next
              <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Learningstartquiz;