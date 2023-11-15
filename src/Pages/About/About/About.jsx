import React from "react";
import AboutBanner from "../AboutBanner/AboutBanner";
import BusinessCardArea from "../BusinessCardArea/BusinessCardArea";
import Teams from "../Teams/Teams";
import AboutContact from "../AboutContact/AboutContact";
import BusinessSound from "../../../Shared/BusinessSound/BusinessSound";

const About = () => {
  return (
    <div>
      <AboutBanner />
      <BusinessCardArea />
      <Teams />
      <AboutContact />
      <BusinessSound />
    </div>
  );
};

export default About;
