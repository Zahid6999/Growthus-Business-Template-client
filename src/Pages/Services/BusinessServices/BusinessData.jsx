import React from "react";
import { FaCircle } from "react-icons/fa";

const BusinessData = ({ data }) => {
  const { heading, description, points, img } = data;
  return (
    <div className="flex gap-[133px] justify-between lg:mx-[356px] pb-[120px]">
      <img src={img} alt="Business Images " />
      <div className="mt-20">
        <h2 className="text-[#0A2533] md:text-4xl lg:text-5xl font-bold loading-[59.52px] tracking-[-0.72px] pb-8">
          {heading}
        </h2>
        <p className=" text-base text-left text-[#455157] font-normal  leading-[25.6px] pb-8">
          {description}
        </p>
        <ul>
          {points.map((p, i) => (
            <li
              key={i}
              className="text-lg text-[#455157] font-bold leading-[28.44px] mb-5"
            >
              <FaCircle className="inline-block w-[10px] text-[#455157] mr-4" />{" "}
              {p}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BusinessData;
