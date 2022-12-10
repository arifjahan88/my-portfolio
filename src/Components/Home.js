import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import { TypeAnimation } from "react-type-animation";

import "./homeimg.css";

const Home = () => {
  return (
    <div>
      <div className="hero lg:p-24">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="lg:w-2/3 md:w-1/2 mx-auto key_image shadow-2xl"></div>
          <div>
            <h2 className="lg:text-5xl sm:text-7xl font-bold text-lime-600">
              Hi. there. I am
              {/* <p className="text-red-600">Full Stack Developer</p> */}
            </h2>
            <TypeAnimation
              className="font-bold text-red-600"
              sequence={[
                "Web Developer.",
                1000,
                "Front-End Developer.",
                1000,
                "Mern-Stack Developer.",
                1000,
              ]}
              //  Replacing previous Text
              style={{ fontSize: "4em" }}
              wrapper="h2"
              repeat={Infinity}
            />
            <p className="text-gray-500 py-4 w-4/5">
              I have 8 years of experience building and desgining software.
              Currently, I love to work on web application using technologies
              like React, Tailwind, Next JS and GraphQL.
            </p>
            <div>
              <Link
                smooth
                duration={500}
                className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
              >
                Portfolio
                <span className="group-hover:rotate-90 duration-300">
                  <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
