import React from "react";
import gifApp from "../assets/gif-expert-app.png";
import nodeNoteApp from "../assets/node-notes-app.png";

export const Proyects = () => {
    const proyects = [
        {
          id: 1,
          src:gifApp ,
        },{
          id:2,
          src:nodeNoteApp
        }]
  return (
    <div name="proyects" className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
            <p className="text-4xl font-bold ">
                Proyects
            </p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {proyects.map(({ id, src }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt="proyects"
                className="rounded-md duration-100 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="bg-gray-600 hover:bg-black text-white font-bold py-2 px-4 rounded">
                  Demo
                </button>
                <button className="bg-gray-600 hover:bg-black text-white font-bold py-2 px-4 rounded  m-4 ">
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
