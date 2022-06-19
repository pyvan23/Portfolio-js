import React from "react";

export const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white ">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-3xl font-bold ">About</p>
        </div>
        <p className="text-xl mt-20">
        I am currently finishing my programming degree at the Teclab Higher Institute.
I acquired experience in backend development at the Alkemy academy when we made a website for an NGO with a team of 8 people, where scrum was used as a work methodology, the technologies used for the project were node.js, express, mysql with sequelize like ORM and cypress for testing.
I have also developed other projects with the complete MERN stack, MongoDb, Express.js, React.js, Node.js.
        </p>
        <br />
       
      </div>
    </div>
  );
};
