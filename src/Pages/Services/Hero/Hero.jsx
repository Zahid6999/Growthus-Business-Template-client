import React from "react";
import heroImg from "../../../assets/ServicesImg/Image/hero.png";
import bgHero from "../../../assets/ServicesImg/logo/bg.png";
import { motion } from "framer-motion";

// Framer Motion Variant------
const variantHeroImg = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      delay: 0.6,
      duration: 1,
    },
  },
};

// Variant Hero Content ----------
const variantHeroContent = {
  hidden: {
    x: "100vw",
  },
  show: {
    x: 0,
    transition: {
      duration: 1,
      ease: "easeOut",
    },
  },
};

const buttonHover = {
  hover: {
    scale: 1.1,
    // textShadow: "0px 0px 2px rgb(10 0 0)",
    transition: {
      yoyo: Infinity,
      duration: 0.3,
    },
  },
};

const Hero = () => {
  return (
    <div className="bg-[#F5FDFF] lg:flex gap-[100px] md:pl-28 py-20">
      <motion.section
        variants={variantHeroImg}
        initial="hidden"
        animate="show"
        className="lg:pl-[320px] "
      >
        <div>
          <img className="" src={bgHero} alt="" />
        </div>
        <div>
          <img
            className="-mt-[350px] md:-mt-[600px]  lg:-mt-[600px] lg:pl-20"
            src={heroImg}
            alt=""
          />
        </div>
      </motion.section>

      <motion.section
        variants={variantHeroContent}
        initial="hidden"
        animate="show"
        className="py-20"
      >
        <h1 className=" text-4xl md:text-[57px] lg:text-[64px] text-center md:text-left lg:text-left  font-black text-[#173641] leading-10 md:leading-[76.8px] lg:leading-[76.8px] lg:tracking-[-0.64px] mt-16">
          Services <br /> We provide for your <br />
          Business.
        </h1>
        <p className="text-xl font-medium text-[#455157] leading-[34px] mt-8 mb-[122px] px-3 md:px-0 lg:px-0">
          Want to be on top of the world? Check out this <br /> magnificent and
          chic diamond collection!
        </p>

        <motion.p
          variants={buttonHover}
          whileHover="hover"
          className="pl-[160px] md:pl-[230px] lg:pl-0"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="45"
            height="61"
            viewBox="0 0 45 61"
            fill="none"
          >
            <path
              d="M22.4375 0.996094L22.4375 53.2321"
              stroke="#173641"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M9.81641 41.0195L22.4371 53.2306L35.0579 41.0195"
              stroke="#173641"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </motion.p>
      </motion.section>
    </div>
  );
};

export default Hero;
