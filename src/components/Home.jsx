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
            I'm Ivan a Fullstack Web Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Repudiandae, ipsa. Tempora, eos! Eos, exercitationem molestias.
            Alias, inventore, exercitationem iste amet possimus dolorem veniam
            culpa, corporis minima nisi sed ea doloribus.
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
