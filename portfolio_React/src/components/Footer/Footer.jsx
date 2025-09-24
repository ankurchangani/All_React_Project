import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import Logo from "../../assets/images/home/Ac.svg";

const Footer = () => {
  return (
    <footer className="relative py-20 sm:py-20 text-white">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="flex flex-col items-center text-center space-y-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Logo & Name */}
          <motion.div
            className="flex flex-col items-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.img
              src={Logo}
              alt="Ankur Changani"
              className="w-16 sm:w-20 mb-2"
              whileHover={{ scale: 1.2, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
            <motion.h2
              className="text-2xl font-bold bg-gradient-to-r from-[#443C68] to-[#635985] text-transparent bg-clip-text"
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              Ankur Changani
            </motion.h2>
            <motion.p
              className="text-2xl font-bold bg-gradient-to-r from-[#443C68] to-[#393053] text-transparent bg-clip-text mt-5"
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              Front-end Developer
            </motion.p>
          </motion.div>

          {/* Services Section */}
          <motion.div
            className="flex flex-wrap justify-center gap-4 text-gray-300 font-medium"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
          >
            {[
              "HTML",
              "CSS3",
              "Bootstrap",
              "jQuery",
              "Tailwind CSS",
              "JavaScript",
              "React.js",
              "Next.js",
            ].map((service, index) => (
              <motion.span
                key={index}
                className="px-4 py-2 rounded-lg text-white text-sm sm:text-base bg-gradient-to-r from-[#635985] to-[#443C68] shadow-lg"
                whileHover={{ scale: 1.1, rotate: 3 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                {service}
              </motion.span>
            ))}
          </motion.div>

          {/* Navigation Links */}
          <motion.ul
            className="flex flex-wrap justify-center space-x-6 sm:space-x-9 font-medium text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            {["Home", "About", "Skills", "Projects", "Contact"].map(
              (item, index) => (
                <motion.li
                  key={index}
                  whileHover={{ scale: 1.2, y: -3 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  <a href="#" className="hover:text-white transition duration-300">
                    {item}
                  </a>
                </motion.li>
              )
            )}
          </motion.ul>

          {/* Social Icons */}
          <motion.div
            className="flex space-x-6 mt-4"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <motion.a
              href="https://github.com/ankurchangani"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-3xl"
              whileHover={{ scale: 1.2, rotate: 10 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <FaGithub />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/ankur-changani-07908830b/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-3xl"
              whileHover={{ scale: 1.2, rotate: -10 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <FaLinkedin />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
