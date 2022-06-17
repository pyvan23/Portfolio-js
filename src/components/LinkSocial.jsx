import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

export const LinkSocial = () => {
  return (
    <div className="flex-col top-[35%] left-0 fixed">
      <ul>
        <li>
          <a href="">
            <>
              Linkedin <FaLinkedin />
            </>
          </a>
        </li>
      </ul>
    </div>
  );
};
