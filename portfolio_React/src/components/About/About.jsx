import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const About = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleModalOpen = () => setModalOpen(true);
  const handleModalClose = () => setModalOpen(false);

  const sectionVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: "easeOut" } },
    exit: { opacity: 0, scale: 0.8, transition: { duration: 0.3, ease: "easeIn" } },
  };

  return (
    <>
      <motion.section
        className="py-20 bg-[#18122B] text-white relative"
        id="about"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4 flex flex-col items-center">
          {/* Text Only */}
          <motion.div
            className="w-full lg:w-2/3 text-center bg-[#1f1a33] p-10 rounded-2xl shadow-lg border border-[#443C68]/40"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#635985] mb-6">
              About Me
            </h2>
            <p className="mb-6 text-xl text-[#B0A8B9]">
              I am <span className="font-semibold text-white text-2xl">Ankur Changani</span>, a
              passionate Front-End Developer skilled in modern front-end technologies and web
              development. I create responsive and user-friendly designs, with a strong technical
              foundation, problem-solving mindset, and a love for learning.
            </p>
            <motion.button
              onClick={handleModalOpen}
              className="px-8 py-4 text-lg bg-gradient-to-r from-[#635985] to-[#443C68] text-white font-semibold rounded-full transition-transform hover:shadow-lg"
              whileHover={{ scale: 1.1, rotate: 1 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
            </motion.button>
          </motion.div>
        </div>
      </motion.section>

      {/* MODAL */}
      <AnimatePresence>
        {modalOpen && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-60 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleModalClose}
          >
            <motion.div
              className="bg-[#393053] text-white rounded-2xl p-10 w-full md:w-3/4 lg:w-1/2 shadow-xl border-4 border-[#635985] flex flex-col gap-6 relative"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={handleModalClose}
                className="absolute top-4 right-4 text-gray-300 hover:text-white text-4xl"
              >
                &times;
              </button>

              <h3 className="text-4xl font-bold text-[#A084DC] text-center">
                More About Me
              </h3>
              <p className="text-xl text-gray-300 text-center">
                I love working on dynamic projects and experimenting with new technologies. My goal
                is to make websites fast, beautiful, and user-friendly.
              </p>

              <h4 className="text-3xl font-bold text-[#A084DC] text-center">My Education</h4>
              <ul className="text-2xl text-gray-300 space-y-4 list-none text-center">
                <li className="border-b-2 border-[#35374B] pb-3 font-semibold">
                  Diploma: Computer Engineering at Swarrnim Startup and Innovations University
                </li>
                <li className="border-b-2 border-[#35374B] pb-3 font-semibold">
                  Course: Front-End Developer at Red & White Multimedia Education
                </li>
                <li className="border-b-2 border-[#35374B] pb-3 font-semibold">10th SSC: Passed</li>
                <li className="border-b-2 border-[#35374B] pb-3 font-semibold">
                  School: Ramdev Vidyabhavan
                </li>
              </ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default About;
