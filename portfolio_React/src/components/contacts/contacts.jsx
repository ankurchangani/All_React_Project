import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa'; 
import contactsImg from "../../assets/images/contacts/icon2.png";

const Contacts = () => {
    return (
        <>
            <section className="relative  text-white py-16 lg:py-24">
                {/* Section Header */}
                <div className="text-center mb-12 title">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                        Contacts
                    </h2>
                    <div className="relative mt-5">
                        <img
                            src={contactsImg}
                            alt="Contacts Icon"
                            className="mx-auto w-16 md:w-20 lg:w-24 animate-bounce"
                        />
                    </div>
                </div>

                {/* Content Container */}
                <div className="container mx-auto px-6 lg:px-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                        {/* Contact Form Section */}
                        <div>
                            <div className="bg-gray-800 p-6 md:p-8 rounded-lg shadow-xl animate-slide-up">
                                <h2 className="text-2xl md:text-3xl font-semibold text-center mb-6  ">
                                    Contact Form
                                </h2>
                                <form className="space-y-6">
                                    <div>
                                        <label className="block text-gray-300 font-medium text-left ">Name</label>
                                        <input
                                            type="text"
                                            placeholder="Your Name"
                                            className="w-full px-4 py-2 border border-gray-500 bg-gray-700 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-white"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-gray-300 font-medium text-left">Mobile</label>
                                        <input
                                            type="text"
                                            placeholder="Your Mobile Number"
                                            className="w-full px-4 py-2 border border-gray-500 bg-gray-700 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-white"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-gray-300 font-medium text-left">Email</label>
                                        <input
                                            type="email"
                                            placeholder="Your Email"
                                            className="w-full px-4 py-2 border border-gray-500 bg-gray-700 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-white"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-gray-300 font-medium text-left">Subjects</label>
                                        <input
                                            type="text"
                                            placeholder="Subject of Inquiry"
                                            className="w-full px-4 py-2 border border-gray-500 bg-gray-700 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-white"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-gray-300 font-medium text-left">Message</label>
                                        <textarea
                                            placeholder="Your Message"
                                            rows="4"
                                            className="w-full px-4 py-2 border border-gray-500 bg-gray-700 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-white"
                                        ></textarea>
                                    </div>
                                    <div className="text-center">
                                        <button className="bg-white text-black px-6 py-2 rounded-lg shadow-lg hover:shadow-3xl hover:bg-gray-200 transition-all duration-300 animate-pulse">
                                            Send Message
                                        </button>
                                    </div>
                                </form>
                                {/* Social Links */}
                                <div className="flex justify-center space-x-8 mt-8">
                                    <a
                                        href="https://www.linkedin.com/in/changani-ankur-07908830b/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-300 text-3xl hover:text-white transition-transform duration-300 hover:scale-110"
                                    >
                                        <FaLinkedin />
                                    </a>
                                    <a
                                        href="https://github.com/ankurchangani"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-300 text-3xl hover:text-white transition-transform duration-300 hover:scale-110"
                                    >
                                        <FaGithub />
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Contact Info Section */}
                        <div>
                            <div className="bg-gray-900 p-6 md:p-8 rounded-lg shadow-xl animate-fade-in">
                                <h3 className="text-2xl md:text-3xl font-semibold text-center mb-4">
                                    Contact Info
                                </h3>
                                <div className="space-y-6">
                                    <div>
                                        <h4 className="font-medium">Mail Us</h4>
                                        <p className="text-gray-400">changaniankur100gmail.com</p>
                                    </div>
                                    <div>
                                        <h4 className="font-medium">Contact Us</h4>
                                        <p className="text-gray-400">+91 9499606395</p>
                                    </div>
                                    <div>
                                        <h4 className="font-medium">Location</h4>
                                        <p className="text-gray-400">
                                            pungangam sitanagar <br />
                                            surat gujarat
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Contacts;    
