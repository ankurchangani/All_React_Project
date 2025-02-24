import React, { useState } from "react";
import Logo from "../../assets/images/home/Ac.svg";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-gradient-to-r from-[#635985] via-[#443C68] to-[#393053] w-full px-3  rounded-lg shadow-lg">
      <div className="container mx-auto">
        <nav className="flex justify-between items-center">
          {/* Logo */}
          <div>
            <img src={Logo} alt="logo" className="w-20 h-20" />
          </div>

          
          <ul className="hidden md:flex flex-grow justify-center items-center space-x-6 text-white font-semibold">
            {["Home", "About", "Skills", "Projects", "Contacts"].map((item, index) => (
              <li key={index} className="relative group">
                <a
                  className="block px-6 py-3 text-center rounded-lg transition-all duration-300
                  bg-transparent hover:bg-white hover:text-[#393053] hover:shadow-md"
                >
                  {item}
                </a>
                {/* Underline Animation */}
                <span className="absolute left-1/2 -bottom-2 w-0 h-[3px] bg-white transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
              </li>
            ))}
          </ul>

          {/* Hire Me Button (Styled & Centered) */}
          <div className="hidden md:flex justify-center">
            <a
              href="#hire-me"
              className="px-6 py-3 text-white font-semibold bg-[#443C68] rounded-full shadow-lg 
              transition duration-300 transform hover:bg-[#635985] hover:scale-110 active:scale-95"
            >
              Hire Me
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={toggleMobileMenu} className="md:hidden text-white text-3xl ml-auto">
            ☰
          </button>
        </nav>

        {/* Mobile Menu (Centered & Responsive) */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 flex justify-center">
            <ul className="flex flex-col items-center space-y-4 text-white font-semibold w-full">
              {["Home", "About", "Projects", "Contacts"].map((item, index) => (
                <li key={index} className="w-full text-center">
                  <a
                    className="block w-full px-6 py-3 rounded-lg bg-[#393053] hover:bg-[#443C68] 
                    transition-all duration-300 text-center"
                  >
                    {item}
                  </a>
                </li>
              ))}
              <li className="w-full text-center">
                <a
                  href="#hire-me"
                  className="block w-full px-6 py-3 bg-[#443C68] hover:bg-[#635985] rounded-lg 
                  text-white shadow-lg transition duration-300 transform hover:scale-110 active:scale-95"
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
