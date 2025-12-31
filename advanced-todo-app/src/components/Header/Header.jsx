import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-blue-500 text-white py-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between px-4">
        
        <div className="w-1/4">
          <h1 className="text-2xl font-bold">Advanced To-Do App</h1>
        </div>

        
        <nav className="w-1/2 flex justify-center space-x-4">
          <a  className="hover:text-gray-200">
            Home
          </a>
          <a  className="hover:text-gray-200">
            Dashboard
          </a>
        </nav>

       
        <div className="w-1/4 flex justify-end">
          <a
           
            className="bg-green-500 hover:bg-green-600 text-white py-1 px-3 rounded transition"
          >
            Login
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
