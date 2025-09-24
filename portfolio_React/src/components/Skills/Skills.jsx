import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";

import Html5 from "../../assets/images/Sklis/html5.png";
import Css from "../../assets/images/Sklis/css3.png";
import Bootstrap from "../../assets/images/Sklis/bootstrap.png";
import jQuery from "../../assets/images/Sklis/jquery.png";
import TailwindCss from "../../assets/images/Sklis/Tailwind_CSS_Logo.webp";
import Clanguage from "../../assets/images/Sklis/c-language.png";
import Javascript from "../../assets/images/Sklis/javascript.png";
import ReactImg from "../../assets/images/Sklis/React.js_logo-512.png";
import NextJs from "../../assets/images/Sklis/next.png";
import github from "../../assets/images/Sklis/github.png";

const SkillsSwiper = () => {
  const skills = [
    { img: Html5, name: "HTML5" },
    { img: Css, name: "CSS3" },
    { img: Bootstrap, name: "Bootstrap" },
    { img: jQuery, name: "jQuery" },
    { img: TailwindCss, name: "Tailwind CSS" },
    { img: Clanguage, name: "C Language" },
    { img: Javascript, name: "JavaScript" },
    { img: ReactImg, name: "React.js" },
    { img: NextJs, name: "Next.js" },
    { img: github, name: "GitHub" },
  ];

  return (
    <section className="py-20 bg-[#18122B]" id="skills">
      <div className="container mx-auto">
        {/* Title Animation */}
        <div className="flex justify-center items-center mb-10">
          <motion.h2
            className="titel text-[#635985]"
            initial={{ x: -80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Skills
            <span className="titel-shadow text-[#443C68]">Skills</span>
          </motion.h2>
        </div>

        {/* Swiper Section */}
        <Swiper
          modules={[Autoplay, Pagination]}
          loop={true}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 20 },
            480: { slidesPerView: 2, spaceBetween: 20 },
            768: { slidesPerView: 3, spaceBetween: 25 },
            1024: { slidesPerView: 4, spaceBetween: 30 },
          }}
          className="flex justify-center text-center"
        >
          {skills.map((skill, index) => (
            <SwiperSlide key={index}>
              <motion.div
                className="flex flex-col items-center justify-center p-6 bg-[#393053] bg-opacity-90 backdrop-blur-md rounded-2xl shadow-lg border border-[#35374B] mb-12"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                whileHover={{
                  scale: 1.08,
                  rotateX: 5,
                  rotateY: 5,
                  transition: { type: "spring", stiffness: 200 },
                }}
              >
                <motion.img
                  src={skill.img}
                  alt={skill.name}
                  className="w-20 h-20 md:w-24 md:h-24 object-contain"
                  whileHover={{ scale: 1.15 }}
                  transition={{ type: "spring", stiffness: 150 }}
                />
                <motion.p
                  className="text-white text-lg md:text-xl font-semibold mt-4"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  {skill.name}
                </motion.p>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Custom Pagination Dots */}
      <style>
        {`
          .swiper-pagination-bullet {
            width: 10px;
            height: 10px;
            display: inline-block;
            border-radius: 50%;
            background: #fff;
            margin: 0 5px;
            cursor: pointer;
          }
          .swiper-pagination-bullet-active {
            width: 14px;
            height: 14px;
            margin-top: 20px;
            opacity: 1;
            transform: scale(1.2);
          }
        `}
      </style>
    </section>
  );
};

export default SkillsSwiper;
