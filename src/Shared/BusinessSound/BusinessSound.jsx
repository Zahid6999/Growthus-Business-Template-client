import React from "react";
import bg from "../../assets/Img/background.png";

const BusinessSound = () => {
  return (
    <div
      style={{
        background: `url(${bg})`,
        backgroundPosition: "cover",
        backgroundRepeat: "no-repeat",
        height: "568px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <header>
        <h1 className="text-[40px] md:text-[50px] lg:text-[64px] font-black text-center text-white leading-[76.8px] tracking-[-0.64px] lg:w-[820px]">
          Sounds Good? <br />
          Let’s Grow your Business.
        </h1>
        <button className="bg-white px-10 py-5 rounded-[18px] text-lg font-bold leading-[28.44px] ml-7 lg:ml-[330px] mt-6">
          Let's Talk
        </button>
      </header>
    </div>
  );
};

export default BusinessSound;
