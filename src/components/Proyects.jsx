import React from "react";
import gifApp from "../assets/gif-expert-app.png";
import nodeNoteApp from "../assets/node-notes-app.png";
import alkemy from "../assets/alkemy.png";

export const Proyects = () => {
    const proyects = [
        {
          id: 1,
          src:gifApp ,
          demo:'https://pyvan23.github.io/GifExpertApp',
          repo:'https://github.com/pyvan23/GifExpertApp',
        },{
          id:2,
          src:nodeNoteApp,
          demo:'#',
          repo:'https://github.com/pyvan23/Node-Notes-App',
        },{
          id:3,
          src:alkemy,
          demo:'https://documenter.getpostman.com/view/15547223/UVktoYcg',
          repo:'https://github.com/alkemyTech/OT140-SERVER',
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
          {proyects.map(({ id, src,demo,repo }) => (
            <div key={ id } className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={ src }
                alt="proyects"
                className="rounded-md duration-100 hover:scale-105"
              />
               <div className="flex items-center justify-center">
               <button type="button" className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm  text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800 w-1/2 px-6 py-3 m-4">
                  <a href={demo} >Demo</a>
                </button>
                <button  type="button" className="w-1/2  m-4 text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"> 
                 <a href={repo}>Repo</a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
