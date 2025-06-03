import React from 'react';

const Testimonials = () => {
    const testimonials = [
        {
            quote: "Helped me land my dream job",
            description: "The practical skills I learned through PINTURA helped me land my dream job in tech. The mentorship program was invaluable!",
            name: "Sandy Kristian Waluyo",
            title: "Computer Science Student",
            image: "/avatar/sandy.png",
        },
        {
            quote: "Navigate my academic journey",
            description: "The career guidance and mental wellness support really helped me navigate through my academic journey.",
            name: "Kevin Lius Bong",
            title: "Chemistry Student",
            image: "/avatar/kevin.png",
        },
    ];

    return (
        <div className="text-center mb-8 mt-8 px-4">
            <h1 className="text-2xl md:text-3xl font-bold text-blue-700 mb-10">What our students say</h1>
            <div className="flex flex-col md:flex-row md:space-x-8 w-full max-w-4xl justify-center mx-auto">
                {testimonials.map((testimonial, index) => (
                    <div
                        key={index}
                        className="flex-1 border border-blue-300 rounded-lg px-8 py-8 mx-2 mb-4 md:mb-0 bg-white transition-shadow duration-200 text-center"
                        style={{
                            minWidth: '280px',
                            maxWidth: '420px',
                            boxShadow: '0 2px 8px 0 rgba(30, 77, 179, 0.03)'
                        }}
                    >
                        <img
                            src={testimonial.image}
                            alt={`Photo of ${testimonial.name}`}
                            className="w-14 h-14 rounded-full mx-auto mb-4 object-cover object-center border-2 border-white shadow"
                            style={{ background: '#eaf0fb' }}
                        />
                        <p className="text-lg md:text-xl font-bold mb-2 text-center text-[#11143A]">"{testimonial.quote}"</p>
                        <p className="text-gray-500 mb-6 text-[15px] leading-relaxed">{testimonial.description}</p>
                        <div className="text-center">
                            <p className="font-bold text-[#11143A]">{testimonial.name}</p>
                            <p className="text-gray-400 text-[14px]">{testimonial.title}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Testimonials;