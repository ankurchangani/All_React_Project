import React from 'react';
import { FaGithub, FaChrome } from 'react-icons/fa';
import TravelTour from '../../assets/images/porjects/TourProjects.png';
import AndtourProject from '../../assets/images/porjects/andtourProject.png';
import AdminPanleProject from '../../assets/images/porjects/AdminPanleProject.png';
import AddTocart from '../../assets/images/porjects/AddToCartProject.png';
import BhagavadGita from '../../assets/images/porjects/Bhagavad-Gita.png';
import RecipesAppProjects from '../../assets/images/porjects/RecipesAppProjects.png';

const projects = [
  {
    image: TravelTour,
    title: 'Travel Tour',
    github: 'https://github.com/ankurchangani/Travel_Website.git',
    demo: 'https://travel-tour-book-website.netlify.app/',
  },
  {
    image: AndtourProject,
    title: 'Andtour Project',
    github: 'https://github.com/ankurchangani/bootstrap-website-Final-Project.git',
    demo: 'https://andtourtravel.netlify.app/',
  },
  {
    image: AdminPanleProject,
    title: 'Admin Panel',
    github: 'https://github.com/ankurchangani/Adminpanel.git',
    demo: 'https://dashboard-admin-panle.netlify.app/',
  },
  {
    image: AddTocart,
    title: 'Add to Cart',
    github: 'https://github.com/ankurchangani/Crud-Add--To--Cart-js.git',
    demo: 'https://crud-add-to-cart.netlify.app/',
  },
  {
    image: BhagavadGita,
    title: 'Bhagavad Gita',
    github: 'https://github.com/ankurchangani/Bhagavad-Gita.git',
    demo: 'https://bhagavad-gita-book.netlify.app/',
  },
  {
    image: RecipesAppProjects,
    title: 'Recipes App',
    github: 'https://github.com/ankurchangani/Recipe_App_React.git',
    demo: 'https://recipes-app-food.netlify.app/',
  },
];

const Projects = () => {
  return (
    <section className="bg-gray-900 py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-white mb-8 title">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative bg-gray-800 shadow-lg rounded-lg overflow-hidden transform transition-all duration-500 hover:shadow-2xl hover:scale-105 border border-transparent hover:border-yellow-500"
            >
              {/* Image Section */}
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
              </div>
              {/* Overlay Section */}
              <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 hover:opacity-100 flex flex-col items-center justify-center transition-opacity duration-500">
                <h3 className="text-white text-xl font-bold mb-4">{project.title}</h3>
                <div className="flex space-x-8">
                  {/* GitHub Icon */}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white text-3xl transform transition-transform duration-300 hover:scale-125 hover:text-yellow-400"
                  >
                    <FaGithub />
                  </a>
                  {/* Chrome Icon */}
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white text-3xl transform transition-transform duration-300 hover:scale-125 hover:text-green-400"
                  >
                    <FaChrome />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
