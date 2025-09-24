import React from "react";
import { motion } from "framer-motion";
import imgMe from "../../assets/images/me/me.jpg";
import Ac from "../../assets/images/home/Ac.svg";
import { FaReact, FaCss3Alt } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import Resume from "../../assets/Resume/Resume.pdf";

const Home = () => {
  const imageVariant = {
    hidden: { opacity: 0, scale: 0.6 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1, ease: "easeOut" } },
  };

  const nameVariant = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeOut", delay: 1 } },
  };

  const titleVariant = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeOut", delay: 1.3 } },
  };

  const descVariant = {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeOut", delay: 1.6 } },
  };

  const buttonContainer = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2, delayChildren: 2 } },
  };

  const buttonVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  return (
    <section className="relative flex flex-col items-center text-center py-12 sm:py-16 md:py-24 pt-28 text-white min-h-screen overflow-x-hidden" id="home">
      <img src={Ac} alt="AC Logo" className="absolute top-24 left-4 sm:left-6 w-12 h-12 sm:w-16 sm:h-16 animate-pulse" />
      <FaReact className="absolute top-24 right-4 sm:right-6 text-blue-500 text-3xl sm:text-4xl md:text-5xl animate-spin" />
      <SiJavascript className="absolute bottom-7 left-4 sm:left-6 text-yellow-500 text-5xl sm:text-6xl md:text-7xl animate-bounce" />
      <FaCss3Alt className="absolute bottom-7 right-4 text-blue-300 text-5xl sm:text-6xl md:text-7xl animate-pulse" />

      <motion.div
        className="relative mb-8 sm:mb-12"
        variants={imageVariant}
        initial="hidden"
        animate="visible"
      >
        <img
          src={imgMe}
          alt="Ankur Changani"
          className="w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full border-4 sm:border-8 shadow-cyan-950 object-cover"
        />
      </motion.div>

      <motion.h1
        className="font-bold text-4xl mb-4 leading-tight"
        variants={nameVariant}
        initial="hidden"
        animate="visible"
      >
        Hi, I'm{" "}
        <span className="bg-gradient-to-r from-[#635985] via-[#443C68] to-[#393053] bg-clip-text text-transparent text-[60px] sm:text-[80px] md:text-[100px] font-extrabold">
          Ankur Changani
        </span>
      </motion.h1>

      <motion.h2
        className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4"
        variants={titleVariant}
        initial="hidden"
        animate="visible"
      >
        Front End Developer
      </motion.h2>

      <motion.p
        className="text-base sm:text-lg text-gray-200 max-w-md sm:max-w-xl md:max-w-2xl mx-4"
        variants={descVariant}
        initial="hidden"
        animate="visible"
      >
        I am <span className="text-[#635985] font-semibold">Ankur Changani</span>, a{" "}
        <span className="text-white font-semibold">Front End Developer</span> dedicated to crafting dynamic, responsive web applications.
        With the goal of advancing my career and participating in inspiring projects, I present my work and my passion for{" "}
        <span className="text-white font-semibold">Front-End development</span>.
        Let's shape <span className="text-white font-semibold">digital solutions</span> together and shape the future.
      </motion.p>

      <motion.div
        className="flex flex-wrap items-center justify-center gap-4 mt-6"
        variants={buttonContainer}
        initial="hidden"
        animate="visible"
      >
        <motion.a
          href={Resume}
          download="Ankur_Changani_Resume.pdf"
          className="inline-block px-6 py-3 bg-gradient-to-r from-[#635985] to-[#443C68] rounded-full text-white font-semibold shadow-lg hover:opacity-90 hover:scale-105 transition-all duration-300"
          variants={buttonVariant}
        >
          Download CV
        </motion.a>

        <motion.a
          href="#contact"
          className="inline-block px-6 py-3 bg-gradient-to-r from-[#443C68] to-[#18122B] rounded-full text-white font-semibold shadow-lg hover:opacity-90 hover:scale-105 transition-all duration-300"
          variants={buttonVariant}
        >
          Contact Me
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Home;
