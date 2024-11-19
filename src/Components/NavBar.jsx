import { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className="sticky top-0 z-50 bg-white/70 backdrop-blur-lg shadow-md p-4 flex justify-between items-center">
            {/* Logo */}
            <div className="font-extrabold text-xl md:text-2xl sm:text-lg flex-shrink-0">
                Career Guide
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex space-x-5">
                <Link to="/" className="hover:underline text-sm md:text-base">Home</Link>
                <Link to="/counselors" className="hover:underline text-sm md:text-base">Counselors</Link>
                <Link to="/profile" className="hover:underline text-sm md:text-base">My Profile</Link>
                <Link to="/services" className="hover:underline text-sm md:text-base">Services</Link>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="md:hidden flex items-center">
                <button
                    onClick={toggleMenu}
                    className="text-xl focus:outline-none"
                >
                    ☰
                </button>
            </div>

            {/* Login Section */}
            <div className="flex items-center gap-2">
                <iframe
                    className="w-12 h-12 md:w-16 md:h-16"
                    src="https://lottie.host/embed/21c0f04d-247e-460b-921b-f165217a9ef3/Mov0qGZhSD.json"
                ></iframe>
                <button className="btn btn-neutral rounded-badge px-4 py-2 text-sm md:text-base">
                    Login
                </button>
            </div>

            {/* Mobile Dropdown Menu */}
            {menuOpen && (
                <div className="absolute top-16 left-0 w-full bg-white shadow-lg p-4 space-y-2 md:hidden">
                    <Link to="/" className="block hover:underline text-sm">Home</Link>
                    <Link to="/counselors" className="block hover:underline text-sm">Counselors</Link>
                    <Link to="/profile" className="block hover:underline text-sm">My Profile</Link>
                    <Link to="/services" className="block hover:underline text-sm">Services</Link>
                </div>
            )}
        </div>
    );
};

export default NavBar;
