import { assets } from "../assets/assets.js";

const ProductShowcase = () => {
    return (
        <section className="-mt-70 bg-gradient-to-br from-purple-50 via-gray-50 to-blue-50 flex items-center justify-center py-12 md:py-16">
            <div className="container mx-auto px-6 sm:px-12 md:px-16 lg:px-20 text-center">
                
                <div className="mt-10 max-w-5xl mx-auto">
                    <div className="relative bg-white rounded-2xl shadow-lg p-4 md:p-6 animate-slide-up">
                        <img
                            src={assets.landing}
                            className="w-full h-auto object-cover rounded-lg"
                            alt="PaisaPath App Dashboard"
                            onError={(e) => {
                                e.target.onerror = null;
                                e.target.src =
                                    "https://placehold.co/1200x600/E2E8F0/4A5568?text=Image+Not+Found";
                            }}
                        />
                    </div>
                </div>
                <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-gray-700 leading-relaxed animate-fade-in-up">
                    See how our intuitive dashboard simplifies tracking your income, expenses, and financial goals.
                </p>
            </div>

            <style >{`
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
            `}</style>
        </section>
    );
};

export default ProductShowcase;