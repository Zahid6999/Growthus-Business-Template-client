import React, { useState } from "react";
import womanImg from "../../../assets/Img/woman image.png";
import { ReactComponent as BackgroundPatten } from "../../../assets/Logo/backgorund round.svg";
import { motion, AnimatePresence } from "framer-motion";
import "./Banner.css";

// Framer Motion -----------Variants
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

const Banner = () => {
  const [show, setShow] = useState(true);

  setTimeout(() => {
    setShow(false);
  }, 4000);
  return (
    <div className=" px-8 md:px-[40px] lg:px-0 lg:pl-[365px]  lg:pr-[203px] lg:flex lg:gap-[100px]  pt-[50px] lg:pb-[83px] bg-[#F5FDFF]">
      <motion.section
        initial={{ x: "-100vw", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.9, delay: 0.3 }}
        className="lg:mt-24"
      >
        <h1 className="text-3xl md:text-[50px] lg:text-[60px] text-[#173641] font-black leading-10 md:leading-[70px] lg:leading-[76.8px] lg:tracking-[-0.64px]">
          We Build <br /> Relationships that <br /> Drive Growth
        </h1>
        <AnimatePresence>
          {show && (
            <motion.p
              exit={{ x: -1000 }}
              transition={{ duration: 1.7 }}
              className="text-orange-600 font-bold"
            >
              Welcome Our Site Please visit my site
            </motion.p>
          )}
        </AnimatePresence>
        <p className="text-[20px] md:text-[24px] lg:text-[20px] font-normal leading-[34px] py-8 md:py-5 lg:py-5">
          At our agency, we believe in building strong relationships with our
          clients. Understanding your business goals, we can help you achieve
          success.
        </p>

        <div className="md:flex lg:flex gap-5 mt-2">
          <motion.button
            whileHover={{
              scale: 1.1,
              textShadow: "0px 0px 8px rgb(255 255 255)",
            }}
            transition={{ yoyo: Infinity, duration: 0.4 }}
            className="text-lg text-white font-bold leading-[28.44px] border border-[#CBD6DA] py-[18px] px-10 bg-[#173641] rounded-xl my-8 "
          >
            Let"s Talk
          </motion.button>
          <motion.button
            variants={buttonHover}
            whileHover="hover"
            className="text-lg font-bold leading-[28.44px] border border-[#CBD6DA] py-[18px] px-10 bg-white rounded-xl my-8 "
            id="work-btn"
          >
            Check Our Work
          </motion.button>
        </div>
      </motion.section>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 3 }}
        transition={{ delay: 0.9 }}
        className="relative  mt-0 md:mt-20 lg:mt-0"
      >
        <span>
          <BackgroundPatten className="hidden md:block lg:block " />
        </span>
        <img
          src={womanImg}
          alt="Woman Image"
          className="md:absolute lg:absolute md:top-2 md:left-16 lg:top-3 lg:left-[90px]"
        />
      </motion.div>
    </div>
  );
};

export default Banner;
