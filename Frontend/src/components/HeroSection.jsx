import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
    return (
        <section id="home" className="-mt-40 md:mt-0 min-h-[calc(100vh-2.5rem)] md:min-h-screen bg-gradient-to-br from-purple-50 via-gray-50 to-blue-50 flex items-center justify-center py-12 md:py-16">

            <div className="container mx-auto px-6 text-center">
                <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900 leading-tight animate-fade-in">
                    Master Your Finances with Ease
                </h1>
                <p className="mt-4 max-w-3xl mx-auto text-lg md:text-xl text-gray-700 leading-relaxed animate-fade-in-up">
                    Build a secure financial future with PaisaPath. Track income, manage expenses, and achieve your goals effortlessly with our intelligent tools.
                </p>
                <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
                    <Link
                        to="/signup"
                        className="w-full sm:w-auto bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold text-lg shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl animate-slide-up"
                    >
                        Start Tracking for Free
                    </Link>
                    <Link
                        to="/signup"
                        className="w-full sm:w-auto bg-white text-gray-800 px-8 py-3 rounded-lg font-semibold text-lg shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center justify-center gap-2 animate-slide-up delay-100"
                    >
                        Learn More <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                </div>
                <div className="mt-12">
                    <p className="text-gray-600 text-sm animate-fade-in-up delay-200">
                        Trusted by thousands to simplify financial management
                    </p>
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
                @keyframes slide-up {
                    from { opacity: 0; transform: translateY(30px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fade-in {
                    animation: fade-in 1s ease-in-out;
                }
                .animate-fade-in-up {
                    animation: fade-in-up 1s ease-in-out;
                }
                .animate-slide-up {
                    animation: slide-up 0.8s ease-in-out;
                }
                .delay-100 {
                    animation-delay: 0.1s;
                }
                .delay-200 {
                    animation-delay: 0.2s;
                }
            `}</style>
        </section>
    );
};

export default HeroSection;