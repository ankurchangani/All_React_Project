import React, { useRef } from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

const Contacts = () => {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_a97xfi9",
        "template_ggkg8nu",
        formRef.current,
        "tq_Xnp51iO9LeSQ29"
      )
      .then(
        () => {
          alert("✅ Message sent successfully!");
          formRef.current.reset();
        },
        () => {
          alert("❌ Failed to send message. Please try again!");
        }
      );
  };

  return (
    <section className="py-20" id="contact">
      <div className="container mx-auto">
        <motion.div
          className="flex justify-center items-center"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="titel text-[#443C68]">
            Contact <span className="titel-shadow text-[#393053]">Us</span>
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center mt-10"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            whileHover={{ scale: 1.1, rotate: 2 }}
            className="flex flex-col items-center text-white"
          >
            <div className="p-4 w-20 h-20 rounded-full flex justify-center items-center bg-white shadow-lg">
              <FaMapMarkerAlt className="text-4xl md:text-5xl text-[#443C68]" />
            </div>
            <h3 className="text-xl font-bold mt-4">ADDRESS</h3>
            <p className="text-lg md:text-xl">Pungangam, Sitanagar<br />Surat, Gujarat</p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.1, rotate: 2 }}
            className="flex flex-col items-center text-white"
          >
            <div className="p-4 w-20 h-20 rounded-full flex justify-center items-center bg-white shadow-lg">
              <FaPhoneAlt className="text-4xl md:text-5xl text-[#443C68]" />
            </div>
            <h3 className="text-xl font-bold mt-4">CONTACT</h3>
            <p className="text-lg md:text-xl mt-2">+91 94996 06395</p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.1, rotate: 2 }}
            className="flex flex-col items-center text-white"
          >
            <div className="p-4 w-20 h-20 rounded-full flex justify-center items-center bg-white shadow-lg">
              <FaEnvelope className="text-4xl md:text-5xl text-[#443C68]" />
            </div>
            <h3 className="text-xl font-bold mt-4">E-MAIL</h3>
            <p className="text-lg md:text-xl mt-2">one@gmail.com</p>
          </motion.div>
        </motion.div>

        <motion.div
          className="flex justify-center items-center mt-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="w-full md:w-3/4 lg:w-1/2 bg-[#443C68] p-8 rounded-lg shadow-lg">
            <form ref={formRef} onSubmit={sendEmail} className="flex flex-col w-full">
              <label className="text-white text-lg font-medium">Name</label>
              <input
                type="text"
                name="user_name"
                required
                className="w-full p-3 mt-2 mb-4 rounded bg-[#393053] text-white border border-gray-600 focus:outline-none"
              />

              <label className="text-white text-lg font-medium">Email</label>
              <input
                type="email"
                name="user_email"
                required
                className="w-full p-3 mt-2 mb-4 rounded bg-[#393053] text-white border border-gray-600 focus:outline-none"
              />

              <label className="text-white text-lg font-medium">Subject</label>
              <input
                type="text"
                name="subject"
                required
                className="w-full p-3 mt-2 mb-4 rounded bg-[#393053] text-white border border-gray-600 focus:outline-none"
              />

              <label className="text-white text-lg font-medium">Message</label>
              <textarea
                name="message"
                required
                className="w-full p-3 mt-2 mb-4 rounded bg-[#393053] text-white border border-gray-600 focus:outline-none"
                rows="4"
              ></textarea>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-[#635985] text-white py-3 rounded-lg shadow-md hover:bg-[#7A1CAC] transition-all duration-300"
              >
                Send Message
              </motion.button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contacts;
