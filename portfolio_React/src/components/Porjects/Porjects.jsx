import React from 'react';
import { FaGithub, FaChrome } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

import TravelTour from '../../assets/images/porjects/TourProjects.png';
import AdminPanleProject from '../../assets/images/porjects/AdminPanleProject.png';
import NextJsPR from '../../assets/images/Porjects/nextjspr.png';
import BhagavadGita from '../../assets/images/porjects/Bhagavad-Gita.png';
import RecipesAppProjects from '../../assets/images/porjects/RecipesAppProjects.png';
import FoodEra from '../../assets/images/Porjects/FoodEra.png';
import WeatherApp from '../../assets/images/Porjects/Weather-app.png';
import BlogApp from '../../assets/images/blog/blog.png';
import AdminMovie from '../../assets/images/Porjects/Admin.png';
import UserMovie from '../../assets/images/Porjects/user.png';

const projects = [
  {
    image: TravelTour,
    title: 'Travel Tour',
    description:
      'A fully responsive travel website with interactive UI, search functionality, destination filtering, booking system, and mobile-friendly design to enhance user experience.',
    github: 'https://github.com/ankurchangani/Travel_Website.git',
    demo: 'https://tour-travel-web.netlify.app/',
  },
  {
    image: AdminPanleProject,
    title: 'Admin Panel',
    description:
      'An eCommerce admin panel built using jQuery and Bootstrap, featuring user management, order tracking, data visualization, and easy-to-use controls for efficient management.',
    github: 'https://github.com/ankurchangani/Adminpanel.git',
    demo: 'https://dashboard-panel-admin.netlify.app/',
  },
  {
    image: NextJsPR,
    title: 'music school',
    description: ' Developed a responsive Music School website using Next.js and Tailwind CSS, featuring aceternity ui components.',
    github: 'https://github.com/ankurchangani/Music-School-web.git',
    demo: 'https://music-school-web-ten.vercel.app/',
  },
  {
    image: BhagavadGita,
    title: 'Bhagavad Gita',
    description:
      'A spiritual web application displaying the complete Bhagavad Gita verses with English translations, chapter-wise navigation, and an intuitive interface for easy reading.',
    github: 'https://github.com/ankurchangani/Bhagavad-Gita.git',
    demo: 'https://bhagavad-gita-web.netlify.app/',
  },
  {
    image: RecipesAppProjects,
    title: 'Recipes App',
    description:
      'A React-based recipe management app featuring recipe search, ingredient lists, cooking steps, user authentication, and the ability to save favorite recipes.',
    github: 'https://github.com/ankurchangani/Recipe_App_React.git',
    demo: 'https://recipe-app-react-gamma-ten.vercel.app/',
  },
  {
    image: FoodEra,
    title: 'Food Era',
    description:
      'A responsive food ordering website offering menu browsing, filtering options, cart management, secure checkout, and integration with payment gateways for smooth transactions.',
    github: 'https://github.com/ankurchangani/FoodEra-website.git',
    demo: 'https://food-era-website.netlify.app/',
  },
  {
    image: WeatherApp,
    title: 'Weather App',
    description:
      'A simple weather application fetching real-time weather data using APIs, displaying current temperature, forecasts, wind speed, and humidity levels with a clean UI.',
    github: 'https://github.com/ankurchangani/Weather_app_javascript.git',
    demo: 'https://weather-node-web.netlify.app/',
  },
  {
    image: BlogApp,
    title: 'Blog App',
    description:
      'This BlogApp is built with React.js, Tailwind CSS, and Firebase. It features TinaMC for content editing, Redux for state management, and Cloudinary for image uploads with Firestore URL storage.',
    github: 'https://github.com/ankurchangani/blog-app-reactjs.git',
    demo: 'https://blog-app-reactjs-jwcq.vercel.app/',
  },
  {
    image: [AdminMovie, UserMovie],
    title: ['Admin Panel', 'User Panel'],
    description: [
      'AdminMovie is an admin dashboard to add and manage movies. Built with React.js, Tailwind CSS, Firebase (auth + storage). Supports multiple uploads and a modern UI.',
      'User Panel allows users to view all movies. Built with Tailwind CSS and Firebase. Includes Register, Login, Google Sign-In, and real-time movie updates.',
    ],
    github: [
      'https://github.com/ankurchangani/Movie_Management_ReactJs.git',
      'https://github.com/ankurchangani/Movie_Management_ReactJs.git',
    ],
    demo: [
      'https://cleancoreadmin.netlify.app/',
      'https://cinemoviefix.netlify.app/',
    ],
    type: 'combined',
  },
];

const Projects = () => {
  return (
    <section className="py-20" id="projects">
      <div className="container mx-auto">
        <div className="flex justify-center items-center mb-10">
          <h2 className="titel text-[#635985]">
            Project<span className="titel-shadow text-[#443C68]">Project</span>
          </h2>
        </div>

        {/* Swiper for general projects */}
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          pagination={{ clickable: true }}
          modules={[Pagination]}
          className="mySwiper custom-swiper"
        >
          {projects
            .filter((project) => project.type !== 'combined') // Filter out combined projects
            .map((project, index) => (
              <SwiperSlide key={index}>
                <div className="bg-gradient-to-br from-[#443C68] to-gray-800 shadow-2xl rounded-3xl overflow-hidden transition-all duration-500 hover:scale-105 border border-gray-700 p-6 w-full h-full">
                  <div className="text-center">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="object-cover w-full h-48 rounded-lg mb-4"
                    />
                    <h3 className="text-white text-xl font-bold mb-4">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 text-sm mb-4">
                      {project.description}
                    </p>
                    <div className="flex justify-center space-x-6">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white text-3xl p-3 rounded-full transition-all duration-300 hover:bg-[#7A1CAC]"
                      >
                        <FaGithub />
                      </a>
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white text-3xl p-3 rounded-full transition-all duration-300 hover:bg-[#7A1CAC]"
                      >
                        <FaChrome />
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
        </Swiper>

        {/* Admin Panel and User Panel displayed separately */}
        <div className="flex justify-center mt-10 mb-6">
  <h3 className="text-white text-xl font-bold sm:text-center w-full text-left sm:text-center">
    Movie Management Admin & User Panel
  </h3>
</div>
        <div className="flex flex-wrap gap-6">
          {projects
            .filter((project) => project.type === 'combined')
            .map((project, index) => (
              <div key={index} className="w-full">
                <div className="flex lg:flex-nowrap flex-wrap  gap-6">
                  {[0, 1].map((i) => (
                    <div
                      key={i}
                      className="w-full sm:w-1/2 lg:w-1/2 justify-between bg-gradient-to-br from-[#443C68] to-gray-800 shadow-2xl rounded-3xl overflow-hidden p-6"
                    >
                      <div className="text-center">
                        <img
                          src={project.image[i]}
                          alt={project.title[i]}
                          className="object-cover rounded-lg mb-4"
                        />
                        <h3 className="text-white text-xl font-bold mb-4">
                          {project.title[i]}
                        </h3>
                        <p className="text-gray-300 text-sm mb-4">
                          {project.description[i]}
                        </p>
                        <div className="flex justify-center space-x-6">
                          <a
                            href={project.github[i]}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white text-3xl p-3 rounded-full transition-all duration-300 hover:bg-[#7A1CAC]"
                          >
                            <FaGithub />
                          </a>
                          <a
                            href={project.demo[i]}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white text-3xl p-3 rounded-full transition-all duration-300 hover:bg-[#7A1CAC]"
                          >
                            <FaChrome />
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
