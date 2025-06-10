import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "/logo/logo.png";

// Sidebar data - same structure as your source
const sidebarModules = [
  {
    title: "Module 1",
    subtitle: "Introduction to Data Analysis",
    lessons: [
      "Lesson 1.1: What is Data Analysis?",
      "Lesson 1.2: Types of Data",
      "Lesson 1.3: Tools and Technologies",
      "Quiz",
    ],
  },
  {
    title: "Module 2",
    subtitle: "Data Collection and Cleaning",
    lessons: [],
  },
  {
    title: "Module 3",
    subtitle: "Data Manipulation with Excel & SQL",
    lessons: [],
  },
  {
    title: "Module 4",
    subtitle: "Data Visualization with Power BI",
    lessons: [],
  },
  {
    title: "Module 5",
    subtitle: "Basic Statistical Analysis",
    lessons: [],
  },
  {
    title: "Module 6",
    subtitle: "Real-world Case Studies and Applications",
    lessons: [],
  },
];

// Quiz questions, answers, and user's answers for the results view
const quizResults = [
  {
    question: "What is the primary role of data analysis?",
    options: [
      "Developing software applications that automate manual work.",
      "Collecting & examining data, interpreting the data to solve problems.",
      "Designing the user interface for websites.",
      "Working with teams on financial budgets.",
    ],
    correct: 1,
    user: 1,
  },
  {
    question: "What is the first step in the logical data analysis process?",
    options: [
      "Understanding what a graph represents and means.",
      "Collecting data relevant to the analysis.",
      "Running machine learning models.",
      "Writing SQL queries to retrieve data.",
    ],
    correct: 1,
    user: 1,
  },
  {
    question: "Which type of data is quantitative?",
    options: [
      "The usage of adjectives in a survey.",
      "The monthly sales revenue of a product.",
      "Customer feedback from a survey about checking product satisfaction.",
      "The percentage of meetings at a shop in one month.",
    ],
    correct: 1,
    user: 1,
  },
  {
    question: "What is the primary purpose of data analysis?",
    options: [
      "To make better informed decisions, using insights drawn from data.",
      "To organize data alphabetically.",
      "To collect as much data as possible.",
      "To measure manual processes with outdated systems.",
    ],
    correct: 0,
    user: 0,
  },
  {
    question: "Which of the following best describes the purpose of data analysis?",
    options: [
      "Collecting data without any intention to interpret it.",
      "Transforming data into meaningful insights to support decision-making.",
      "Storing every account entry into separate spreadsheets.",
      "Creating complex algorithms without interpreting their results.",
    ],
    correct: 1,
    user: 1,
  },
];

const quizMeta = {
  date: "November 18, 2024, 01:46:41",
  totalQuestions: quizResults.length,
  score: 80,
};

const LearningViewDetail = () => {
  const [openModule, setOpenModule] = useState(0);
  const navigate = useNavigate();

  const handleModuleClick = (idx) => {
    setOpenModule(idx === openModule ? null : idx);
  };

  // Header as in your design
  const Header = () => (
    <header className="bg-white border-b">
      <div className="w-full pt-2 pb-0 flex flex-col items-center">
        <div className="w-full flex justify-center">
          <div className="max-w-full mx-auto px-4 py-4">
            <div className="text-center flex items-center justify-center">
              <img src={Logo} alt="Pintura" className="w-[125px] h-[25px] object-contain" />
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center w-full px-8 pb-2 pt-2" style={{ borderTop: "1px solid #e5e7eb" }}>
          {/* Breadcrumbs */}
          <nav className="text-gray-500 text-sm">
            <ol className="flex space-x-2 items-center">
              <li>Home</li>
              <li className="mx-1">&gt;</li>
              <li>My Courses</li>
              <li className="mx-1">&gt;</li>
              <li>Data Analysis Fundamentals</li>
              <li className="mx-1">&gt;</li>
              <li>Module 1</li>
              <li className="mx-1">&gt;</li>
              <li>
                <span className="text-blue-700 font-semibold">Quiz</span>
              </li>
            </ol>
          </nav>
          {/* Prev/Next */}
          <div className="flex items-center space-x-1 text-sm">
            <a href="#" className="text-blue-700 hover:underline flex items-center">
              <span className="text-lg mr-1" style={{ lineHeight: 1 }}>&lt;</span>
              Previous
            </a>
            <span className="text-gray-400 mx-2">|</span>
            <a href="#" className="text-blue-700 hover:underline flex items-center">
              Next
              <span className="text-lg ml-1" style={{ lineHeight: 1 }}>&gt;</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      {/* Main Content */}
      <main className="flex flex-1 px-8 py-8 bg-white">
        {/* Sidebar */}
        <aside className="w-80 mr-8">
          <div className="flex flex-col gap-3">
            {/* Introduction */}
            <button className="w-full text-left bg-[#2854C6] text-white rounded-[8px] px-4 py-2 font-semibold focus:outline-none">
              Introduction
            </button>
            {/* Modules */}
            {sidebarModules.map((mod, idx) => (
              <div key={mod.title}>
                <button
                  onClick={() => handleModuleClick(idx)}
                  className={`w-full flex flex-col items-start px-4 py-2 rounded-[8px] border border-[#E0E5F2] transition text-left mb-0 focus:outline-none ${
                    openModule === idx
                      ? "bg-[#2854C6] text-white"
                      : "bg-white text-[#1B2342] hover:bg-[#F3F6FC]"
                  }`}
                >
                  <div className="flex items-center w-full justify-between">
                    <div>
                      <div className="font-semibold">
                        {mod.title}
                      </div>
                      <div className="text-xs text-inherit font-normal">
                        {mod.subtitle}
                      </div>
                    </div>
                    <svg
                      width="20"
                      height="20"
                      fill="none"
                      className={`ml-2 transition-transform ${openModule === idx ? "rotate-180" : ""}`}
                      viewBox="0 0 20 20"
                    >
                      <path d="M5 8l5 5 5-5" stroke={openModule === idx ? "#fff" : "#1B2342"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </button>
                {openModule === idx && mod.lessons.length > 0 && (
                  <div className="bg-white border border-[#E0E5F2] rounded-b-[8px] px-0 py-2 mt-[-8px] mb-3">
                    {mod.lessons.map((lesson, i) => (
                      <button
                        key={lesson}
                        className={`flex items-center w-full py-2 pl-6 pr-2 text-left rounded-none border-0 bg-transparent transition group ${
                          lesson === "Quiz"
                            ? "font-semibold"
                            : "text-[#1B2342]"
                        }`}
                        style={{
                          fontWeight: lesson === "Quiz" ? 600 : 400,
                          fontSize: lesson === "Quiz" ? "16px" : "15px",
                          color: lesson === "Quiz" ? "#1B2342" : undefined // Keep Quiz black
                        }}
                      >
                        <span className="flex-1 truncate flex items-center gap-2">
                          {/* Checkmark for all items in Module 1 */}
                          {idx === 0 && (
                            // Make the Quiz icon green like the lessons above, but keep the text black
                            <svg width="20" height="20" fill="none" className="mr-1" viewBox="0 0 20 20">
                              <circle cx="10" cy="10" r="9" stroke="#2FCB65" strokeWidth="1.5" fill="none"/>
                              <path d="M7.5 10.5l2 2 3-4" stroke="#2FCB65" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          )}
                          {lesson === "Quiz" ? (
                            <span style={{ color: "#1B2342" }}>Quiz</span>
                          ) : (
                            <span>{lesson}</span>
                          )}
                        </span>
                        <span>
                          {lesson !== "Quiz" && (
                            <svg width="16" height="16" fill="none"><path d="M6 4l4 4-4 4" stroke="#A3A3A3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                          )}
                        </span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <button className="w-full text-left px-4 py-2 text-[#1B2342] font-semibold rounded-[8px] border border-[#E0E5F2] bg-white hover:bg-[#F3F6FC] mt-0">
              Final Exam
            </button>
          </div>
        </aside>

        {/* Quiz Result Panel */}
        <section className="flex-1">
          <div className="border rounded-lg px-8 py-8 bg-white">
            {/* Quiz Result Header */}
            <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-4">
              <div>
                <div className="text-lg font-semibold text-gray-900 mb-1">Quiz Result</div>
                <div className="text-xs text-gray-500">
                  Quiz Date: {quizMeta.date}
                </div>
              </div>
              <div className="flex space-x-8 mt-3 md:mt-0">
                <div className="flex flex-col items-center">
                  <span className="text-xs text-gray-400">Total questions</span>
                  <span className="text-blue-700 font-bold text-3xl">{quizMeta.totalQuestions}</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-xs text-gray-400">Score</span>
                  <span className="text-blue-700 font-bold text-3xl">{quizMeta.score}</span>
                </div>
              </div>
            </div>

            {/* Quiz Questions */}
            <div className="mt-8">
              {quizResults.map((q, idx) => (
                <div key={idx} className="mb-8">
                  <div className="font-semibold mb-3 text-gray-900">{q.question}</div>
                  <div className="space-y-2">
                    {q.options.map((opt, oidx) => {
                      // Is this the correct answer?
                      const isCorrect = oidx === q.correct;
                      // Is this the user's answer?
                      const isUser = oidx === q.user;
                      // Show check on correct, X on user's wrong.
                      return (
                        <div key={oidx} className="flex items-center">
                          <div
                            className={`
                              w-full px-4 py-2 border rounded
                              flex items-center
                              ${isCorrect
                                ? "border-green-500 bg-green-50"
                                : isUser && !isCorrect
                                ? "border-red-400 bg-red-50"
                                : "border-gray-200 bg-white"
                              }
                            `}
                          >
                            <span className="flex-1 text-gray-800">
                              {opt}
                            </span>
                            {isCorrect && (
                              <span className="ml-3 text-green-600 flex items-center">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
                              </span>
                            )}
                            {/* Show red X only if user's answer and it's incorrect */}
                            {isUser && !isCorrect && (
                              <span className="ml-3 text-red-600 flex items-center">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>
                              </span>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default LearningViewDetail;