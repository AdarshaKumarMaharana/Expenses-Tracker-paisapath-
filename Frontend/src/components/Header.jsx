import { useState } from "react";
import { assets } from "../assets/assets.js";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        { name: "Home", to: "/home" },
        { name: "About Us", to: "#about" },
        { name: "Contact Us", to: "#contact" },
    ];

    const handleNavClick = (e, to) => {
        if (to.startsWith("#")) {
            e.preventDefault();
            const targetId = to.substring(1); // Remove the '#' from the ID
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: "smooth" });
            }
        }
        setIsMenuOpen(false); // Close mobile menu after click
    };

    return (
        <header className="sticky top-0 bg-gradient-to-br from-purple-100 via-gray-100 to-blue-100 border-b border-gray-200 z-50">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <div className="flex items-center gap-2">
                        <img
                            src={assets.logo}
                            alt="logo"
                            className="h-30 w-40"
                            onError={(e) => {
                                e.target.onerror = null;
                                e.target.src =
                                    "https://placehold.co/120x40/E2E8F0/4A5568?text=Logo+Not+Found";
                            }}
                        />
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                to={link.to}
                                key={link.name}
                                className="text-gray-600 hover:text-purple-600 transition-colors"
                                onClick={(e) => handleNavClick(e, link.to)}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>

                    {/* Action Buttons & Hamburger Menu */}
                    <div className="flex items-center space-x-4">
                        <div className="hidden sm:flex items-center space-x-4">
                            <Link
                                to="/login"
                                className="text-gray-600 hover:text-purple-600 transition-colors"
                            >
                                Login
                            </Link>
                            <Link
                                to="/signup"
                                className="bg-purple-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
                            >
                                Get Started
                            </Link>
                        </div>
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="lg:hidden p-2 rounded-md text-gray-600 hover:bg-gray-100"
                            aria-label="Toggle menu"
                        >
                            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
                <div className="lg:hidden bg-white border-t border-gray-200">
                    <div className="container mx-auto px-4 py-4">
                        <nav className="flex flex-col space-y-4">
                            {navLinks.map((link) => (
                                <Link
                                    to={link.to}
                                    key={link.name}
                                    className="text-gray-600 hover:text-purple-600 transition-colors"
                                    onClick={(e) => handleNavClick(e, link.to)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <div className="flex flex-col space-y-3 pt-4 border-t border-gray-100">
                                <Link
                                    to="/login"
                                    className="text-gray-600 hover:text-purple-600 transition-colors w-full text-left"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Login
                                </Link>
                                <Link
                                    to="/signup"
                                    className="bg-purple-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-purple-700 transition-colors text-center"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Get Started
                                </Link>
                            </div>
                        </nav>
                    </div>
                </div>
            )}

            <style >{`
                html {
                    scroll-behavior: smooth;
                }
            `}</style>
        </header>
    );
};

export default Header;