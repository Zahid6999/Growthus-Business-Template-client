import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/Logo/Logo (1).svg";
import { motion } from "framer-motion";

// -------------Framer Motion Variants --------------
const navLinkHover = {
  hover: {
    scale: 1.1,
    transition: {
      yoyo: 10,
      duration: 0.3,
    },
  },
};
const Header = () => {
  return (
    <>
      <div className="navbar lg:pl-[365px] lg:pr-[244px] bg-[#F5FDFF] pt-8">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link
                  to="/about"
                  className="text-base font-medium  leading-[22.8px] text-[#0A2533] "
                >
                  About
                </Link>
              </li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <Link className="text-base font-medium  leading-[22.8px] text-[#0A2533]">
                  Services
                </Link>
              </li>
              <li>
                <Link className="text-base font-medium  leading-[22.8px] text-[#0A2533] ">
                  Work/Case Study
                </Link>
              </li>
              <li>
                <Link className="text-base font-medium  leading-[22.8px] text-[#0A2533] ">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <Link to="/">
            <span>
              <Logo />
            </span>
          </Link>
        </div>

        <motion.div
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{
            delay: 0.4,
            duration: 0.4,
          }}
          className=" hidden lg:flex lg:-ml-[96px]"
        >
          <ul className="menu menu-horizontal px-1">
            <motion.li variants={navLinkHover} whileHover="hover">
              <Link
                to="/about"
                className="text-base font-medium  leading-[22.8px] text-[#0A2533] mr-5"
              >
                About
              </Link>
            </motion.li>

            {/* <li tabIndex={0}>
              <details>
                <summary>Parent</summary>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </details>
            </li> */}

            <motion.li variants={navLinkHover} whileHover="hover">
              <Link
                to="/services"
                className="text-base font-medium  leading-[22.8px] text-[#0A2533] mr-5"
              >
                Services
              </Link>
            </motion.li>
            <motion.li variants={navLinkHover} whileHover="hover">
              <Link className="text-base font-medium  leading-[22.8px] text-[#0A2533] mr-5">
                Work/Case Study
              </Link>
            </motion.li>
            <motion.li variants={navLinkHover} whileHover="hover">
              <Link className="text-base font-medium  leading-[22.8px] text-[#0A2533]">
                Blog
              </Link>
            </motion.li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.2, duration: 0.5, type: "spring" }}
          className="ml-[86px] hidden md:block lg:block"
        >
          <a className="text-sm font-bold leading-[22.12px] text-[#203B3C] bg-[#A0E1DA] hover:bg-[#74e7db] hover:ring-offset-2 ring-2 hover:duration-300  py-[14px] px-[22px] rounded-lg">
            Let’s Talk
          </a>
        </motion.div>
      </div>
    </>
  );
};

export default Header;
