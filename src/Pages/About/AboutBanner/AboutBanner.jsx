import React from "react";
import img1 from "../../../assets/AboutImg/Img/image 1.png";
import img2 from "../../../assets/AboutImg/Img/image 2.png";
import img3 from "../../../assets/AboutImg/Img/image 3.png";
import img4 from "../../../assets/AboutImg/Img/image 4.png";
import feature from "../../../assets/AboutImg/Img/Feature image.png";
import buttonPlay from "../../../assets/AboutImg/Logo/Play.png";
import { motion, AnimatePresence } from "framer-motion";

const headingVariants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      delay: 0.6,
      duration: 0.6,
    },
  },
};
const imagesVariants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      delay: 0.9,
      duration: 0.7,
    },
  },
};

const AboutBanner = () => {
  return (
    <div className=" mt-[129px] mb-32 ">
      <AnimatePresence>
        <motion.h1
          variants={headingVariants}
          initial="hidden"
          animate="show"
          exit={{ opacity: 0 }}
          className=" text-3xl md:text-[50px] lg:text-[64px] text-[#173641] lg:w-[856px] lg:h-[231] text-center font-black leading-[76.8px] tracking-[-0.64px] mx-2 md:mx-3 lg:mx-[522px] "
        >
          We make strategies, development to grow your business
        </motion.h1>
      </AnimatePresence>

      <motion.section
        variants={imagesVariants}
        initial="hidden"
        animate="show"
        className=" lg:flex flex-shrink-0  lg:gap-[17px] mx-5 md:mx-20 lg:mx-0 "
      >
        <div className="mt-5 md:mt-10 lg:-mt-[70px]">
          <img src={img1} alt="Heading Content Images" />
        </div>
        <div className="mt-5 md:mt-10 lg:mt-[153px]">
          <img src={img2} alt="Heading Content Images" />
        </div>
        <div className="mt-5 md:mt-10 lg:mt-[94px]">
          <img src={img3} alt="Heading Content Images" />
        </div>
        <div className="mt-5 md:mt-10 lg:-mt-[70px]">
          <img src={img4} alt="Heading Content Images" />
        </div>
      </motion.section>

      <main className="mt-[150px]">
        <div>
          <p className="text-center lg:mx-[352px] text-xl text-[#455157] font-medium leading-[34px] px-5 md:px-10 lg:px-0">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don’t look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there isn’t anything embarrassing hidden in the
            middle of text. All the Lorem Ipsum generators on the Internet tend
            to repeat predefined chunks as necessary, making this the first true
            generator on the Internet.
          </p>
          <p className="text-center lg:mx-[396px] mt-14 mb-20 text-xl text-[#455157] font-medium leading-[34px] px-5 md:px-10 lg:px-0">
            If you've got a publication that you don't want the world to see yet
            because it's not ready to launch, you can hide your Ghost site
            behind a basic shared pass-phrase. You can toggle this preference on
            at the bottom of Ghost's General Settings:
          </p>
        </div>
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  md:gap-20 lg:gap-[250px] ml-20  md:mx-14 lg:mx-[345px]">
          <div>
            <h1 className="text-[64px] text-[#0A2533] font-bold leading-[73.6px]  ">
              1200+
            </h1>
            <p className="text-2xl font-medium text-[#0A2533]">
              <small>Project Done</small>
            </p>
          </div>
          <div>
            <h1 className="text-[64px] text-[#0A2533] font-bold leading-[73.6px]  ">
              45+
            </h1>
            <p className="text-2xl font-medium text-[#0A2533]">
              <small>Happy Client</small>
            </p>
          </div>
          <div>
            <h1 className="text-[64px] text-[#0A2533] font-bold leading-[73.6px]  ">
              25+
            </h1>
            <p className="text-2xl font-medium text-[#0A2533]">
              <small>Years Experiences</small>
            </p>
          </div>
        </section>
      </main>

      <footer className="bg-[#FAFAFA] px-5 md:px-10 lg:px-[340px] mt-[126px] lg:flex gap-[98px] pt-[150px] pb-[174px]">
        <img src={feature} alt="" />
        <div className="mt-[117.5px]">
          <h3 className="text-3xl md:text-4xl lg:text-5xl text-[#0A2533] font-bold leading-[59.52px] tracking-[-0.72px] pb-8">
            Our Story
          </h3>
          <p className="text-base text-[#455157] font-normal leading-[25.6px] mb-16">
            <small>
              These are the most unique and of course Chef’s favourite in Static
              Mania. Please click View More to explore all the mouth-watering
              variations. Lorem ipsum dolor sit amet, consectetur adipisicing
              elit, do eius mod tempor incididunt ut labore et dolore magna
              aliqua. There are many variations of passages of Lorem Ipsum
              available, but the majority have suffered alteration in some form,
              by injected humour, or randomised words which don’t look even
              slightly believable.
            </small>
          </p>
          <a href="https://www.youtube.com/watch?v=dJQn4DqzMVQ" target="_blank">
            <button className="bg-[#173641] py-5 pl-[14px] pr-5 rounded-xl text-white text-base font-bold leading-4 flex gap-[14px] items-center">
              <img src={buttonPlay} alt="Play Logo" />
              Watch the Video
            </button>
          </a>
        </div>
      </footer>
    </div>
  );
};

export default AboutBanner;
