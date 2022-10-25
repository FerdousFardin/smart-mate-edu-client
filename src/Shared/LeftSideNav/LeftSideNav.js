import React from "react";
import { Link } from "react-router-dom";

export const LeftSideNav = ({ category: { thumbnail, id, name } }) => {
  // console.log(id, name);
  return (
    <ul className=" w-full">
      {/* <!-- Items Section --> */}
      <li className="hover:bg-[#a0ce4ebf] hover:text-base-100 active: duration-150 w-full">
        <Link
          to={`categories/${id}`}
          className="h-16 px-6 flex gap-3 items-center w-full active:scale-95 duration-150"
        >
          <img className="w-10 h-10" src={thumbnail} alt="" />
          <h4 className="">{name}</h4>
        </Link>
      </li>
    </ul>
  );
};
