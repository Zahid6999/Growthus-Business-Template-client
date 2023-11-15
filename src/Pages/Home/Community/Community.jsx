import React from "react";
import { ReactComponent as CommunityMap } from "../../../assets/Img/Community image.svg";
const Community = () => {
  return (
    <div className="mt-[227px] pb-[96px]">
      <h1 className=" text-3xl md:text-[48px] lg:text-[48px] text-[#0A2533] text-center font-bold leading-[59.52px] tracking-[-0.72px] mb-[50px]">
        We built global community for <br />
        creators like you
      </h1>
      <div className="lg:mx-[244px] mb-20">
        <CommunityMap className="hidden lg:block " />
      </div>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  md:gap-20 lg:gap-[250px] ml-20  md:mx-14 lg:mx-[345px]">
        <div>
          <h1 className="text-[64px] text-[#0A2533] font-bold leading-[73.6px]  ">
            1200+
          </h1>
          <p className="text-2xl font-medium text-[#0A2533]">
            <small>Project Done</small>
          </p>
        </div>
        <div>
          <h1 className="text-[64px] text-[#0A2533] font-bold leading-[73.6px]  ">
            45+
          </h1>
          <p className="text-2xl font-medium text-[#0A2533]">
            <small>Happy Client</small>
          </p>
        </div>
        <div>
          <h1 className="text-[64px] text-[#0A2533] font-bold leading-[73.6px]  ">
            25+
          </h1>
          <p className="text-2xl font-medium text-[#0A2533]">
            <small>Years Experiences</small>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Community;
