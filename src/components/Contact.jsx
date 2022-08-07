import React from "react";
import resume from "../assets/FullStack-React-Node.pdf";

export const Contact = () => {
  
  const contact = "ivanmiguelalvarez@gmail.com";
  if (!contact) return null;

  return (
    <div
      name="contact"
      className="flex justify-between items-center w-full h-20 text-white bg-black "
    >
      <button className="bg-gray-800 hover:bg-gray-900 text-white font-bold  py-1 px-2 rounded inline-flex items-center m-4">
        <a href={resume}  target="_blank"  rel="noopener noreferrer" download="resume fullstack software developer">
          Resume
        </a>
      </button>

     
      <a href={`mailto:${contact}`}>
        <button className="bg-gray-800 hover:bg-gray-900 text-white font-bold  py-1 px-2 rounded inline-flex items-center m-4">
          Email me!
        </button>
      </a>
    </div>
  );
};
