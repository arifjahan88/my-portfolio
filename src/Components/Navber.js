import React from "react";

const Navber = () => {
  return (
    <div className="navbar p-4 justify-between lg:justify-around">
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
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <p>Home</p>
            </li>
            <li>
              <p>Experience</p>
            </li>
            <li>
              <p>About</p>
            </li>
            <li>
              <p>Portfolio</p>
            </li>
            <li>
              <p>Contact Me</p>
            </li>
          </ul>
        </div>
        <p className="btn btn-ghost normal-case text-xl">Arif Jahan</p>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <p>Home</p>
          </li>
          <li>
            <p>Experience</p>
          </li>
          <li>
            <p>About</p>
          </li>
          <li>
            <p>Portfolio</p>
          </li>
          <li>
            <p>Contact Me</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navber;
