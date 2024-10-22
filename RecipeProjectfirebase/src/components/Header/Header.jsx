import React, { useState } from 'react';
import Logo from '../../assets/logo/Recip.png';
import { Link } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-gradient-to-r from-indigo-600 to-blue-500 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center mb-4 md:mb-0">
          <img src={Logo} alt="Recipe App Logo" className="h-10 w-10 mr-2" />
          <h1 className="text-2xl font-bold">Recipe App</h1>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            {isOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
          </button>
        </div>
        <nav className={`md:flex ${isOpen ? 'block' : 'hidden'}`}>
          <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6">
            <li>
              <Link to="/" className="hover:text-blue-200 transition duration-200" onClick={() => setIsOpen(false)}>Home</Link>
            </li>
            <li>
              <Link to="/viewrecipe" className="hover:text-blue-200 transition duration-200" onClick={() => setIsOpen(false)}>View Recipes</Link>
            </li>
            {/* <li>
              <Link to="/createrecipe" className="hover:text-blue-200 transition duration-200" onClick={() => setIsOpen(false)}>Add Recipes</Link>
            </li> */}
          </ul> 
        </nav>
      </div>
    </header>
  );
};

export default Header;
