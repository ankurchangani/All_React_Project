import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cube';  // Import effect-cube CSS
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { EffectCube, Pagination, Autoplay } from 'swiper/modules';

const skills = [
  { id: 1, name: 'HTML5', img: 'https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg' },
  { id: 2, name: 'CSS3', img: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg' },
  { id: 3, name: 'Bootstrap', img: 'https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg' },
  { id: 4, name: 'jQuery', img: 'https://cdn.worldvectorlogo.com/logos/jquery-4.svg' },
  { id: 5, name: 'JavaScript', img: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png' },
  { id: 6, name: 'C Language', img: 'https://upload.wikimedia.org/wikipedia/commons/1/18/C_Programming_Language.svg' },
  { id: 7, name: 'React.js', img: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg' },
];

const Skills = () => {
  return (
    <section className="py-16 ">
      <div className="container mx-auto px-4 text-center">
        {/* Section Header */}
        <h2 className="title text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
          Skills
        </h2>
        <p className="text-sm md:text-base lg:text-lg text-gray-400 mb-8">
          Technologies and tools I am proficient in
        </p>

        {/* Swiper Component */}
        <Swiper
          effect="cube"  // Set effect to cube
          grabCursor={true}
          centeredSlides={true}
          slidesPerView="auto"
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          cubeEffect={{
            shadow: true,
            slideShadows: true,
            shadowOffset: 20,
            shadowScale: 0.94,
          }}
          pagination={{ clickable: true }}
          modules={[EffectCube, Pagination, Autoplay]}
          className="w-full sm:w-4/5 lg:w-2/3"
        >
          {skills.map((skill) => (
            <SwiperSlide
              key={skill.id}
              className="bg-gray-800 rounded-lg shadow-lg p-4 sm:p-6 md:p-8 transition-transform duration-300 hover:scale-105"
            >
              {/* Skill Image */}
              <img
                src={skill.img}
                alt={skill.name}
                className="mx-auto w-24 h-24 sm:w-28 sm:h-28 md:w-36 md:h-36 mb-4 object-contain"
              />
              {/* Skill Name */}
              <h3 className="text-sm sm:text-base md:text-lg font-semibold text-white">
                {skill.name}
              </h3>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Skills;
