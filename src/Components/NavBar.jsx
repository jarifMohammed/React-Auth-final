import { button, div } from "framer-motion/client";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
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
        <Link to="/" className="hover:underline text-sm md:text-base">
          Home
        </Link>
        <Link to="/becomeMentor" className="hover:underline text-sm md:text-base">
          Apply 
        </Link>
        <Link to="/profile" className="hover:underline text-sm md:text-base">
          My Profile
        </Link>
        <Link to="/services" className="hover:underline text-sm md:text-base">
          Services
        </Link>
      </div>

      {/* Mobile Menu Toggle */}
      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu} className="text-xl focus:outline-none">
          ☰
        </button>
      </div>

      {/* Login Section */}
      <div className="flex items-center gap-2">
        {user && user?.email ? (
          <div>
            <img
              src={user?.photoURL}
              alt="User Profile"
              className="w-10 h-10 rounded-full object-cover"
            />
            <p>{user.displayName}</p>
          </div>
        ) : (
          <iframe
            className="w-12 h-12 md:w-16 md:h-16"
            src="https://lottie.host/embed/21c0f04d-247e-460b-921b-f165217a9ef3/Mov0qGZhSD.json"
          ></iframe>
        )}

        {user?.email ? (
          <button
            onClick={logOut}
            className="btn btn-neutral rounded-badge px-4 py-2 text-sm md:text-base"
          >
            {" "}
            Log-Out
          </button>
        ) : (
          <Link
            to="/auth/login"
            className="btn btn-neutral rounded-badge px-4 py-2 text-sm md:text-base"
          >
            Login
          </Link>
        )}
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-lg p-4 space-y-2 md:hidden">
          <Link to="/" className="block hover:underline text-sm">
            Home
          </Link>
          <Link to="/counselors" className="block hover:underline text-sm">
            Counselors
          </Link>
          <Link to="/profile" className="block hover:underline text-sm">
            My Profile
          </Link>
          <Link to="/services" className="block hover:underline text-sm">
            Services
          </Link>
        </div>
      )}
    </div>
  );
};

export default NavBar;
