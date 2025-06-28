import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white text-gray-700 border-t border-gray-200 mt-10 px-6 py-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">

        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 mb-2">
            <img src="public/Logo/logo.png" alt="TaskonFly Logo" className="h-8 w-8" />
            <span className="text-xl font-extrabold tracking-wide">
              <span className="text-black">Task</span>
              <span className="text-[#FFAC1C]">onFly</span>
            </span>
          </div>
          <p className="text-sm text-gray-600">
            Fast, reliable, and affordable courier service across the country.
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="text-sm font-semibold mb-3">Company</h4>
          <ul className="text-sm space-y-2">
            <li><Link to="/about" className="hover:text-[#FFAC1C]">About Us</Link></li>
            <li><Link to="/services" className="hover:text-[#FFAC1C]">Services</Link></li>
            <li><Link to="/coverage" className="hover:text-[#FFAC1C]">Coverage</Link></li>
            <li><Link to="/pricing" className="hover:text-[#FFAC1C]">Pricing</Link></li>
          </ul>
        </div>

        {/* For Riders */}
        <div>
          <h4 className="text-sm font-semibold mb-3">Become a Rider</h4>
          <ul className="text-sm space-y-2">
            <li><Link to="/be-a-rider" className="hover:text-[#FFAC1C]">Join as a Rider</Link></li>
            <li><Link to="/signin" className="hover:text-[#FFAC1C]">Rider Login</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-sm font-semibold mb-3">Contact</h4>
          <p className="text-sm">Email: support@taskonfly.com</p>
          <p className="text-sm">Phone: +880 1234-567890</p>
          <p className="text-sm mt-2">Dhaka, Bangladesh</p>

          {/* Social icons here */}
          <div className="flex gap-3 mt-4">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="text-gray-600 hover:text-[#FFAC1C] transition text-lg">
              <FaFacebookF />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-gray-600 hover:text-[#FFAC1C] transition text-lg">
              <FaTwitter />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-gray-600 hover:text-[#FFAC1C] transition text-lg">
              <FaInstagram />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-gray-600 hover:text-[#FFAC1C] transition text-lg">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-gray-300 mt-6 pt-4 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} TaskonFly. All rights reserved.
      </div>
    </footer>
  );
}
