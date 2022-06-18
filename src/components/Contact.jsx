import React from "react";

export const Contact = () => {
  const contact = "ivanmiguelalvarez@gmail.com";
  if (!contact) return null;

  return (
    <div  name="contact"
    className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800">
      <h2>Contact</h2>
      <a href={`mailto:${contact}`}>
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
          Email me!
        </button>
      </a>
    </div>
  );
};
