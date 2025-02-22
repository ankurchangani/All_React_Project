import React, { useState } from "react";
import { FaShoppingCart, FaBars } from "react-icons/fa";

const EcommerceHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false); 

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="container mx-auto">
      <header className="bg-gray-100 shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="text-2xl font-bold text-gray-800">Tecolangy</div>

          {/* Navigation Links for Desktop */}
          <nav className="hidden md:flex space-x-6">
            <a href="#home" className="text-gray-700 hover:text-blue-500 transition">
              Home
            </a>
            <a href="#feature" className="text-gray-700 hover:text-blue-500 transition">
              Feature
            </a>
            <a href="#blog" className="text-gray-700 hover:text-blue-500 transition">
              Blog
            </a>
            <a href="#categories" className="text-gray-700 hover:text-blue-500 transition">
              Categories
            </a>
            <a href="#about" className="text-gray-700 hover:text-blue-500 transition">
              About Us
            </a>
            <a href="#contact" className="text-gray-700 hover:text-blue-500 transition">
              Contact Us
            </a>
          </nav>

          {/* Cart and Auth Buttons */}
          <div className="flex items-center space-x-4">
            {/* Add to Cart Icon */}
            <button
              className="text-gray-700 hover:text-blue-500 relative"
              aria-label="Cart"
            >
              <FaShoppingCart className="w-6 h-6" />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                3
              </span>
            </button>

            {/* Login/Register Buttons for Desktop */}
            <div className="hidden md:flex space-x-2">
              <button className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded hover:bg-blue-600">
                Login
              </button>
              <button className="px-4 py-2 text-sm font-medium text-blue-500 border border-blue-500 rounded hover:bg-blue-500 hover:text-white">
                Register
              </button>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="block md:hidden text-gray-700 focus:outline-none"
            onClick={toggleMenu}
          >
            <FaBars className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="md:hidden bg-gray-100 space-y-4 py-4 px-4">
          <a href="#home" className="block text-gray-700 hover:text-blue-500 transition">
            Home
          </a>
          <a href="#feature" className="block text-gray-700 hover:text-blue-500 transition">
            Feature
          </a>
          <a href="#blog" className="block text-gray-700 hover:text-blue-500 transition">
            Blog
          </a>
          <a href="#categories" className="block text-gray-700 hover:text-blue-500 transition">
            Categories
          </a>
          <a href="#about" className="block text-gray-700 hover:text-blue-500 transition">
            About Us
          </a>
          <a href="#contact" className="block text-gray-700 hover:text-blue-500 transition">
            Contact Us
          </a>

          {/* Login/Register Buttons for Mobile */}
          <div className="space-y-2">
            <button className="w-full px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded hover:bg-blue-600">
              Login
            </button>
            <button className="w-full px-4 py-2 text-sm font-medium text-blue-500 border border-blue-500 rounded hover:bg-blue-500 hover:text-white">
              Register
            </button>
          </div>
        </nav>
      )}
    </div>
  );
};

export default EcommerceHeader;
