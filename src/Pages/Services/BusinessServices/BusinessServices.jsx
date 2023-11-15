import React from "react";
import service1 from "../../../assets/ServicesImg/Image/Sevice-1.png";
import service2 from "../../../assets/ServicesImg/Image/Sevice-2.png";
import service3 from "../../../assets/ServicesImg/Image/Sevice-3.png";
import BusinessData from "./BusinessData";
// Data Array -----------
const businessData = [
  {
    heading: "Web Development",
    description:
      "These are the most unique and of course Chef’s favourite in Static Mania. Please click View More to explore all the mouth-watering variations.",
    img: service1,
    points: [
      "Front-End Development",
      "Website Design",
      "Product Management",
      "Content Strategy",
      "Back-End Development",
    ],
  },
  {
    heading: "Search Engine Optimization",
    description:
      "These are the most unique and of course Chef’s favourite in Static Mania. Please click View More to explore all the mouth-watering variations.",
    img: service2,
    points: [
      "Research & Discovery",
      "Competitive Analysis",
      "Product Management",
      "Motion Graphics",
      "Back-End Development",
    ],
  },
  {
    heading: "Design Service",
    description:
      "These are the most unique and of course Chef’s favourite in Static Mania. Please click View More to explore all the mouth-watering variations.",
    img: service3,
    points: [
      "Digital Marketing",
      "Illustrations & Iconography",
      "Mobile App Design",
      "UI/UX Design",
    ],
  },
];

const BusinessServices = () => {
  return (
    <div className="bg-[#F5FDFF] ">
      <>
        <h1 className="text-[#0A2533] text-center pt-[80px] text-4xl md:text-5xl  lg:text-5xl font-bold lg:leading-[59.52px] lg:tracking-[-0.72]">
          Business Service
        </h1>

        <p className=" text-base text-center text-[#455157] font-normal  leading-[25.6px] pt-3 md:px-3 pb-[87px]">
          These are the most unique and of course Chef’s favourite in Static
          Mania. Please click View More to explore <br /> all the mouth-watering
          variations.
        </p>
      </>

      <section>
        {businessData?.map((data, i) => (
          <BusinessData key={i} data={data}></BusinessData>
        ))}
      </section>
    </div>
  );
};

export default BusinessServices;
