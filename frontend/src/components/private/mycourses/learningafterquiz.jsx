import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "/logo/logo.png"; // If you want to use /logo/logo.png, keep it. Otherwise, use text as in the image.

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

const Learningafterquiz = () => {
  const [openModule, setOpenModule] = useState(0);
  const navigate = useNavigate();

  const handleModuleClick = (idx) => {
    setOpenModule(idx === openModule ? null : idx);
  };

  const handleStartClick = () => {
    // No backend needed, just for demo
  };

  const handleViewDetailClick = () => {
    navigate("/dashboard/workshop/learningviewdetail");
  };

  // --- HEADER (MATCH IMAGE 4) ---
  // Centered PINTUR logo as text, then breadcrumbs and navigation below, both full-width.
  const Header = () => (
    <header className="bg-white border-b">
      <div className="w-full pt-2 pb-0 flex flex-col items-center">
        <div className="w-full flex justify-center">
          {/* Use text logo, not image */}
          <header className="bg-white border-b border-gray-200">
                  <div className="max-w-full mx-auto px-4 py-4">
                    <div className="text-center flex items-center justify-center">
                     <img src={Logo} alt="Pintura" className="w-[125px] h-[25px] object-contain" />
                    </div>
                  </div>
            </header>
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
          <div className="rounded-md border bg-white py-3 px-0 min-h-[500px]">
            <div className="mb-1">
              <button className="w-full text-left bg-blue-700 text-white rounded-t-md px-4 py-2 font-semibold">
                Introduction
              </button>
            </div>
            {sidebarModules.map((mod, idx) => (
              <div key={mod.title} className="mb-1">
                <button
                  onClick={() => handleModuleClick(idx)}
                  className={`
                    w-full flex justify-between items-center px-4 py-2 text-left font-semibold
                    rounded-md transition
                    ${openModule === idx
                      ? "bg-blue-100 text-blue-700"
                      : "bg-white text-gray-700 hover:bg-gray-50"
                    }
                  `}
                >
                  <span>
                    {mod.title}
                    <span className="block text-sm font-normal text-gray-500">
                      {mod.subtitle}
                    </span>
                  </span>
                  <span>
                    {mod.lessons.length > 0 && (
                      <svg width="20" height="20" fill="none" className={`inline ml-2 transform transition-transform ${openModule === idx ? "rotate-90" : ""}`}><path d="M7 9l3 3 3-3" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    )}
                  </span>
                </button>
                {openModule === idx && mod.lessons.length > 0 && (
  <div className="ml-4">
    {mod.lessons.map((lesson, i) => (
      <button
        key={lesson}
        className={`
          flex items-center w-full py-2 px-2 text-left rounded
          ${lesson === "Quiz"
            ? "text-blue-700 font-semibold"
            : "text-gray-700"
          }
          hover:bg-blue-50
        `}
      >
        <span className="flex-1 truncate flex items-center">
          {/* Replace circle indicator with check mark for all items in Module 1 */}
          {idx === 0 && (
            <span className="mr-2 text-green-500">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 6L9 17l-5-5"/>
              </svg>
            </span>
          )}
          {lesson}
        </span>
        <span>
          <svg width="16" height="16" fill="none"><path d="M6 4l4 4-4 4" stroke="#A3A3A3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </span>
      </button>
    ))}
  </div>
)}
              </div>
            ))}
            <button className="w-full text-left px-4 py-2 text-gray-700 font-semibold rounded-b-md hover:bg-gray-50">
              Final Exam
            </button>
          </div>
        </aside>

        {/* Quiz Result Panel */}
        <section className="flex-1">
          <div className="border rounded-lg px-8 py-8 bg-white">
            <h1 className="text-xl font-bold text-gray-800 mb-6">Rules</h1>
            <p className="text-gray-700 mb-2">
              This quiz aims to test your knowledge of the material Introduction to Data Analysis.
            </p>
            <p className="text-gray-700 mb-2">
              There are 5 questions that must be completed in this quiz. Some of the conditions are as follows:
            </p>
            <ul className="list-disc ml-5 mb-2 text-gray-700">
              <li>Passing score requirement: 80%</li>
              <li>Exam duration: 5 minutes</li>
            </ul>
            <p className="text-gray-700 mb-2">
              If you do not meet the passing score, you must wait for 1 minute before retaking the quiz. Use the waiting time to review the previous material, okay?
            </p>
            <p className="text-gray-700 mb-8">Good luck with your work!</p>

            <h2 className="text-lg font-bold text-blue-700 mb-2">Result</h2>
            <div className="flex justify-end mb-4">
              <button
                onClick={handleStartClick}
                className="bg-[#8A95C7] text-white px-6 py-2 rounded-lg shadow hover:bg-[#6d77b1] transition"
                style={{ float: "right" }}
              >
                Start
              </button>
            </div>
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border px-3 py-2 text-left font-semibold">Date</th>
                  <th className="border px-3 py-2 text-left font-semibold">Percentage</th>
                  <th className="border px-3 py-2 text-left font-semibold">Status</th>
                  <th className="border px-3 py-2 text-left font-semibold">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-3 py-2">21/11/24</td>
                  <td className="border px-3 py-2">80%</td>
                  <td className="border px-3 py-2">Passed</td>
                  <td className="border px-3 py-2 text-blue-700 underline cursor-pointer">
                    <button onClick={handleViewDetailClick} className="hover:text-blue-900">View Detail</button>
                  </td>
                </tr>
                {/* Empty rows for layout match */}
                <tr>
                  <td className="border px-3 py-2">-</td>
                  <td className="border px-3 py-2">-</td>
                  <td className="border px-3 py-2">-</td>
                  <td className="border px-3 py-2">-</td>
                </tr>
                <tr>
                  <td className="border px-3 py-2">-</td>
                  <td className="border px-3 py-2">-</td>
                  <td className="border px-3 py-2">-</td>
                  <td className="border px-3 py-2">-</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Learningafterquiz;