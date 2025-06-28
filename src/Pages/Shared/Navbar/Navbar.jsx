import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const linkClasses = (path) =>
    `text-gray-600 px-3 py-1 rounded-full transition-colors duration-200 hover:text-[#FFAC1C] hover:bg-[#ffac1c33] ${
      location.pathname === path ? "text-[#FFAC1C] bg-[#ffac1c33]" : ""
    }`;

  return (
    <nav className="fixed top-4 left-4 right-4 z-50 bg-white text-gray-800 shadow-lg rounded-xl px-6 py-3 flex flex-wrap items-center justify-between">
      {/* Logo (clickable to home) */}
      <Link to="/" className="flex items-center gap-2">
        <img src="public/Logo/logo.png" alt="TaskonFly Logo" className="h-8 w-8" />
        <span className="text-xl font-extrabold tracking-wide whitespace-nowrap">
          <span className="text-black">Task</span>
          <span className="text-[#FFAC1C]">onFly</span>
        </span>
      </Link>

      {/* Desktop nav links */}
      <div className="hidden md:flex gap-3 text-sm font-medium">
        <Link to="/pricing" className={linkClasses("/pricing")}>Pricing</Link>
        <Link to="/services" className={linkClasses("/services")}>Services</Link>
        <Link to="/coverage" className={linkClasses("/coverage")}>Coverage</Link>
        <Link to="/about" className={linkClasses("/about")}>About Us</Link>
        <Link to="/be-a-rider" className={linkClasses("/be-a-rider")}>Be a Rider</Link>
      </div>

      {/* Auth buttons + Hamburger */}
      <div className="flex items-center gap-3">
        {/* Desktop auth buttons */}
        <div className="hidden md:flex gap-3">
          <Link
            to="/signin"
            className="border border-gray-400 text-gray-800 px-3 py-1 rounded-md text-sm font-medium hover:bg-gray-100 transition"
          >
            Sign In
          </Link>
          <Link
            to="/signup"
            className="bg-[#FFAC1C] text-white px-3 py-1 rounded-md text-sm font-medium hover:bg-orange-400 transition"
          >
            Sign Up
          </Link>
        </div>

        {/* Hamburger for mobile */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          className="md:hidden flex items-center px-3 py-2 text-gray-700 hover:text-[#FFAC1C] transition"
        >
          <svg
            className="fill-current h-5 w-5"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            {menuOpen ? (
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              />
            ) : (
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="w-full mt-3 md:hidden flex flex-col gap-2 border-t border-gray-200 pt-3">
          <Link to="/pricing" className={linkClasses("/pricing")} onClick={() => setMenuOpen(false)}>Pricing</Link>
          <Link to="/services" className={linkClasses("/services")} onClick={() => setMenuOpen(false)}>Services</Link>
          <Link to="/coverage" className={linkClasses("/coverage")} onClick={() => setMenuOpen(false)}>Coverage</Link>
          <Link to="/about" className={linkClasses("/about")} onClick={() => setMenuOpen(false)}>About Us</Link>
          <Link to="/be-a-rider" className={linkClasses("/be-a-rider")} onClick={() => setMenuOpen(false)}>Be a Rider</Link>

          <div className="flex gap-3 mt-2 px-1">
            <Link
              to="/signin"
              className="border border-gray-400 text-gray-800 px-3 py-1 rounded-md text-sm font-medium hover:bg-gray-100 transition flex-1 text-center"
              onClick={() => setMenuOpen(false)}
            >
              Sign In
            </Link>
            <Link
              to="/signup"
              className="bg-[#FFAC1C] text-white px-3 py-1 rounded-md text-sm font-medium hover:bg-orange-400 transition flex-1 text-center"
              onClick={() => setMenuOpen(false)}
            >
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
