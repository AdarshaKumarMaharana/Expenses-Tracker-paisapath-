import { useState } from "react";
import { Mail, MessageSquare, Send, Instagram, Twitter, Facebook, Linkedin } from "lucide-react";

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const subject = encodeURIComponent(`Contact Request from ${formData.name}`);
        const body = encodeURIComponent(
            `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
        );
        window.location.href = `mailto:eadarsha2003@gmail.com?subject=${subject}&body=${body}`;
        setFormData({ name: "", email: "", message: "" });
    };

    return (
        <section id="contact" className="min-h-screen bg-gradient-to-br from-purple-50 via-gray-50 to-blue-50 flex items-center justify-center py-12 md:py-16">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight text-center animate-fade-in">
                    Let's Connect
                </h2>
                <p className="mt-4 max-w-3xl mx-auto text-gray-700 text-lg md:text-xl leading-relaxed text-center animate-fade-in-up">
                    Have questions or need support? Send us a message, and we'll assist you promptly on your financial journey.
                </p>

                <div className="mt-10 max-w-5xl mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-10 grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Form Section */}
                    <div className="flex flex-col justify-center">
                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div className="relative">
                                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-purple-600" />
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Your Name"
                                    required
                                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:border-purple-600 focus:ring-2 focus:ring-purple-100 outline-none transition-colors bg-gray-50 text-gray-700"
                                />
                            </div>
                            <div className="relative">
                                <MessageSquare className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-purple-600" />
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Your Email"
                                    required
                                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:border-purple-600 focus:ring-2 focus:ring-purple-100 outline-none transition-colors bg-gray-50 text-gray-700"
                                />
                            </div>
                            <div className="relative">
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Your Message"
                                    required
                                    rows="4"
                                    className="w-full p-4 rounded-lg border border-gray-200 focus:border-purple-600 focus:ring-2 focus:ring-purple-100 outline-none transition-colors bg-gray-50 text-gray-700 resize-none"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-purple-700 transition-colors flex items-center justify-center gap-2"
                            >
                                <Send className="h-5 w-5" />
                                Send Message
                            </button>
                        </form>
                    </div>

                    {/* Contact Info & Social Icons */}
                    <div className="flex flex-col justify-center items-center lg:items-start text-center lg:text-left bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl p-6">
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">Contact Information</h3>
                        <p className="text-gray-600 leading-relaxed">
                            Email:{" "}
                            <a
                                href="mailto:eadarsha2003@gmail.com"
                                className="text-purple-600 hover:text-purple-800 transition-colors font-semibold"
                            >
                                support@paisapath.com
                            </a>
                        </p>
                        <p className="mt-2 text-gray-600 leading-relaxed">
                            Developer:{" "}
                            <a
                                href="https:/adarsha.me"
                                className="text-purple-600 hover:text-purple-800 transition-colors font-semibold"
                            >
                                Adarsha kumar
                            </a>
                        </p>
                        <p className="mt-2 text-gray-600 leading-relaxed">
                            Phone: <span className="font-semibold">+91 7205230646</span>
                        </p>
                        <div className="mt-6">
                            <h4 className="text-lg font-semibold text-gray-900">Connect With Us</h4>
                            <div className="flex justify-center lg:justify-start space-x-4 mt-4">
                                <a
                                    href="https://www.instagram.com/ur.adarsha?utm_source=qr&igsh=MW5qY254ZHJqbWY1cA=="
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-purple-600 hover:text-purple-800 transition-colors p-2 rounded-full bg-gray-100 hover:bg-purple-100"
                                >
                                    <Instagram className="h-6 w-6" />
                                </a>
                                <a
                                    href="https://twitter.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-purple-600 hover:text-purple-800 transition-colors p-2 rounded-full bg-gray-100 hover:bg-purple-100"
                                >
                                    <Twitter className="h-6 w-6" />
                                </a>
                                <a
                                    href="https://facebook.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-purple-600 hover:text-purple-800 transition-colors p-2 rounded-full bg-gray-100 hover:bg-purple-100"
                                >
                                    <Facebook className="h-6 w-6" />
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/adarsha-kumar-maharana"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-purple-600 hover:text-purple-800 transition-colors p-2 rounded-full bg-gray-100 hover:bg-purple-100"
                                >
                                    <Linkedin className="h-6 w-6" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
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

export default ContactUs;