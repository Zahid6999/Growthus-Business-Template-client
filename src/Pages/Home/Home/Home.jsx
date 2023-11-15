import React from "react";
import Banner from "../Banner/Banner";
import BrandBusiness from "../BrandBusiness/BrandBusiness";
import WorkProcess from "../WorkProcess/WorkProcess";
import Community from "../Community/Community";
import Testimonials from "../Testimonials/Testimonials";
import BusinessSound from "../../../Shared/BusinessSound/BusinessSound";
import AboutContact from "../../About/AboutContact/AboutContact";

const Home = () => {
  return (
    <div>
      <Banner />
      <BrandBusiness />
      <WorkProcess />
      <Community />
      <Testimonials />
      <BusinessSound />
      <AboutContact />
    </div>
  );
};

export default Home;
