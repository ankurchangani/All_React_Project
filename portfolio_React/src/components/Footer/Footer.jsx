import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <>
            <footer className=" py-12 sm:py-24">
                <div className="container mx-auto px-4">
                    <ul className="flex flex-wrap justify-center space-x-6 sm:space-x-9 items-center text-white">
                        <li className="mb-4 sm:mb-0">
                          
                            <Link to="/" className="text-white hover:text-gray-400">
                                Home
                            </Link>
                        </li>

                        <li className="mb-4 sm:mb-0">
                          
                            <Link to="/about" className="text-white hover:text-gray-400">

                                About
                            </Link>
                        </li>

                        <li className="mb-4 sm:mb-0">
                          
                          <Link to="/skills" className="text-white hover:text-gray-400">

                          Skills
                          </Link>
                      </li>

                        <li className="mb-4 sm:mb-0">
                            {/* <a href="#" className="text-white hover:text-gray-400">Projects</a> */}
                            <Link to="/projects" className="text-white hover:text-gray-400">

                                Projects
                                </Link>
                        </li>

                        <li className="mb-4 sm:mb-0">
                            {/* <a href="#" className="text-white hover:text-gray-400">Contacts</a> */}
                            <Link to="/contacts" className="text-white hover:text-gray-400">
                                Contacts
                            </Link>
                        </li>
                    </ul>

                    <p className="text-center mt-6 text-gray-400 text-sm sm:text-base">
                        @made by Ankur Changani
                    </p>
                </div>
            </footer>
        </>
    );
}

export default Footer;
