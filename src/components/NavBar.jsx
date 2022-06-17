import React from "react";
import { useState } from "react";
import { FaTimes, FaBars } from "react-icons/fa";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export const NavBar = () => {
  const [nav, setNav] = useState(false);
  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "proyects",
    },
    {
      id: 4,
      link: "experience",
    },
    {
      id: 5,
      link: "contact",
    },
  ];

  return (
    <div className="flex justify-between items-center w-full h-20 text-white bg-black  fixed">
      <div>
      <ul className="flex flex-row px-4  ">
        <li className="px-2 hover:scale-105 duration-200">
          <a href="" className="flex justify-between items-center w-full text-white ">
            <FaLinkedin size={30} />
          </a>
        </li>
        <li className="hover:scale-105 duration-200">
          <a href=""   className="flex  justify-between items-center w-full text-white ">
            <FaGithub size={30} />
          </a>
        </li>
      </ul>
      </div>

      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200"
          >
            {link}
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              {link}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
