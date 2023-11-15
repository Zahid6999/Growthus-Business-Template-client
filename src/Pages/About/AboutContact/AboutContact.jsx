import React from "react";
import map from "../../../assets/AboutImg/Img/map image.png";
import locationIcon from "../../../assets/AboutImg/Logo/location icon.png";
import mailIcon from "../../../assets/AboutImg/Logo/mail icon.png";
import phoneIcon from "../../../assets/AboutImg/Logo/Phone icon.png";

const AboutContact = () => {
  return (
    <div className="relative">
      <img
        src={map}
        alt=""
        className="mt-[150px] mb-10 lg:ml-[365px] hidden md:block lg:block"
      />
      <section className="flex gap-6 md:w-[416px]  lg:w-[416px] h-[160px] shadow-[0_44px_44px_-15px_rgba(0,0,0,0.10)] pt-8 pr-[46px] pb-[46px] pl-8 md:absolute lg:absolute md:top-0 lg:top-0 md:left-[100px] lg:left-[375px]">
        <span>
          <img src={locationIcon} alt="" />
        </span>
        <div>
          <h6 className="text-base font-normal leading-[25.6px] text-[#455157]">
            Canada
          </h6>
          <p className="text-lg font-bold leading-[28.44px] text-[#455157]">
            1901 Thornridge Cir. Shiloh, Hawaii 81063
          </p>
        </div>
      </section>

      <section className="flex gap-6  md:w-[416px] lg:w-[416px] h-[160px] shadow-[0_44px_44px_-15px_rgba(0,0,0,0.10)] pt-8 pr-[46px] pb-[46px] pl-8 md:absolute lg:absolute md:top-48 lg:top-80 md:left-[230px] lg:left-[565px]">
        <span>
          <img src={locationIcon} alt="" />
        </span>
        <div>
          <h6 className="text-base font-normal leading-[25.6px] text-[#455157]">
            United States
          </h6>
          <p className="text-lg font-bold leading-[28.44px] text-[#455157]">
            2118 Thornridge Cir. Syracuse, Connecticut 35624
          </p>
        </div>
      </section>

      <section className="flex gap-6 md:absolute lg:absolute md:top-[430px] lg:top-[240px] md:right-[100px] lg:right-[595px] mt-16 md:mt-0 lg:mt-0">
        <img src={phoneIcon} alt="Phone Icon" className="w-9 h-9" />
        <div>
          <h6 className="text-base font-normal leading-[25.6px] text-[#455157]">
            Phone Number
          </h6>
          <p className="text-lg font-bold leading-[28.44px] text-[#455157]">
            +3.230.705.5448
          </p>
        </div>
      </section>

      <section className="flex gap-6 md:absolute lg:absolute md:top-[530px] lg:top-[400px] md:right-[200px] lg:right-[595px] mt-16 md:mt-0 lg:mt-0 mb-5 md:mb-0 lg:mb-0">
        <img src={mailIcon} alt="Phone Icon" className="w-9 h-9" />
        <div>
          <h6 className="text-base font-normal leading-[25.6px] text-[#455157]">
            Phone Number
          </h6>
          <p className="text-lg font-bold leading-[28.44px] text-[#455157]">
            +3.230.705.5448
          </p>
        </div>
      </section>
    </div>
  );
};

export default AboutContact;
