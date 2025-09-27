import { useState, useEffect } from "react";
import { User, TrendingUp, Shield, Quote, ChevronLeft, ChevronRight } from "lucide-react";

const AboutUs = () => {
    const testimonials = [
        {
            quote: "PaisaPath transformed how I manage my finances. It's intuitive and incredibly helpful!",
            author: "Sarah K., Entrepreneur",
        },
        {
            quote: "The insights from PaisaPath helped me save more than ever before. Highly recommend!",
            author: "Michael R., Software Engineer",
        },
        {
            quote: "Managing my budget has never been easier. PaisaPath is a game-changer!",
            author: "Anita P., Freelancer",
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
        }, 6000); // Auto-scroll every 6 seconds
        return () => clearInterval(interval);
    }, [testimonials.length]);

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
        );
    };

    const goToNext = () => {
        setCurrentIndex((prevIndex) => 
            (prevIndex + 1) % testimonials.length
        );
    };

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    return (
        <section id="about" className="min-h-screen bg-gradient-to-br from-purple-50 via-gray-50 to-blue-50 flex items-center justify-center py-12 md:py-16">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight animate-fade-in">
                    Discover PaisaPath
                </h2>
                <p className="mt-4 max-w-3xl mx-auto text-gray-700 text-lg md:text-xl leading-relaxed animate-fade-in-up">
                    PaisaPath is your ultimate partner in financial freedom. Effortlessly track your income, manage expenses, and plan budgets with precision. Unlock smarter financial decisions and achieve your goals with confidence.
                </p>

                <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
                    <div className="relative bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transform transition-all hover:-translate-y-2 group">
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-100 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
                        <Shield className="mx-auto h-12 w-12 text-purple-600 mb-4 animate-pulse" />
                        <h3 className="text-lg font-semibold text-gray-900">Uncompromised Security</h3>
                        <p className="mt-2 text-gray-600 leading-relaxed text-sm">
                            Your financial data is safeguarded with cutting-edge encryption, ensuring peace of mind.
                        </p>
                    </div>

                    <div className="relative bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transform transition-all hover:-translate-y-2 group">
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-100 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
                        <TrendingUp className="mx-auto h-12 w-12 text-purple-600 mb-4 animate-pulse" />
                        <h3 className="text-lg font-semibold text-gray-900">Actionable Insights</h3>
                        <p className="mt-2 text-gray-600 leading-relaxed text-sm">
                            Dive deep into your spending habits with smart analytics to maximize savings and growth.
                        </p>
                    </div>

                    <div className="relative bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transform transition-all hover:-translate-y-2 group">
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-100 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
                        <User className="mx-auto h-12 w-12 text-purple-600 mb-4 animate-pulse" />
                        <h3 className="text-lg font-semibold text-gray-900">Seamless Experience</h3>
                        <p className="mt-2 text-gray-600 leading-relaxed text-sm">
                            Enjoy a user-friendly interface designed for effortless financial management.
                        </p>
                    </div>
                </div>

                <div className="mt-12 max-w-4xl mx-auto relative">
                    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-100 to-blue-100 p-8 shadow-lg">
                        <div
                            className="flex transition-transform duration-700 ease-in-out"
                            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                        >
                            {testimonials.map((testimonial, index) => (
                                <div
                                    key={index}
                                    className="min-w-full flex flex-col items-center justify-center px-6"
                                >
                                    <Quote className="h-14 w-14 text-purple-400 mb-6 opacity-60 animate-pulse" />
                                    <p className="text-gray-700 text-lg md:text-xl italic leading-relaxed max-w-2xl">
                                        "{testimonial.quote}"
                                    </p>
                                    <p className="mt-6 text-gray-900 font-semibold text-lg">{testimonial.author}</p>
                                </div>
                            ))}
                        </div>
                        <button
                            onClick={goToPrevious}
                            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-purple-100 transition-colors"
                        >
                            <ChevronLeft className="h-6 w-6 text-purple-600" />
                        </button>
                        <button
                            onClick={goToNext}
                            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-purple-100 transition-colors"
                        >
                            <ChevronRight className="h-6 w-6 text-purple-600" />
                        </button>
                        <div className="flex justify-center mt-8 space-x-3">
                            {testimonials.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => goToSlide(index)}
                                    className={`h-3 w-3 rounded-full ${
                                        currentIndex === index ? "bg-purple-600 scale-125" : "bg-gray-300"
                                    } hover:bg-purple-400 transition-all duration-300`}
                                ></button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
                @keyframes fade-in {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                @keyframes fade-in-up {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fade-in {
                    animation: fade-in 1s ease-in-out;
                }
                .animate-fade-in-up {
                    animation: fade-in-up 1s ease-in-out;
                }
            `}</style>
        </section>
    );
};

export default AboutUs;