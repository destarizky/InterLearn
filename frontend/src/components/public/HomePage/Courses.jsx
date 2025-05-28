import React from "react";

const Courses = () => {
    // Mock data for courses that matches the image
    const courseData = [
        {
            id: 1,
            title: "Data Science Fundamentals",
            description: "Learn essential data analysis skills and tools",
            category_name: "Data Science",
            image_url: "/images/courses/data-science.jpg"
        },
        {
            id: 2,
            title: "Full-Stack Development",
            description: "Master modern web development technologies",
            category_name: "Full-Stack",
            image_url: "/images/courses/full-stack.jpg"
        },
        {
            id: 3,
            title: "Project Management",
            description: "Develop essential project management skills",
            category_name: "Project Management",
            image_url: "/images/courses/project-management.jpg"
        },
        {
            id: 4,
            title: "User-Centric Web Design: Strategies for better UI/UX",
            description: "Become a UX/UI designer: Master Mobile and Web Design, User Interface + User Experience",
            category_name: "UI/UX Design",
            image_url: "/images/courses/ui-ux-design.jpg"
        },
        {
            id: 5,
            title: "Adobe CC Masterclass: Photoshop, Illustrator, & XD",
            description: "Learn to design today with Photoshop, Illustrator, Adobe XD, Design & more!",
            category_name: "Graphic Design",
            image_url: "/images/courses/adobe-cc.jpg"
        },
        {
            id: 6,
            title: "Business Analysis Fundamentals - ECBA, CCBA, CBAP endorsed",
            description: "The Professional's Guide to learning the key business analysis concepts to thrive in your Business Analyst career!",
            category_name: "Business Analysis",
            image_url: "/images/courses/business-analysis.jpg"
        }
    ];

    return (
        <section className="bg-white py-12">
            <div className="container mx-auto px-6 lg:px-16">
                <h1 className="text-3xl font-bold text-center text-blue-800 mb-8">
                    See Our Courses
                </h1>
                
                {/* Category Tabs */}
                <div className="flex justify-center mb-8">
                    <div className="inline-flex border-b">
                        <button className="px-6 py-2 text-sm font-medium bg-blue-700 text-white rounded-t-md">
                            Popular
                        </button>
                        <button className="px-6 py-2 text-sm font-medium text-gray-600 hover:text-blue-700">
                            Development
                        </button>
                        <button className="px-6 py-2 text-sm font-medium text-gray-600 hover:text-blue-700">
                            Business
                        </button>
                        <button className="px-6 py-2 text-sm font-medium text-gray-600 hover:text-blue-700">
                            Finance
                        </button>
                    </div>
                </div>

                {/* Grid courses */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {courseData.map((course) => (
                        <div
                            key={course.id}
                            className="bg-white shadow-md rounded-lg overflow-hidden border border-gray-200"
                        >
                            <div className="relative">
                                <img
                                    src={course.image_url}
                                    alt={course.title}
                                    className="w-full h-48 object-cover"
                                />
                                <span className="absolute top-2 right-2 bg-white text-gray-800 text-xs font-semibold px-2 py-1 rounded">
                                    {course.category_name}
                                </span>
                            </div>
                            <div className="p-5">
                                <h2 className="text-lg font-bold text-gray-800 mb-2">
                                    {course.title}
                                </h2>
                                <p className="text-gray-600 mb-4 text-sm">
                                    {course.description}
                                </p>
                                <button className="bg-blue-700 text-white px-4 py-2 rounded-md w-full text-center hover:bg-blue-800 transition-colors">
                                    Learn More <span className="ml-1">→</span>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Pagination */}
                <div className="flex justify-center items-center mt-10">
                    <button className="px-4 py-2 border border-gray-300 rounded-md text-gray-600 hover:bg-gray-100 mr-2">
                        ← Previous
                    </button>
                    <button className="px-3 py-1 bg-blue-700 text-white rounded-md mx-1">
                        1
                    </button>
                    <button className="px-3 py-1 border border-gray-300 text-gray-600 rounded-md mx-1 hover:bg-gray-100">
                        2
                    </button>
                    <button className="px-3 py-1 border border-gray-300 text-gray-600 rounded-md mx-1 hover:bg-gray-100">
                        3
                    </button>
                    <button className="px-3 py-1 border border-gray-300 text-gray-600 rounded-md mx-1 hover:bg-gray-100">
                        4
                    </button>
                    <button className="px-3 py-1 border border-gray-300 text-gray-600 rounded-md mx-1 hover:bg-gray-100">
                        5
                    </button>
                    <button className="px-3 py-1 border border-gray-300 text-gray-600 rounded-md mx-1 hover:bg-gray-100">
                        6
                    </button>
                    <span className="mx-1">...</span>
                    <button className="px-4 py-2 border border-gray-300 rounded-md text-gray-600 hover:bg-gray-100 ml-2">
                        Next →
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Courses;