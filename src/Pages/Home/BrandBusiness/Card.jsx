import React from "react";

const Card = ({ card }) => {
  const { name, title, icon, margin } = card;
  return (
    <div className="border border-[#EDEFEF] py-[30px] px-6 h-[314px] my-8 lg:my-0">
      <span>{icon}</span>
      <h4 className="mt-[30px] mb-4 text-[32px] font-bold leading-[46.4px]">
        {name}
      </h4>
      <p className="text-[20px] md:text-[22px] lg:text-base font-normal leading-[25.6px] text-[#455157]">
        {title}
      </p>
    </div>
  );
};

export default Card;
