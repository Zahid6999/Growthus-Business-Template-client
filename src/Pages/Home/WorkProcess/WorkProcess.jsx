import React from "react";
import Feature from "../../../assets/Img/Feature image.png";
import Feature2 from "../../../assets/Img/Feature image (1).png";
import Feature3 from "../../../assets/Img/Feature image (2).png";
import { ReactComponent as GreaterThan } from "../../../assets/Logo/chevron-right.svg";
const WorkProcess = () => {
  return (
    <div className="bg-[#F5FDFF] pb-[120px]">
      <section className=" px-5 md:px-0 lg:px-0 mx-7 md:mx-5 lg:mx-0">
        <h1 className="text-center text-[48px] font-bold leading-[59.52px] tracking-[-0.72px] pt-[120px] pb-1">
          Our Work Process
        </h1>
        <p className="text-center text-[20px] md:text-[25px] lg:text-base font-normal leading-[25.6px] ">
          <small>
            These are the most unique and of course Chef’s favourite in Static
            Mania. Please click View More to explore all <br /> the
            mouth-watering variations.
          </small>
        </p>
      </section>

      {/* ++=======First========+++ */}
      <section className="lg:flex  gap-14 lg:pl-[390px] pt-[110px]">
        <img src={Feature} alt="Feature Image" />
        <div className="lg:w-[450px] pt-10 lg:pt-36 mx-5 md:mx-10 lg:mx-0">
          <h3 className="text-[48px] text-[#0A2533] font-bold leading-[59.52px] tracking-[-0.72px]">
            Create your web <br /> masterpiece
          </h3>
          <p className="text-left text-[20px] md:text-[25px] lg:text-base font-normal leading-[22.6px] mt-4 mb-8">
            <small>
              These are the most unique and of course Chef’s favourite in Static
              Mania. Please click View More to explore all the mouth-watering
              variations. <br /> Lorem ipsum dolor sit amet, consectetur
              adipisicing elit, do eius mod tempor incididunt ut labore et
              dolore magna aliqua.
            </small>
          </p>
          <button className="flex items-center rounded-[10px] bg-[#A0E1DA] py-4 px-5 text-base font-bold leading-[25.28px] text-[#0A2533]">
            Learn More
            <span>
              <GreaterThan />
            </span>
          </button>
        </div>
      </section>

      {/* ++=======Second========+++ */}
      <section className="lg:flex  gap-28 lg:pl-[390px] pt-[130px]">
        <div className="lg:w-[450px] pt-10 lg:pt-36 mx-5 md:mx-10 lg:mx-0">
          <h3 className="text-[48px] text-[#0A2533] font-bold leading-[59.52px] tracking-[-0.72px]">
            Analysis for your business & create the solution
          </h3>
          <p className="text-left text-[20px] md:text-[25px] lg:text-base font-normal leading-[22.6px] mt-4 mb-8">
            <small>
              These are the most unique and of course Chef’s favourite in Static
              Mania. Please click View More to explore all the mouth-watering
              variations. <br /> Lorem ipsum dolor sit amet, consectetur
              adipisicing elit, do eius mod tempor incididunt ut labore et
              dolore magna aliqua.
            </small>
          </p>
          <button className="flex items-center rounded-[10px] bg-[#A0E1DA] py-4 px-5 text-base font-bold leading-[25.28px] text-[#0A2533]">
            Learn More
            <span>
              <GreaterThan />
            </span>
          </button>
        </div>
        <img
          src={Feature2}
          alt="Feature Images "
          className="pl-7 md:pl-16 lg:pl-0 "
        />
      </section>

      {/* ++=======Third========+++ */}
      <section className="lg:flex  gap-14 lg:pl-[370px] pt-[80px]">
        <img src={Feature3} alt="Feature Image" />
        <div className="lg:w-[450px] pt-10 lg:pt-36 mx-5 md:mx-10 lg:mx-0">
          <h3 className="text-[48px] text-[#0A2533] font-bold leading-[59.52px] tracking-[-0.72px]">
            Handover the final good result.
          </h3>
          <p className="text-left text-[20px] md:text-[25px] lg:text-base font-normal leading-[22.6px] mt-4 mb-8">
            <small>
              These are the most unique and of course Chef’s favourite in Static
              Mania. Please click View More to explore all the mouth-watering
              variations. <br /> Lorem ipsum dolor sit amet, consectetur
              adipisicing elit, do eius mod tempor incididunt ut labore et
              dolore magna aliqua.
            </small>
          </p>
          <button className="flex items-center rounded-[10px] bg-[#A0E1DA] py-4 px-5 text-base font-bold leading-[25.28px] text-[#0A2533]">
            Learn More
            <span>
              <GreaterThan />
            </span>
          </button>
        </div>
      </section>
    </div>
  );
};

export default WorkProcess;
