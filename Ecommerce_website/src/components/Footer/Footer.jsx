import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 py-24  shadow-md">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div className="flex flex-col items-center md:items-start">
            <h1 className="text-xl font-bold">E-Commerce</h1>
            <p className="text-gray-600 text-sm mt-2 text-center md:text-left">
              Your one-stop shop for all your needs. Quality products, great prices!
            </p>
          </div>
        
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 text-center">
            <a
              href="#home"
              className="hover:text-blue-600 transition duration-200"
            >
              Home
            </a>
            <a
              href="#featured"
              className="hover:text-blue-600 transition duration-200"
            >
              Featured
            </a>
            <a
              href="#about"
              className="hover:text-blue-600 transition duration-200"
            >
              About Us
            </a>
            <a
              href="#category"
              className="hover:text-blue-600 transition duration-200"
            >
              Category
            </a>
            <a
              href="#contact"
              className="hover:text-blue-600 transition duration-200"
            >
              Contact
            </a>
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-6">
            <a
              href="#"
              className="text-gray-800 hover:text-blue-600 transition duration-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M24 4.56v14.88C24 21.82 21.82 24 19.44 24H4.56C2.18 24 0 21.82 0 19.44V4.56C0 2.18 2.18 0 4.56 0h14.88C21.82 0 24 2.18 24 4.56zm-12.09 12v-6.89h-1.87V12h-1.46V9.67h1.46V8.18c0-1.36.84-2.1 2.06-2.1.59 0 1.09.04 1.24.06v1.44h-.86c-.67 0-.8.31-.8.77v1.32h1.66l-.22 1.66h-1.44v6.89h-1.67z" />
              </svg>
            </a>
            <a
              href="#"
              className="text-gray-800 hover:text-blue-600 transition duration-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M23.32 6.88a9.34 9.34 0 01-2.67.74 4.62 4.62 0 002.03-2.56c-.87.52-1.82.9-2.83 1.11a4.66 4.66 0 00-7.93 4.25 13.26 13.26 0 01-9.62-4.86 4.66 4.66 0 001.45 6.23c-.79-.03-1.54-.24-2.19-.61v.06a4.66 4.66 0 003.73 4.57c-.44.12-.91.18-1.39.18-.34 0-.68-.03-1.02-.1a4.65 4.65 0 004.35 3.23 9.35 9.35 0 01-6.9 1.94c1.94 1.25 4.24 1.97 6.7 1.97 8.04 0 12.44-6.67 12.44-12.45l-.01-.57a9.04 9.04 0 002.2-2.3z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-300 mt-6 pt-4">
          <p className="text-center text-sm text-gray-600">
            &copy; {new Date().getFullYear()} E-Commerce. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
