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