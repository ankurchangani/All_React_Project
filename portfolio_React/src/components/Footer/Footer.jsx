import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Logo from "../../assets/images/home/Ac.svg";

const Footer = () => {
  return (
    <footer
      className="relative py-12 sm:py-20 text-white"
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center space-y-6">
          {/* Logo & Name */}
          <div className="flex flex-col items-center">
            <img src={Logo} alt="Ankur Changani" className="w-16 sm:w-20 mb-2" />
            <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
              Ankur Changani
            </h2>
            <p className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-pink-400 text-transparent bg-clip-text mt-5 ">Front end Developer</p>
          </div>

          {/* Services Section */}
          <div className="flex flex-wrap justify-center gap-4 text-gray-300 font-medium">
            {[
              "HTML",
              "CSS3",
              "Bootstrap",
              "jQuery",
              "Tailwind CSS",
              "JavaScript",
              "React.js",
            ].map((service, index) => (
              <span
                key={index}
                className="px-4 py-2 rounded-lg text-white text-sm sm:text-base bg-gradient-to-r from-indigo-500 to-purple-600 shadow-lg"
              >
                {service}
              </span>
            ))}
          </div>

          {/* Navigation Links */}
          <ul className="flex flex-wrap justify-center space-x-6 sm:space-x-9 font-medium text-gray-300">
            {["Home", "About", "Skills", "Projects", "Contact"].map(
              (item, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="hover:text-white transition duration-300"
                  >
                    {item}
                  </a>
                </li>
              )
            )}
          </ul>

          {/* Social Icons */}
          <div className="flex space-x-6 mt-4">
            <a
              href="https://github.com/ankurchangani"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-3xl transition duration-300 transform hover:scale-110"
            >
              <FaGithub className="transition duration-300 bg-gradient-to-r from-gray-400 to-gray-200 text-transparent bg-clip-text hover:from-gray-500 hover:to-gray-300" />
            </a>
            <a
              href="https://www.linkedin.com/in/ankur-changani-07908830b/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-3xl transition duration-300 transform hover:scale-110"
            >
              <FaLinkedin className="transition duration-300 bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text hover:from-blue-500 hover:to-blue-700" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
