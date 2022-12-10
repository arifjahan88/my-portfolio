import React from "react";
import photo from "../assets/about_photo.jpg";

const About = () => {
  return (
    <div>
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 py-2 inline">
            About Me
          </p>
          <p className="py-6">A short discription about me.</p>
        </div>
      </div>
      <div className="grid grid-cols-2">
        <div className="flex items-center justify-end mr-5">
          <img className="w-2/4 rounded-xl" src={photo} alt=""></img>
        </div>
        <div className="w-2/3 ">
          <h2 className="text-4xl font-bold mb-5">Full Stack Web Develper</h2>
          <p>
            Hi, I am Arif Jahan. I'm a driven Full Stack Developer with
            experience in React.js, Node.js, Express.js, Google Authentication,
            MongoDB, JavaScript, HTML, CSS, Bootstrap, Tailwind, and developing
            mobile-responsive websites.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
