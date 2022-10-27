import React from "react";
import { NavLink } from "react-router-dom";

export const LeftSideNav = ({ category: { thumbnail, id, name } }) => {
  const activeClass = "text-[#a3ff54] w-full";
  return (
    <>
      {/* <!-- Items Section --> */}
      <li className="hover:bg-[#a0ce4ebb]  focus:bg-[#a0ce4ebb] duration-150 w-full">
        <NavLink
          to={`categories/${id}`}
          className={({ isActive }) => (isActive ? activeClass : "")}
        >
          <span className="h-8 lg:h-16 px-3 lg:px-6 flex gap-1 lg:gap-3 items-center w-full active:scale-95 duration-150 hover:text-base-100">
            <img className="w-5 h-5 lg:w-10 lg:h-10" src={thumbnail} alt="" />
            <h4 className="text-sm lg:text-base">{name}</h4>
          </span>
        </NavLink>
      </li>
    </>
  );
};
