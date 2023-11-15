import React from "react";

import Slider from "react-slick";
import profile from "../../../assets/Img/Profile.png";
import profile2 from "../../../assets/Img/Profile (1).png";
import profile3 from "../../../assets/Img/Profile (2).png";
import love from "../../../assets/Img/Icon Love.png";
import love2 from "../../../assets/Img/😍.png";

import { ReactComponent as Rating } from "../../../assets/Img/rating.svg";

const testimonialsDocumet = [
  {
    profile: profile,
    love: love,
    rating: <Rating />,
    title:
      "Suggests that the top planners spend most of their time engaged in analysis and are concerned with industry .",
    heading: "Sabo Masties",
    subTitle: "Founder of Exclusive Addons",
  },
  {
    profile: profile2,
    love: love2,
    rating: <Rating />,
    title:
      "Suggests that the top planners spend most of their time engaged in analysis and are concerned with industry .",
    heading: "Kausar Ahmed",
    subTitle: "Founder of CoderIt",
  },
  {
    profile: profile3,
    love: love,
    rating: <Rating />,
    title:
      "Suggests that the top planners spend most of their time engaged in analysis and are concerned with industry .",
    heading: "Jak Houman",
    subTitle: "UI Designer of Rono Pixel",
  },
  {
    profile: profile,
    love: love2,
    rating: <Rating />,
    title:
      "Suggests that the top planners spend most of their time engaged in analysis and are concerned with industry .",
    heading: "Jak Houman",
    subTitle: "UI Designer of Rono Pixel",
  },
  {
    profile: profile2,
    love: love,
    rating: <Rating />,
    title:
      "Suggests that the top planners spend most of their time engaged in analysis and are concerned with industry .",
    heading: "Jak Houman",
    subTitle: "UI Designer of Rono Pixel",
  },
];

function Arrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,

        background: "gray",
        position: "absolute",
        right: "-80px",
        top: "-179px",
      }}
      onClick={onClick}
    />
  );
}

const Testimonials = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    nextArrow: <Arrow />,
    // prevArrow: <Arrow />,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 820,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <header className="bg-[#FAFAFA]  pb-[206px]">
      <h1 className="text-[48px] text-[#0A2533] font-bold leading-[59.52px] ml-7 lg:ml-[287px] pt-[160px]">
        Testimonials
      </h1>
      <div className=" w-[70%] mx-auto mt-[166px] ">
        <Slider {...settings}>
          {testimonialsDocumet?.map((item, i) => (
            <div key={i} className=" bg-[#FFFFFF] rounded-2xl px-10 pb-10 ">
              <div className="flex gap-3 bg-white w-[122px] h-[64px] rounded-[32.7px] p-[10px]  lg:ml-[98px] mb-2 -mt-1 ">
                <img src={item.profile} alt="" />
                <img src={item.love} alt="" />
              </div>
              <span>{item.rating}</span>
              <p className="pt-5 pb-6">{item.title}</p>
              <h6 className="font-bold">{item.heading}</h6>
              <p>
                <small>{item.subTitle}</small>
              </p>
            </div>
          ))}
        </Slider>
      </div>
    </header>
  );
};

export default Testimonials;
