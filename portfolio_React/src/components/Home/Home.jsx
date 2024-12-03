import React, { useState, useEffect } from 'react';
import imgMe from "../../assets/images/me/me.jpg";
import { HiX } from "react-icons/hi"; // Close icon import
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const [fadeIn, setFadeIn] = useState(false);
  
  const [isModalOpen, setIsModalOpen] = useState(false);


  const navigate = useNavigate() 

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    const deltaX = clientX - centerX;
    const deltaY = clientY - centerY;
    const rotationX = (deltaY / centerY) * 30; 
    const rotationY = (deltaX / centerX) * -25;
    setRotate({ x: rotationX, y: rotationY });
  };


  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeIn(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const handleContact = () => {
    navigate('/contacts')
  }

  // Open Modal function
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Close Modal function
  const closeModal = () => {
    setIsModalOpen(false);
  };


  return (
    <section
      className="py-24 text-white perspective-3d"
      onMouseMove={handleMouseMove}
      style={{ perspective: "1000px" }}
    >
      <div className="container mx-auto text-center px-4">
        <div className="flex justify-center items-center mb-12">
          <div className="relative group cursor-pointer">
            <img
              src={imgMe}
              alt="Ankur Changani"
              className="w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full border-8 border-gray-800 shadow-xl transition-transform duration-500 ease-out"
              style={{
                boxShadow:
                  'inset -6px -6px 12px 0px rgba(100, 94, 94, 0.5), inset 6px 6px 13px 0px rgba(0, 0, 0, 0.78)',
                transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`, // Apply dynamic rotation
                transformStyle: 'preserve-3d',
                transition: 'transform 0.3s ease-out',
              }}
            />
          </div>
        </div>
        <div>
          <h1 className="text-4xl font-bold mb-4 text-white">Hi, I'm Ankur Changani</h1>

          <h1
            className={`text-4xl font-bold mb-4 text-white transition-all duration-1000 ease-out transform ${fadeIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ transitionDelay: '0.2s' }}
          >
            Front End Developer
          </h1>

          <p className="text-lg text-gray-200 mb-6">
            I am a highly motivated student studying Full Stack Development. Actively seeking opportunities to apply my skills and knowledge to real-world projects and contribute to the advancement of the industry.
          </p>

          <div className="flex justify-center gap-6">
            <button
              className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 cursor-pointer"
              onClick={openModal}
            >
              Learn More
            </button>
            <button className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 cursor-pointer" onClick={handleContact}>
              Contact Me
            </button>
          </div>
        </div>
      </div>

      {/* Modal Section */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50 w-full">
          <div className="bg-black p-8 rounded-lg shadow-lg transform transition-all duration-500 ease-out w-full max-w-lg sm:max-w-3xl scale-110 opacity-100">
            <div className="flex justify-between items-center">
              <h2 className="text-3xl font-bold mb-4 text-white">About My Skills</h2>
              <button
                className="text-white sm:hidden"
                onClick={closeModal}
              >
                <HiX className="text-2xl" />
              </button>
              {/* Show close button for larger screens */}
              <button
                className="text-white hidden sm:block"
                onClick={closeModal}
              >
                <HiX className="text-3xl" />
              </button>
            </div>
            <p className="text-lg text-gray-100 mb-4">
              I have honed my skills in Front-End Development using the latest technologies like React.js, HTML, CSS, and JavaScript. I have created numerous web applications and interfaces using React and have a deep understanding of JSX, which allows me to build dynamic, interactive UIs.
            </p>
            <p className="text-lg text-gray-100 mb-4">
              **Best Projects**: My projects include interactive web applications with smooth user interfaces and robust backends, built with React for scalability, HTML and CSS for structure and design, and JavaScript for functionality.
            </p>
            <p className="text-lg text-gray-100 mb-4">
              **Best Technologies**: React, HTML, CSS, JavaScript, JSX. I am constantly learning and adapting to the latest trends and tools in the industry to enhance my skills and develop cutting-edge solutions.
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Home;


