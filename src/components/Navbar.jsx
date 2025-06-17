// src/components/Navbar.jsx
import { FaUser, FaShoppingCart } from 'react-icons/fa';

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 shadow-md bg-white">
      {/* Logo */}
      <div className="text-2xl font-bold text-gray-800">
        My logo
      </div>

      {/* Nav links */}
      <ul className="flex space-x-6 text-gray-600 font-medium">
        <li className="hover:text-black cursor-pointer">Home</li>
        <li className="hover:text-black cursor-pointer">Services</li>
        <li className="hover:text-black cursor-pointer">About</li>
        <li className="hover:text-black cursor-pointer">More</li>
      </ul>

      {/* Right section */}
      <div className="flex items-center space-x-4">
        {/* Search bar */}
        <input
          type="text"
          placeholder="Search..."
          className="border rounded-md px-3 py-1 focus:outline-none focus:ring-2 focus:ring-yellow-500"
        />
        {/* Icons */}
        <FaUser className="text-xl text-gray-600 hover:text-black cursor-pointer" />
        <FaShoppingCart className="text-xl text-gray-600 hover:text-black cursor-pointer" />
        {/* Login button */}
        <button className="bg-blue-600 text-white px-4 py-1.5 rounded-md hover:bg-blue-700 transition">
          Login
        </button>
      </div>
    </nav>
  );
}
