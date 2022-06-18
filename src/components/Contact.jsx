import React from "react";

export const Contact = () => {
  const contact = "ivanmiguelalvarez@gmail.com";
  if (!contact) return null;

  return (
    <div  name="contact"
    className="flex justify-between items-center w-full h-20 text-white bg-black ">
      <button  className="bg-gray-600 hover:bg-gray-800 text-white font-bold  py-1 px-2 rounded inline-flex items-center m-4">
  <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
  <span>Resume</span>
</button>
      <a href={`mailto:${contact}`}>
        <button className="bg-gray-600 hover:bg-gray-800 text-white font-bold  py-1 px-2 rounded inline-flex items-center m-4">
          Email me!
        </button>
      </a>
    </div>
  );
};
