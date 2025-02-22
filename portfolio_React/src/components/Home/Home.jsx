import React, { useState, useEffect } from 'react';
import imgMe from "../../assets/images/me/me.jpg";
import Ac from '../../assets/images/home/Ac.svg';
import { FaReact, FaHtml5, FaCss3Alt } from 'react-icons/fa';
import { SiJavascript } from 'react-icons/si';
import VideoBg from "../../assets/images/home/3129576-uhd_3840_2160_30fps.mp4";

const Home = () => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setFadeIn(true), 500);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative flex flex-col items-center text-center py-12 sm:py-16 md:py-24 text-white min-h-screen overflow-x-hidden">
      {/* AC Logo - Top Left */}
      <img
        src={Ac}
        alt="AC Logo"
        className="absolute top-4 left-4 sm:top-6 sm:left-6 w-12 h-12 sm:w-16 sm:h-16 animate-pulse"
      />

      {/* React Icon - Top Right */}
      <FaReact
        className="absolute top-4 right-4 sm:top-6 sm:right-6 text-blue-500 text-3xl sm:text-4xl md:text-5xl animate-spin"
      />

      {/* JavaScript Icon - Bottom Left */}
      <SiJavascript
        className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 text-yellow-500 text-5xl sm:text-6xl md:text-7xl animate-bounce"
      />

      {/* HTML Icon - Centered at the Bottom */}
      <FaHtml5
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-orange-500 text-5xl sm:text-6xl md:text-7xl animate-pulse"
      />

      {/* CSS Icon - Bottom Right */}
      <FaCss3Alt
        className="absolute bottom-4 right-4 text-blue-300 text-5xl sm:text-6xl md:text-7xl animate-pulse"
      />

      {/* Profile Image */}
      <div className="relative mb-8 sm:mb-12">
        <img
          src={imgMe}
          alt="Ankur Changani"
          className="w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full border-4 sm:border-8 shadow-cyan-950 object-cover"
        />

      </div>

      {/* Name */}
      <h1 className="font-bold text-4xl mb-4 leading-tight">
        Hi, I'm{" "}
        <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent text-[60px] sm:text-[80px] md:text-[100px]">
          Ankur Changani
        </span>
      </h1>

      {/* Animated Title */}
      <h2
        className={`text-2xl sm:text-3xl md:text-4xl font-bold mb-4 transition-all duration-1000 ease-out transform ${fadeIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
      >
        Front End Developer
      </h2>

      {/* Description */}
      <p className="text-base sm:text-lg text-gray-200 max-w-md sm:max-w-xl md:max-w-2xl mx-4">
        I am Ankur Changani, a Front End Developer dedicated to crafting dynamic, responsive web applications. With the goal of advancing my career and participating in inspiring projects, I present my work and my passion for Front-End development. Let's shape digital solutions together and shape the future.
      </p>

      {/* Contact Button */}
      <a
        href="#contact"
        className="mt-8 inline-block px-6 py-3 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 rounded-full text-white font-semibold shadow-lg hover:opacity-90 transition-all duration-300"
      >
        Contact Me
      </a>
    </section>
  );
};

export default Home;


