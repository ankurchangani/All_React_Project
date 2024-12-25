import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen((prev) => !prev);
    };

    return (
        <div className="container mx-auto">
            <header className="bg-blue-600 text-white">
                <div className="container mx-auto flex justify-between items-center py-4 px-6">


                    <h1 className="text-2xl font-bold">E-Commerce</h1>


                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex space-x-8">

                        <Link
                            to="/"
                            className="text-white hover:text-gray-300 transition duration-200"
                        >Home</Link>
                        <a
                            href="#featured"
                            className="text-white hover:text-gray-300 transition duration-200"
                        >
                            Featured
                        </a>
                        <a
                            href="#about"
                            className="text-white hover:text-gray-300 transition duration-200"
                        >
                            About Us
                        </a>
                        <a
                            href="#category"
                            className="text-white hover:text-gray-300 transition duration-200"
                        >
                            Category
                        </a>
                      
                              <Link
                            to="/contacts"
                            className="text-white hover:text-gray-300 transition duration-200"
                        >Contacts</Link>

                    </nav>

                    {/* Icons and Buttons */}
                    <div className="hidden md:flex items-center space-x-6">
                        <button className="text-white hover:text-gray-300 transition duration-200">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M11 19a8 8 0 100-16 8 8 0 000 16zm0 0l6 6"
                                />
                            </svg>
                        </button>
                        <button className="relative text-white hover:text-gray-300 transition duration-200">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.6 8m1.6-8L9.4 5m7.2 0H21M9 21h6m-6 0a2 2 0 11-4 0 2 2 0 014 0zm6 0a2 2 0 104 0 2 2 0 00-4 0z"
                                />
                            </svg>
                            {/* <span className="absolute -top-2 -right-2 bg-red-500 text-xs rounded-full text-white px-1">
                                3
                            </span> */}
                        </button>
                        <div className="flex space-x-4">
                            <button className="bg-white text-blue-600 font-bold px-4 py-2 rounded hover:bg-gray-100 transition duration-200">
                                Login
                            </button>
                            <button className="bg-yellow-400 text-blue-600 font-bold px-4 py-2 rounded hover:bg-yellow-500 transition duration-200">
                                Register
                            </button>
                        </div>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        onClick={toggleMobileMenu}
                        className="md:hidden text-white hover:text-gray-300 transition duration-200"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </button>
                </div>

                {isMobileMenuOpen && (
                    <nav className="md:hidden bg-blue-700 text-white">
                        <div className="space-y-4 px-6 py-4">
                            {/* Navigation Links */}
                            <a href="#home" className="block hover:text-gray-300">
                                Home
                            </a>
                            <a href="#featured" className="block hover:text-gray-300">
                                Featured
                            </a>
                            <a href="#about" className="block hover:text-gray-300">
                                About Us
                            </a>
                            <a href="#category" className="block hover:text-gray-300">
                                Category
                            </a>
                            <a href="#contact" className="block hover:text-gray-300">
                                Contact
                            </a>

                            {/* Search Icon */}
                            <button className="flex items-center space-x-2 text-white hover:text-gray-300 transition duration-200">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M11 19a8 8 0 100-16 8 8 0 000 16zm0 0l6 6"
                                    />
                                </svg>
                                <span>Search</span>
                            </button>

                            {/* Add to Cart Icon */}
                            <button className="relative flex items-center space-x-2 text-white hover:text-gray-300 transition duration-200">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.6 8m1.6-8L9.4 5m7.2 0H21M9 21h6m-6 0a2 2 0 11-4 0 2 2 0 014 0zm6 0a2 2 0 104 0 2 2 0 00-4 0z"
                                    />
                                </svg>
                                <span>Add to Cart</span>
                                <span className="absolute -top-2 -right-2 bg-red-500 text-xs rounded-full text-white px-1">
                                    3
                                </span>
                            </button>

                            {/* Login and Register Buttons */}
                            <button className="w-full bg-white text-blue-600 font-bold px-4 py-2 rounded hover:bg-gray-100 transition duration-200">
                                Login
                            </button>
                            <button className="w-full bg-yellow-400 text-blue-600 font-bold px-4 py-2 rounded hover:bg-yellow-500 transition duration-200">
                                Register
                            </button>
                        </div>
                    </nav>
                )}

            </header>
        </div>
    );
};

export default Header;
