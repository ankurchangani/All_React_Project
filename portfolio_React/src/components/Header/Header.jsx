import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-gradient-to-r from-gray-700 to-gray-900 shadow-lg dark:bg-gray-800">
      <div className="container mx-auto px-6 py-4">
        <nav className="flex justify-between items-center">
          {/* Logo */}
          <div
            className="text-white text-3xl font-bold transform transition-all duration-500 hover:scale-110 hover:translate-y-2"
            style={{
              background: "linear-gradient(90deg, #ff7eb3, #ff758c, #ff655b, #f94e44)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              animation: "gradientAnimation 3s ease infinite",
            }}
          >
            Ankur Changani
          </div>
          {/* Desktop Menu */}
          <ul className="hidden md:flex justify-center space-x-6 text-white font-semibold dark:text-white flex-grow">
            <li className="transform transition-all duration-300 hover:scale-110 hover:translate-y-1">


              <Link to="/" className="hover:text-gray-300" >
                Home
              </Link>
            </li>
            <li className="transform transition-all duration-300 hover:scale-110 hover:translate-y-1">

              <Link to="/about" className="hover:text-gray-300" >
                About
              </Link>
            </li>

            <li className="transform transition-all duration-300 hover:scale-110 hover:translate-y-1">

              <Link to="/skills" className="hover:text-gray-300" >
                Skills
              </Link>
            </li>
            <li className="transform transition-all duration-300 hover:scale-110 hover:translate-y-1">
              {/* <a href="#projects" className="hover:text-gray-300">Projects</a> */}

              <Link to="/projects" className="hover:text-gray-300" >
                Projects
              </Link>
            </li>
            <li className="transform transition-all duration-300 hover:scale-110 hover:translate-y-1">
              {/* <a href="#contacts" className="hover:text-gray-300">Contacts</a> */}

              <Link to="/contacts" className="hover:text-gray-300" >
                Contacts
              </Link>
            </li>
          </ul>

          {/* Let's Talk Button (Desktop) */}
          <div className="hidden md:block ml-auto">
            <a
              href="#lets-talk"
              className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 hover:text-gray-100 transition duration-300"
            >
              Let's Talk
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
              <li>

                <Link to="/" className="block text-center hover:text-gray-300">
                  Home
                </Link>
              </li>
              <li>

                <Link to="/about" className="block text-center hover:text-gray-300">
                  About
                </Link>
              </li>
              <li>


                <Link to="/projects" className="block text-center hover:text-gray-300">
                  Projects
                </Link>
              </li>
              <li>

                <Link to="/contacts" className="block text-center hover:text-gray-300">
                  Contacts
                </Link>
              </li>
              <li>
                <a
                  href="#lets-talk"
                  className="block bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 hover:text-gray-100 transition duration-300 text-center"
                >
                  Let's Talk
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
