import React, { useEffect, useState } from 'react';
import AboutImg from '../../assets/images/About/About.jpg'; // Ensure this path is correct


const About = () => {
    const [fadeIn, setFadeIn] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setFadeIn(true);
        }, 500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <section className=" py-16 px-4 text-white">
            <div className="container mx-auto max-w-7xl relative z-10">
                {/* Title Section */}
                <div className="text-center mb-8">
                    <h2 className="title text-blue-400">About Me</h2>
                </div>

                {/* Header Section */}
                <div
                    className={`text-center mb-12 ${
                        fadeIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    } transition-all duration-1000 ease-out`}
                >
                    <h1 className="text-4xl sm:text-5xl font-bold mb-4">
                        Hi There! I'm{' '}
                        <span className="text-blue-400">Ankur Changani</span>
                    </h1>
                    <h2 className="text-lg sm:text-xl mb-4">Front-End Developer</h2>
                    <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
                        I create content that guides beginners through building or mastering technologies like HTML,
                        CSS, JavaScript, and popular frameworks like React.
                    </p>
                </div>

                {/* Image Section */}
                <div className="mb-12 flex justify-center">
                    <img
                        src={AboutImg}
                        alt="About"
                        className={`w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 object-cover rounded-full shadow-lg transition-all duration-1000 ease-out ${
                            fadeIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                        }`}
                    />
                </div>

                {/* Personal Information Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
                    <div className="space-y-4">
                        <h3 className="text-2xl font-semibold">Contact Information</h3>
                        <ul className="space-y-2 text-gray-300">
                            <li>
                                <strong>Birthday:</strong> Nov 22, 2007
                            </li>
                            <li>
                                <strong>Phone:</strong> +9499606395
                            </li>
                            <li>
                                <strong>Email:</strong> changaniankur100@gmail.com
                            </li>
                            <li>
                                <strong>From:</strong> Surat, Gujarat, India
                            </li>
                            <li>
                                <strong>Languages:</strong> Gujarati, Hindi, English
                            </li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-2xl font-semibold">Download CV</h3>
                        <a
                            href="path_to_cv.pdf"
                            download
                            className="inline-block bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-lg text-lg"
                        >
                            Download CV
                        </a>
                    </div>
                </div>

                {/* Background Section */}
                <div
                    className={`text-center ${
                        fadeIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    } transition-all duration-1000 ease-out`}
                >
                    <h3 className="text-2xl font-semibold mb-4">Background Information</h3>
                    <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
                        I am a passionate Front-End Developer with expertise in HTML5, CSS3, Media Query, jQuery,
                        Bootstrap, Tailwind CSS, C-Language, JavaScript, React, and JSX. With a strong educational
                        background in Full Stack Web Development and Computer Programming, I am constantly learning new
                        technologies to stay on top of industry trends.
                    </p>
                </div>

                {/* Education Section */}
                <div
                    className={`text-center ${
                        fadeIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    } transition-all duration-1000 ease-out mt-12`}
                >
                    <h3 className="text-2xl font-semibold mb-4">Education</h3>
                    
                    <ul className="space-y-4 text-lg sm:text-xl text-gray-300">
                        <li>
                            <strong>Institution:</strong> Red & White Multimedia Education Official (2023 - 2024)
                        </li>
                        <li>
                            <strong>College:</strong> Swarrnim Startup & Innovation University, Gujarat
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default About;
