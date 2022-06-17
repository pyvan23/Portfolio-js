import React from "react";

export const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white ">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-3xl font-bold ">About</p>
        </div>
        <p className="text-xl mt-20">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
          quia, facilis illo ex blanditiis reiciendis porro libero consectetur
          aspernatur, praesentium aliquid aut quae accusamus id consequatur,
          iure quibusdam enim illum.
        </p>
        <br />
        <p className="text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio quaerat
          quas vitae suscipit sit amet possimus quis ratione! Dolores placeat,
          similique explicabo sed consequuntur harum magnam consectetur ea
          impedit possimus.
        </p>
      </div>
    </div>
  );
};
