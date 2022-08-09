import React from "react";
import { Link } from "react-scroll";
import { useState } from "react";
import { FaTimes, FaBars, FaCloudDownloadAlt, FaEnvelope } from "react-icons/fa";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import resume from "../assets/FullStack-React-Node.pdf";



export const NavBar = () => {
  
  
  const [nav, setNav] = useState( false );
  
  const contact = "ivanmiguelalvarez@gmail.com";
  if (!contact) return null;
  
  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "contact me",
    },
    {
      id: 3,
      link: "proyects",
    },
    {
      id: 4,
      link: "skills",
    },

    {
      id: 5,
      link: "about",
    },
  ];

  return (
    <div className="flex justify-between items-center w-full h-20 text-white bg-black  fixed">
      <div>
        <ul className="flex flex-row px-4  ">
          <li className="px-3 hover:scale-105 duration-200">
            <a
              href="https://www.linkedin.com/in/ivanmalvarez"
              className="flex justify-between items-center w-full text-white  "
            >
              <FaLinkedin size={30}   />
            </a>
          </li>
          <li className=" px-3 hover:scale-105 duration-200">
            <a
              href="https://github.com/pyvan23"
              className="flex  justify-between items-center w-full text-white "
            >
              <FaGithub size={ 30 }  />
            </a>
          </li>
          <li className=" px-3 hover:scale-105 duration-200">
          <a href={resume}  target="_blank"  rel="noopener noreferrer" download="resume fullstack software developer">
          
        
              <FaCloudDownloadAlt size={ 33 } />
            </a>
          </li>
          <li className=" px-3 hover:scale-105 duration-200">
    <a href={`mailto:${contact}`}  >
        <FaEnvelope size={ 33 }   />
      </a>
    </li>
        </ul>
      </div>

      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            key={ id }
            className="px-4 cursor-pointer capitalize font-medium text-white hover:scale-105 duration-200"
          >
            <Link to={ link } smooth duration={ 500 }>
              { link }
            </Link>
          </li>
        ))}
      </ul>

      <div
        onClick={ () => setNav( !nav )}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={ 30 } /> : <FaBars size={ 30 } />}
      </div>
      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {links.map(({ id , link }) => (
            <li
              key={ id }
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              <Link
                onClick={ () => setNav( !nav ) }
                to={ link }
                smooth
                duration={ 500 }
              >
                { link }
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
