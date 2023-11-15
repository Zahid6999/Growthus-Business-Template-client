import React from "react";

const Employ = ({ employ }) => {
  const { name, position, img } = employ;
  return (
    <div>
      <img src={img} alt="Leader Images" />
      <h3 className="mt-8 text-2xl font-medium text-black">{name}</h3>
      <h5 className="mt-3 text-[#455157] text-lg font-bold leading-[28.44px]">
        {position}
      </h5>
    </div>
  );
};

export default Employ;
