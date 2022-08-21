import React from "react";
import html from "../assets/html.png";

import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import node from "../assets/node.png";
import docker from "../assets/docker.png"
import mongo3 from "../assets/mongo3.png";
import firebase from "../assets/descarga.png"
import mysql from "../assets/mysql.png"

export const Skills = () => {
  
  const skills = [
    {
      id: 1,
      src: html,
      title: "HTML",
    },
   
    {
      id: 2,
      src: javascript,
      title: "JavaScript",
    },
    {
      id: 3,
      src: reactImage,
      title: "React",
    },
    {
      id: 4,
      src: mongo3,
      title: "Mongo",
    },
    {
      id: 5,
      src: node,
      title: "Node JS",
    },
    {
      id:6,
      src:docker,
      title:"docker",
    },
    {id:7,
      src:firebase,
      title:"firebase",
    },
    {id:8,
      src:mysql,
      title:"mysql",
    }
  ];
  return (
    <div
      name="skills"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-4 ">
            Skills
          </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {skills.map(({ id, src, title }) => (
            <div key={id}>
              <img src={src}  alt="" className="w-20 mx-auto hover:scale-105 duration-200" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
