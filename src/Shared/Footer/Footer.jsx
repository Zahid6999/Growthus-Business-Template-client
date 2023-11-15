import React from "react";
import { ReactComponent as Logo } from "../../assets/Logo/Logo.svg";
import { ReactComponent as Button } from "../../assets/Img/button.svg";

const Footer = () => {
  return (
    <footer className="footer px-8 md:px-8 lg:px-[365px] py-[120px] bg-[#0A2533] text-base-content">
      <aside>
        <span>
          <Logo />
        </span>
        <p className="mt-[27px] text-[#D9EBF4] ">
          Lorem ipsum is placeholder text commonly
          <br /> used in the graphic, print, and publishing .
        </p>
        <section className="mt-[102px]">
          <p className="mt-[27px] mb-3 ml-2 text-[#D9EBF4]">Stay in touch</p>
          <form>
            <fieldset className="form-control w-[231px] h-[50px]">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Your email address"
                  className="input text-sm font-normal text-[#F5F5F5] bg-[#1D3643] w-full pr-16 py-[17px] rounded-[18px]"
                />
                <button className="pt-1 pb-2 pr-2 absolute top-0 right-0 rounded-l-none">
                  <Button />
                </button>
              </div>
            </fieldset>
          </form>
          <p className="text-base text-[#F4F7FF] leading-[25.6px] mt-[120px] ">
            Copyright 2021 Static Mania, All rights reserved!
          </p>
        </section>
      </aside>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
        <nav>
          <header className="text-[#A0E1DA] text-base font-bold leading-normal tracking-[-0.32px] mb-4">
            Company
          </header>
          <a className="link link-hover text-sm text-[#D9EBF4] pb-4 leading-[16.8px] font-medium block">
            About
          </a>

          <a className="link link-hover  text-sm text-[#D9EBF4] pb-4 leading-[16.8px] font-medium block">
            Careers
          </a>

          <a className="link link-hover  text-sm text-[#D9EBF4]  leading-[16.8px] font-medium block">
            Blog
          </a>
        </nav>
        <nav>
          <header className="text-[#A0E1DA] text-base font-bold leading-normal tracking-[-0.32px] mb-4">
            Canada
          </header>
          <a className="link link-hover text-sm text-[#D9EBF4] pb-4 leading-[16.8px] font-medium">
            1901 Thornridge Cir. Shiloh, <br /> Hawaii 81063
          </a>
        </nav>
        <nav className="lg:pl-[97px]">
          <header className="text-[#A0E1DA] text-base font-bold leading-normal tracking-[-0.32px] mb-4">
            Social Media
          </header>
          <a className="link link-hover text-sm text-[#D9EBF4] pb-4 leading-[16.8px] font-medium  block">
            FaceBook
          </a>
          <a className="link link-hover text-sm text-[#D9EBF4] pb-4 leading-[16.8px] font-medium block">
            Twitter
          </a>
          <a className="link link-hover text-sm text-[#D9EBF4] pb-4 leading-[16.8px] font-medium block">
            Linkdin
          </a>
        </nav>
        <nav className="mt-10">
          <header className="text-[#A0E1DA] text-base font-bold leading-normal tracking-[-0.32px] mb-4">
            Legal
          </header>
          <a className="link link-hover text-sm text-[#D9EBF4] pb-4 leading-[16.8px] font-medium block">
            Accessibility
          </a>
          <a className="link link-hover text-sm text-[#D9EBF4] pb-4 leading-[16.8px] font-medium block">
            Privacy Policy
          </a>
          <a className="link link-hover text-sm text-[#D9EBF4] pb-4 leading-[16.8px] font-medium block">
            Terms of Service
          </a>
          <a className="link link-hover text-sm text-[#D9EBF4] pb-4 leading-[16.8px] font-medium block">
            Business Plicy
          </a>
        </nav>
        <nav className="lg:-mt-10">
          <header className="text-[#A0E1DA] text-base font-bold leading-normal tracking-[-0.32px] mb-4">
            United States
          </header>
          <a className="link link-hover text-sm text-[#D9EBF4]  leading-[16.8px] font-medium block">
            2118 Thornridge Cir. Syracuse, <br /> Connecticut 35624
          </a>

          <nav className="mt-10 ">
            <header className="text-[#A0E1DA] text-base font-bold leading-normal tracking-[-0.32px] mb-4">
              Work inquiries
            </header>
            <a className="link link-hover text-sm text-[#D9EBF4] pb-4 leading-[16.8px] font-medium block">
              Interested in working with us? <br />
              info@staticminia.com
            </a>
            <a className="link link-hover text-sm text-[#D9EBF4] pb-4 leading-[16.8px] font-medium block">
              Ph: +3.230.705.5448
            </a>
          </nav>
        </nav>
        <nav className="mt-10 lg:pl-[97px]">
          <header className="text-[#A0E1DA] text-base font-bold leading-normal tracking-[-0.32px] mb-4">
            Resources
          </header>
          <a className="link link-hover text-sm text-[#D9EBF4] pb-4 leading-[16.8px] font-medium block">
            Help & Support
          </a>
          <a className="link link-hover text-sm text-[#D9EBF4] pb-4 leading-[16.8px] font-medium block">
            Customer Case Studies
          </a>
          <a className="link link-hover text-sm text-[#D9EBF4] pb-4 leading-[16.8px] font-medium block">
            Cookie policy
          </a>
        </nav>
      </section>
    </footer>
  );
};

export default Footer;
