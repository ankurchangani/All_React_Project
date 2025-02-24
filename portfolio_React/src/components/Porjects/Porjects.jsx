import React from 'react';
import { FaGithub, FaChrome } from 'react-icons/fa';
import TravelTour from '../../assets/images/porjects/TourProjects.png';
import AndtourProject from '../../assets/images/porjects/andtourProject.png';
import AdminPanleProject from '../../assets/images/porjects/AdminPanleProject.png';
import AddTocart from '../../assets/images/porjects/AddToCartProject.png';
import BhagavadGita from '../../assets/images/porjects/Bhagavad-Gita.png';
import RecipesAppProjects from '../../assets/images/porjects/RecipesAppProjects.png';
import FoodEra from '../../assets/images/Porjects/FoodEra.png';
import WeatherApp from '../../assets/images/Porjects/Weather-app.png';

const projects = [
  { image: TravelTour, title: 'Travel Tour', description: 'A fully responsive travel website with interactive UI, search functionality, destination filtering, booking system, and mobile-friendly design to enhance user experience.', github: 'https://github.com/ankurchangani/Travel_Website.git', demo: 'https://tour-travel-web.netlify.app/' },

  { image: AndtourProject, title: 'Andtour Project', description: 'A modern tour booking website featuring sleek UI/UX, destination reviews, advanced search filters, pricing details, and an optimized performance for fast loading times.', github: 'https://github.com/ankurchangani/bootstrap-website-Final-Project.git', demo: 'https://andtour-website.netlify.app/' },

  { image: AdminPanleProject, title: 'Admin Panel', description: 'An eCommerce admin panel built using jQuery and Bootstrap, featuring user management, order tracking, data visualization, and easy-to-use controls for efficient management.', github: 'https://github.com/ankurchangani/Adminpanel.git', demo: 'https://dashboard-panel-admin.netlify.app/' },

  { image: AddTocart, title: 'Add to Cart', description: 'A basic shopping cart with CRUD functionality, allowing users to add, update, and remove items, utilizing JavaScript for state management and dynamic UI updates.', github: 'https://github.com/ankurchangani/Crud-Add--To--Cart-js.git', demo: 'https://add-to-cart-website.netlify.app/' },

  { image: BhagavadGita, title: 'Bhagavad Gita', description: 'A spiritual web application displaying the complete Bhagavad Gita verses with English translations, chapter-wise navigation, and an intuitive interface for easy reading.', github: 'https://github.com/ankurchangani/Bhagavad-Gita.git', demo: 'https://bhagavad-gita-web.netlify.app/' },

  { image: RecipesAppProjects, title: 'Recipes App', description: 'A React-based recipe management app featuring recipe search, ingredient lists, cooking steps, user authentication, and the ability to save favorite recipes.', github: 'https://github.com/ankurchangani/Recipe_App_React.git', demo: 'https://recipe-app-react-gamma-ten.vercel.app/' },

  { image: FoodEra, title: 'Food Era', description: 'A responsive food ordering website offering menu browsing, filtering options, cart management, secure checkout, and integration with payment gateways for smooth transactions.', github: 'https://github.com/ankurchangani/FoodEra-website.git', demo: 'https://food-era-website.netlify.app/' },

  { image: WeatherApp, title: 'Weather App', description: 'A simple weather application fetching real-time weather data using APIs, displaying current temperature, forecasts, wind speed, and humidity levels with a clean UI.', github: 'https://github.com/ankurchangani/Weather_app_javascript.git', demo: 'https://weather-node-web.netlify.app/' },
];

const Projects = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div class="flex justify-center items-center mb-10"><h2 class="titel text-[#635985]">Project<span class="titel-shadow text-[#443C68]">Project</span></h2></div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gradient-to-br bg-[#443C68] to-gray-800 shadow-2xl rounded-3xl overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl border border-gray-700 p-6 w-full"
            >
              <div className="text-center">
                <img src={project.image} alt={project.title} className="object-cover w-full h-48 rounded-lg mb-4" />
                <h3 className="text-white text-xl font-bold mb-4">{project.title}</h3>
                <p className="text-gray-300 text-sm mb-4">{project.description}</p>
                <div className="flex justify-center space-x-6">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white text-3xl p-3 rounded-full transition-all duration-300 hover:bg-[#7A1CAC] hover:text-white"
                  >
                    <FaGithub />
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white text-3xl p-3 rounded-full transition-all duration-300 hover:bg-[#7A1CAC] hover:text-white"
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
