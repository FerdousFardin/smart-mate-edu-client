import React from "react";
import { NavLink } from "react-router-dom";

export const LeftSideNav = ({ category: { thumbnail, id, name } }) => {
  const activeClass = "text-[#a3ff54] w-full";
  return (
    <ul className="w-full">
      {/* <!-- Items Section --> */}
      <li className="hover:bg-[#a0ce4ebb]  active: duration-150 w-full">
        <NavLink
          to={`categories/${id}`}
          className={({ isActive }) => (isActive ? activeClass : "")}
        >
          <span className="h-16 px-6 flex gap-3 items-center w-full active:scale-95 duration-150 hover:text-base-100">
            <img className="w-10 h-10" src={thumbnail} alt="" />
            <h4 className="">{name}</h4>
          </span>
        </NavLink>
      </li>
    </ul>
  );
};
