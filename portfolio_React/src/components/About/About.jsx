

import React, { useState } from 'react';
const About = () => {
    const [modalOpen, setModalOpen] = useState(false);

    const handleModalOpen = () => setModalOpen(true);
    const handleModalClose = () => setModalOpen(false);

    return (
        <>
            <section className="py-20 bg-[#18122B] text-white" id="about">
                <div className="container mx-auto px-4">
                    <div className="flex justify-center items-center mb-12">
                        <h2 className="titel text-[#635985] text-4xl md:text-5xl font-bold relative">
                            ABOUT ME
                            <span className="titel-shadow text-[#443C68] absolute top-1 left-1 opacity-30">ABOUT ME</span>
                        </h2>
                    </div>
            
                    {/* Only Text Section */}
                    <div className="w-full lg:w-2/3 mx-auto text-center px-4">
                        <h1 className="text-5xl font-bold mb-6 text-[#635985]">About Me</h1>
                        <p className="mb-6 text-xl text-[#B0A8B9]">
                            I am <span className="font-semibold text-white text-2xl">Ankur Changani</span>, a dedicated Front-End Developer skilled in modern front-end technologies and web development. I create responsive and user-friendly designs and have a strong technical foundation, problem-solving skills, and a passion for continuous learning.
                        </p>
                        <button
                            onClick={handleModalOpen}
                            className="px-8 py-4 text-lg bg-[#443C68] text-white font-semibold rounded-full transition duration-300 hover:bg-[#393053]"
                        >
                            Learn More
                        </button>
                    </div>
                </div>
            </section>

            {modalOpen && (
                <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 px-4">
                    <div className="bg-[#393053] text-white rounded-lg p-10 w-full md:w-3/4 lg:w-1/2 shadow-xl border-4 border-[#635985] flex flex-col gap-6 relative">
                        <button
                            onClick={handleModalClose}
                            className="absolute top-4 right-4 text-gray-300 hover:text-gray-100 text-4xl"
                        >
                            &times;
                        </button>

                        <div className="text-4xl font-bold text-[#635985] text-center">More About Me</div>

                        <div className="text-xl text-gray-300 text-center">
                            I am passionate about front-end development, focusing on building efficient and beautiful web applications. I love working on dynamic projects and learning new technologies to enhance my skills.
                        </div>

                        <div className="text-4xl font-bold text-[#635985] text-center">My Education</div>
                        <ul className="text-2xl text-gray-300 space-y-4 list-none">
                            <li className="border-b-2 border-[#35374B] pb-3 font-semibold">
                                Diploma: Computer Engineering at Swarrnim Startup and Innovations University
                            </li>
                            <li className="border-b-2 border-[#35374B] pb-3 font-semibold">
                                Course: Front-End Developer at Red & White Multimedia Education
                            </li>
                            <li className="border-b-2 border-[#35374B] pb-3 font-semibold">
                                10th SSC: Passed
                            </li>
                            <li className="border-b-2 border-[#35374B] pb-3 font-semibold">
                                School: Ramdev Vidyabhavan
                            </li>
                        </ul>
                    </div>
                </div>
            )}
        </>
    );
};

export default About;
