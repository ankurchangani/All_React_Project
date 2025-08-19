import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

// Import skill images
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
    <section className="py-20 " id="skills">
      <div className="container mx-auto">
        <div className="flex justify-center items-center mb-10">
          <h2 className="titel text-[#635985]">
            Skills
            <span className="titel-shadow text-[#443C68]">Skills</span>
          </h2>
        </div>

        <Swiper
          modules={[Autoplay, Pagination]}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
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
              <div className="flex flex-col items-center justify-center p-6 bg-[#393053] bg-opacity-90 backdrop-blur-md rounded-2xl shadow-lg border border-[#35374B] transition-all duration-300 hover:scale-105 mb-12">
                <img
                  src={skill.img}
                  alt={skill.name}
                  className="w-20 h-20 md:w-24 md:h-24 object-contain"
                />
                <p className="text-white text-lg md:text-xl font-semibold mt-4">
                  {skill.name}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Custom Styling for Pagination Dots */}
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
              margin-top : 20px;
            opacity: 1;
            transform: scale(1.2);
          }
        `}
      </style>
    </section>
  );
};

export default SkillsSwiper;
