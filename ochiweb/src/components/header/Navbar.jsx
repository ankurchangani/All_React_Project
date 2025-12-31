import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "./Logo";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="w-full">
      <div className="container mx-auto grid grid-cols-3 items-center p-4">
        <div className="col-span-1 text-2xl font-bold uppercase">
          <Logo />
        </div>

        <nav
          className={`col-span-1 justify-self-center lg:flex space-x-6 hidden lg:block`}
        >
          {["Services", "Our Work", "About Us", "Insights"].map(
            (item, index) => (
              <a
                key={index}
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                className="text-lg font-semibold relative group"
              >
                {item}
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
            )
          )}
        </nav>

        <div className="col-span-1 flex justify-end items-center space-x-4">
          <a
            href="#contact"
            className="hidden lg:block px-4 py-2 text-lg font-semibold text-white "
          >
            Contact
          </a>

          <button
            onClick={toggleMenu}
            className="lg:hidden text-2xl text-gray-800"
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden bg-white shadow-md">
          <div className="flex flex-col items-center space-y-4 p-4">
            {["Services", "Our Work", "About Us", "Insights"].map(
              (item, index) => (
                <a
                  key={index}
                  href={`#${item.toLowerCase().replace(" ", "-")}`}
                  className="text-lg font-semibold text-gray-800 hover:text-blue-600"
                >
                  {item}
                </a>
              )
            )}
            <a
              href="#contact"
              className="px-4 py-2 text-lg font-semibold text-white bg-blue-600 rounded "
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
