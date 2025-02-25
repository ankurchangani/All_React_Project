import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const Contacts = () => {
    return (
        <section className='py-20'>
            <div className="container mx-auto">
                <div className="flex justify-center items-center">
                    <h2 className="titel text-[#443C68]">
                        Contact <span className="titel-shadow text-[#393053]">Us</span>
                    </h2>
                </div>

                {/* Contact Info */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center mt-10">
                    <div className="flex flex-col items-center text-white">
                        <div className='p-4 w-20 h-20 rounded-full flex justify-center items-center bg-white shadow-lg'>
                            <FaMapMarkerAlt className="text-4xl md:text-5xl text-[#443C68]" />
                        </div>
                        <h3 className="text-xl font-bold mt-4">ADDRESS</h3>
                        <p className='text-lg md:text-xl'>Pungangam, Sitanagar<br />Surat, Gujarat</p>
                    </div>

                    <div className="flex flex-col items-center text-white">
                        <div className='p-4 w-20 h-20 rounded-full flex justify-center items-center bg-white shadow-lg'>
                            <FaPhoneAlt className="text-4xl md:text-5xl text-[#443C68]" />
                        </div>
                        <h3 className="text-xl font-bold mt-4">CONTACT</h3>
                        <p className='text-lg md:text-xl mt-2'>+91 94996 06395</p>
                    </div>

                    <div className="flex flex-col items-center text-white">
                        <div className='p-4 w-20 h-20 rounded-full flex justify-center items-center bg-white shadow-lg'>
                            <FaEnvelope className="text-4xl md:text-5xl text-[#443C68]" />
                        </div>
                        <h3 className="text-xl font-bold mt-4">E-MAIL</h3>
                        <p className='text-lg md:text-xl mt-2'>changaniankur100@gmail.com</p>
                    </div>
                </div>

                {/* Contact Form */}
                <div className='flex justify-center items-center mt-16'>
                    <div className="w-full md:w-3/4 lg:w-1/2 bg-gradient-to-r bg-[#443C68] p-8 rounded-lg shadow-lg">
                        <form className="flex flex-col w-full">
                            <label className="text-white text-lg font-medium">Name</label>
                            <input type="text" className="w-full p-3 mt-2 mb-4 rounded bg-[#393053] text-white border border-gray-600 focus:outline-none" />

                            <label className="text-white text-lg font-medium">Email</label>
                            <input type="email" className="w-full p-3 mt-2 mb-4 rounded bg-[#393053] text-white border border-gray-600 focus:outline-none " />

                            <label className="text-white text-lg font-medium">Subject</label>
                            <input type="text" className="w-full p-3 mt-2 mb-4 rounded bg-[#393053] text-white border border-gray-600 focus:outline-none" />

                            <label className="text-white text-lg font-medium">Message</label>
                            <textarea className="w-full p-3 mt-2 mb-4 rounded bg-[#393053] text-white border border-gray-600 focus:outline-none" rows="4"></textarea>

                            <button className="w-full bg-[#635985] text-white py-3 rounded-lg shadow-md hover:bg-[#635985] hover:scale-110 active:scale-95 transition-all duration-300">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contacts;

