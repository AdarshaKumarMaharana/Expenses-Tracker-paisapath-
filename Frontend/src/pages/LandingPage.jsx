import Header from "../components/Header.jsx";
import HeroSection from "../components/HeroSection.jsx";
import ProductShowcase from "../components/ProductShowcase.jsx";
import AboutUs from "../components/AboutUs.jsx";
import ContactUs from "../components/ContactUs.jsx";
import Footer from "../components/Footer.jsx";
import ScrollToTop from "../components/ScrollToTop.jsx"; // import

const LandingPage = () => {
    return (
        <div className="bg-white font-sans text-gray-800 relative">
            <Header />
            <main>
                <HeroSection />
                <ProductShowcase />
                <AboutUs />
                <ContactUs />
                <Footer />
            </main>
            <ScrollToTop /> {/* add scroll to top button */}
        </div>
    )
}

export default LandingPage;
