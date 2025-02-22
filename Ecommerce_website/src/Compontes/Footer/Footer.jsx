import React from 'react';

const Footer = () => {
  return (
    <div className=' py-24'>

    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Us */}
          <div>
            <h2 className="text-xl font-bold mb-4">About Us</h2>
            <p className="text-sm text-gray-400">
              We are dedicated to providing exceptional services and experiences to our users. Discover more about our journey and vision.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-xl font-bold mb-4">Quick Links</h2>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition">Home</a></li>
              <li><a href="#" className="hover:text-white transition">Features</a></li>
              <li><a href="#" className="hover:text-white transition">Blog</a></li>
              <li><a href="#" className="hover:text-white transition">Categories</a></li>
              <li><a href="#" className="hover:text-white transition">About Us</a></li>
              <li><a href="#" className="hover:text-white transition">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="text-xl font-bold mb-4">Contact Us</h2>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><span className="font-medium text-white">Email:</span> support@example.com</li>
              <li><span className="font-medium text-white">Phone:</span> +1 (123) 456-7890</li>
              <li><span className="font-medium text-white">Address:</span> 1234 Street, City, Country</li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h2 className="text-xl font-bold mb-4">Follow Us</h2>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
          © 2024 Your Company. All rights reserved.
        </div>
      </div>
    </footer>
    </div>
  );
};

export default Footer;
