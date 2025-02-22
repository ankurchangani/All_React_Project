import React, { useState } from "react";
import Logo from '../../assets/images/logo/Logo.png'

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-gradient-to-r from-purple-700 to-indigo-900 shadow-lg dark:bg-gray-800">
      <div className="container mx-auto px-2">
        <nav className="flex justify-between items-center">
          {/* Logo */}
          <div
            style={{
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              animation: "gradientAnimation 3s ease infinite",
            }}
          >
           <img src = {Logo} alt="logo" className="w-20 h-20" />
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex justify-center space-x-6 text-white font-semibold dark:text-white flex-grow">
            {["Home", "About", "Skills", "Projects", "Contacts"].map(
              (item, index) => (
                <li
                  key={index}
                  className="relative transform transition-all duration-300 px-6 py-3 rounded-full hover:bg-white hover:text-gray-800 hover:shadow-xl hover:scale-110 hover:opacity-90"
                  style={{
                    borderRadius: "50px",
                    transition: "all 0.3s ease",
                  }}
                >
                  <a className="block">{item}</a>
                </li>
              )
            )}
          </ul>

          {/* Hire Me Button (3D Effect with Hover Scale) */}
          <div className="hidden md:block ml-auto">
            <a
              href="#hire-me"
              className="relative px-6 py-3 text-white font-semibold bg-gradient-to-r from-pink-500 to-red-500 rounded-full shadow-lg transition duration-300 transform hover:scale-110 active:scale-95"
              style={{
                borderRadius: "50px",
                boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.3)",
              }}
            >
              Hire Me
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden text-white text-3xl ml-auto"
          >
            ☰
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <ul className="flex flex-col space-y-4 text-white font-semibold mt-4 dark:text-white">
              {["Home", "About", "Projects", "Contacts"].map((item, index) => (
                <li key={index}>
                  <a className="block text-center px-6 py-3 rounded-full hover:bg-white hover:text-gray-800 hover:shadow-xl hover:scale-110 hover:opacity-90 transition duration-300">
                    {item}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#hire-me"
                  className="block text-center px-6 py-3 bg-gradient-to-r from-pink-500 to-red-500 rounded-full text-white shadow-lg transition duration-300 transform hover:scale-110 active:scale-95"
                  style={{
                    borderRadius: "50px",
                    boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.3)",
                  }}
                >
                  Hire Me
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
