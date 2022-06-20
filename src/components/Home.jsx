import React from "react";
import html5Img from "../assets/html5.png";


export const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I'm Ivan a 
            Full Stack Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
          Hello, I'm a full stack developer in JavaScript on the stack (MERN), I have management of different libraries and frameworks, I'm passionate about finding solutions, researching and above all things learning all the time about different technologies and tools.
          </p>
          
        </div>
        <div>
          <img
            src={html5Img}
            alt="img home"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};
