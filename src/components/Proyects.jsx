import React from "react";
import gifApp from "../assets/gif-expert-app.png";

export const Proyects = () => {
    const portfolios = [
        {
          id: 1,
          src:gifApp ,
        },]
  return (
    <div name="proyects" className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
            <p className="text-4xl font-bold ">
                Proyects
            </p>
        </div>
        <div>
            <div>
                <img src={gifApp} alt="gifApp"/>
                <div>
                    <button>Demo</button>
                    <button>Repo</button>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};
