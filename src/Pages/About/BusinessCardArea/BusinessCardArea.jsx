import React from "react";
import { ReactComponent as Icon1 } from "../../../assets/Logo/Icon.svg";
import { ReactComponent as Icon2 } from "../../../assets/Logo/Icon-2.svg";
import { ReactComponent as Icon3 } from "../../../assets/Logo/Icon-3.svg";
import { ReactComponent as CommunityMap } from "../../../assets/Img/Community image.svg";

import { ReactComponent as Nextdoor } from "../../../assets/Logo/Nextdoor.svg";
import { ReactComponent as Slack } from "../../../assets/Logo/Slack.svg";
import { ReactComponent as Amazon } from "../../../assets/Logo/Amazon.svg";
import { ReactComponent as Union } from "../../../assets/Logo/Union.svg";
import { ReactComponent as Microsoft } from "../../../assets/Logo/Microsoft.svg";
import Card from "../../Home/BrandBusiness/Card";

const cards = [
  {
    id: 1,
    icon: <Icon1 />,
    name: "Strategies",
    title:
      "Whether you're looking to increase your online visibility, drive more traffic to your website, or boost your sales, we have the expertise to create a plan that works for you.",
  },
  {
    id: 2,
    icon: <Icon2 />,
    name: "",
    title:
      "We believe in data-driven decision making. That's why we conduct in-depth analysis to understand your business and identify key areas of improvement.",
  },
  {
    id: 3,
    icon: <Icon3 />,
    name: "Formula",
    title:
      "Developing strategies, conducting in-depth analysis, and executing with precision and expertise, we help you achieve your business goals and take your business to next level.",
  },
];

const BusinessCardArea = () => {
  return (
    <div>
      <div className="mb-[60px]">
        <h2 className="text-center text-[48px] font-bold leading-[59.52px] tracking-[-0.72px] mt-[120px] ">
          Solution for your Business
        </h2>
        <p className="text-center text-[20px] md:text-[25px] lg:text-base font-normal leading-[20.6px]  mx-7">
          <small>
            These are the most unique and of course Chef’s favourite in Static
            Mania. Please click View More to explore all <br /> the
            mouth-watering variations.
          </small>
        </p>
      </div>

      <section className="lg:flex  justify-center items-center gap-5 mx-5 lg:mx-[315px] mb-[120px]">
        {cards?.map((card) => (
          <Card key={card.id} card={card}></Card>
        ))}
      </section>

      <section>
        <h1 className=" text-3xl md:text-[48px] lg:text-[48px] text-[#0A2533] text-center font-bold leading-[59.52px] tracking-[-0.72px] mb-[50px]">
          We built global community for <br />
          creators like you
        </h1>
        <div className="lg:mx-[244px] mb-20">
          <CommunityMap className="hidden lg:block " />
        </div>
      </section>

      <section>
        <div>
          <h1 className="text-center text-[48px] font-bold leading-[59.52px] tracking-[-0.72px] mt-[120px] mb-3">
            Trusted by Top Brands
          </h1>
          <p className="text-center text-[20px] md:text-[27px] lg:text-base font-normal leading-[25.6px] ">
            <small>More than 45,000+ companies trust besnik</small>
          </p>
          <section className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 justify-center items-center  gap-24  mt-12 mb-[120px] ml-28 md:ml-20 lg:mx-[410px]">
            <span className="lg:-mt-10">
              <Nextdoor />
            </span>
            <span>
              <Slack className="my-7" />
            </span>
            <span>
              <Amazon />
            </span>
            <span>
              <Union className="my-7" />
            </span>
            <span>
              <Microsoft />
            </span>
          </section>
        </div>
      </section>
    </div>
  );
};

export default BusinessCardArea;
