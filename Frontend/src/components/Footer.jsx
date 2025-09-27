const Footer = () => {
    return (
        <>
            <div className="border-t border-gray-300 mx-8"></div>
        <footer className="bg-gradient-to-br from-purple-50 via-gray-50 to-blue-50 text-gray-900 py-6">
            <div className="container mx-auto px-30">
                <div className="flex flex-col md:flex-row items-center md:items-start justify-between text-center md:text-left gap-4">
                    <div className="flex flex-col items-center md:items-start">
                        <h3 className="text-3xl font-extrabold text-gray-900 animate-fade-in">
                            {/* Placeholder for PaisaPath logo */}
                            <span className="inline-block">PaisaPath</span>
                        </h3>
                        <p className="mt-2 text-gray-700 text-sm leading-relaxed animate-fade-in-up">
                            Empowering your financial freedom with smart tools and insights.
                        </p>
                    </div>
                    <p className="text-gray-600 text-sm animate-fade-in-up md:self-end">
                        &copy; {new Date().getFullYear()} PaisaPath. All rights reserved.
                    </p>
                </div>
            </div>

            <style>{`
                @keyframes fade-in {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                @keyframes fade-in-up {
                    from { opacity: 0; transform: translateY(10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fade-in {
                    animation: fade-in 1s ease-in-out;
                }
                .animate-fade-in-up {
                    animation: fade-in-up 1s ease-in-out;
                }
            `}</style>
        </footer>
        </>
    );
};

export default Footer;