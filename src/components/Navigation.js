import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="border border-cyan rounded-lg w-[40%] mt-16 flex justify-around align-middle">
      <NavLink
        to="/"
        end
        className={({ isActive }) => {
          return `w-full text-base text-center font-numito m-2.5 bg-gray-200 text-gray-100  border-0 cursor-pointer rounded capitalize font-semibold
        ${
          isActive
            ? "bg-cyan text-gray-300"
            : "bg-gray-200 text-gray-100hover:text-cyan active:bg-cyan active:text-gray-300"
        }`;
        }}
      >
        Crypto
      </NavLink>
      <NavLink
        to="/trending"
        className={({ isActive }) => {
          return `w-full text-base text-center font-numito m-2.5 bg-gray-200 text-gray-100  border-0 cursor-pointer rounded capitalize font-semibold
        ${
          isActive
            ? "bg-cyan text-gray-300"
            : "bg-gray-200 text-gray-100hover:text-cyan active:bg-cyan active:text-gray-300"
        }`;
        }}
      >
        Trending
      </NavLink>
      <NavLink
        to="/saved"
        className={({ isActive }) => {
          return `w-full text-base text-center font-numito m-2.5 bg-gray-200 text-gray-100  border-0 cursor-pointer rounded capitalize font-semibold
        ${
          isActive
            ? "bg-cyan text-gray-300"
            : "bg-gray-200 text-gray-100hover:text-cyan active:bg-cyan active:text-gray-300"
        }`;
        }}
      >
        Saved
      </NavLink>
    </nav>
  );
};

export default Navigation;
