import { FaBell, FaHeart, FaMapMarkerAlt, FaSearch, FaShoppingCart } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  const isActive = (path) => location.pathname.startsWith(path);

  return (
    <div className="sticky top-0 z-50 bg-[#eef2ff] shadow-sm">
      {/* Primary Top Nav */}
      <div className="flex justify-between items-center px-6 py-2 text-sm">
        <div className="flex gap-6 text-gray-700">
          <Link to="/about">About</Link>
          <Link to="/products">Products</Link>
          <Link to="/services">Services</Link>
          <Link to="/market">Market</Link>
          <Link to="/packages">Packages</Link>
        </div>
        <div className="flex gap-6 text-gray-600">
          <Link to="/sell">Sell With Us</Link>
          <Link to="/contact">Contact Us</Link>
          <Link to="/app">Download App</Link>
        </div>
      </div>

      {/* Logo + Secondary Nav */}
      <div className="flex items-center justify-between px-6 py-3">
        {/* Logo and route highlight buttons */}
        <div className="flex items-center gap-6">
          <Link to="/" className="text-2xl font-bold text-gray-800">
            My logo
          </Link>

          {/* Highlight current section */}
          <div className="flex gap-2 bg-white p-1 rounded-full shadow-inner">
            <Link
              to="/products"
              className={`px-4 py-1 rounded-full ${
                isActive("/products")
                  ? "bg-gray-200 font-semibold text-gray-900"
                  : "text-gray-600"
              }`}
            >
              Products
            </Link>
            <Link
              to="/services"
              className={`px-4 py-1 rounded-full ${
                isActive("/services")
                  ? "bg-gray-200 font-semibold text-gray-900"
                  : "text-gray-600"
              }`}
            >
              Services
            </Link>
          </div>
        </div>

        {/* Right-side icons */}
        <div className="flex items-center gap-4 text-xl text-gray-700">
          <FaSearch className="cursor-pointer" />
          <FaMapMarkerAlt className="cursor-pointer" />
          <FaBell className="cursor-pointer" />
          <FaHeart className="cursor-pointer" />
          <FaShoppingCart className="cursor-pointer" />
          <button className="bg-blue-600 text-white px-4 py-1.5 rounded-md hover:bg-blue-700">
            Log in
          </button>
        </div>
      </div>
    </div>
  );
}
