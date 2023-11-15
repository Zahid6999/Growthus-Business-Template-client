import React from "react";
import profileImg0 from "../../../assets/AboutImg/Img/profile image.png";
import profileImg1 from "../../../assets/AboutImg/Img/profile image (1).png";
import profileImg2 from "../../../assets/AboutImg/Img/profile image (2).png";
import profileImg3 from "../../../assets/AboutImg/Img/profile image (3).png";
import profileImg4 from "../../../assets/AboutImg/Img/profile image (4).png";
import profileImg5 from "../../../assets/AboutImg/Img/profile image (5).png";
import profileImg6 from "../../../assets/AboutImg/Img/profile image (6).png";
import profileImg7 from "../../../assets/AboutImg/Img/profile image (7).png";
import profileImg8 from "../../../assets/AboutImg/Img/profile image (8).png";
import LeaderCard from "./LeaderCard";
import featureImg1 from "../../../assets/AboutImg/Img/Feature image (1).png";
import Employ from "./Employ";

// Leader Arrow of objects
const leaderInfo = [
  {
    id: 1,
    name: "Marvin McKinney",
    position: "Founder and CEO",
    img: profileImg0,
  },
  {
    id: 2,
    name: "Floyd Miles",
    position: "Co-founder and CTO",
    img: profileImg1,
  },
  {
    id: 3,
    name: "Kristin Watson",
    position: "Co-founder and CDO",
    img: profileImg2,
  },
];

// Employ Arrow of objects
const employInfo = [
  {
    id: 1,
    name: "Annette Black",
    position: "President of Sales",
    img: profileImg3,
  },
  {
    id: 2,
    name: "Marvin McKinney",
    position: "Medical Assistant",
    img: profileImg4,
  },
  {
    id: 3,
    name: "Jenny Wilson",
    position: "Dog Trainer",
    img: profileImg5,
  },
  {
    id: 4,
    name: "Jerome Bell",
    position: "Web Designer",
    img: profileImg6,
  },
  {
    id: 5,
    name: "Theresa Webb",
    position: "Marketing Coordinator",
    img: profileImg7,
  },
  {
    id: 6,
    name: "Ronald Richards",
    position: "Nursing Assistant",
    img: profileImg8,
  },
];
const Teams = () => {
  return (
    <div className="mt-[160px] bg-[#FAFAFA]">
      <header className="pt-[30px]">
        <h1 className="text-center text-[48px] font-bold leading-[59.52px] tracking-[-0.72px] mt-[120px] mb-3 text-[#0A2533]">
          Our leadership
        </h1>
        <p className="text-center text-[20px] md:text-[27px] lg:text-base font-normal leading-[25.6px] text-[#455157] pb-[71px]">
          These are the most unique and of course Chef’s favourite in Static
          Mania. Please <br /> click View More to explore all the mouth-watering
          variations.
        </p>

        <section className="px-5 md:px-10 lg:px-[356px]  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
          {leaderInfo?.map((leader) => (
            <LeaderCard key={leader.id} leader={leader}></LeaderCard>
          ))}
        </section>
      </header>

      <main>
        <h2 className="text-center text-[48px] font-bold leading-[59.52px] tracking-[-0.72px] mt-[120px] mb-3 text-[#0A2533]">
          Team Members
        </h2>

        <section className="px-5 md:px-10 lg:px-[356px]  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px] pt-[71px]">
          {employInfo.map((employ) => (
            <Employ key={employ.id} employ={employ}></Employ>
          ))}
        </section>

        <footer className="bg-[#FAFAFA] px-5 md:px-10 lg:px-[310px]  lg:flex gap-[98px] pt-[150px] pb-[144px]">
          <img src={featureImg1} alt="" />
          <div className="lg:mt-[170px]">
            <h3 className="text-3xl md:text-4xl lg:text-5xl text-[#0A2533] font-bold leading-[59.52px] tracking-[-0.72px] pb-8">
              Join our Team
            </h3>
            <p className="text-base text-[#455157] font-normal leading-[25.6px] mb-16">
              <small>
                These are the most unique and of course Chef’s favourite in
                Static Mania. Please click View More to explore all the
                mouth-watering variations. Lorem ipsum dolor sit amet,
                consectetur adipisicing elit, do eius mod tempor incididunt ut
                labore et dolore magna aliqua.
              </small>
            </p>
            <a href="" target="">
              <button className="bg-[#A0E1DA] py-5 px-10 rounded-xl  text-lg text-[#0A2533] font-bold leading-[28.44px] ">
                Join Now
              </button>
            </a>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Teams;
