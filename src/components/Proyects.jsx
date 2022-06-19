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
    <div name="proyects" className="bg-gradient-to-b from-gray-800 to-gray-900 w-full text-white md:h-screen">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
            <p className="text-4xl font-bold border-b-4 border-gray-500 p-4 ">
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
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Demo
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
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
