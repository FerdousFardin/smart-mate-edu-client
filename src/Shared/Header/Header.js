import React, { useContext } from "react";
import { Link, NavLink, useNavigate, useParams } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { AuthContext } from "../../Auth/AuthProvider";
import { ProfileCard } from "../../Components/ProfileCard/ProfileCard";
import { LeftSideNav } from "../LeftSideNav/LeftSideNav";
import { AiOutlineLogout } from "react-icons/ai";
import { IoReorderFourOutline } from "react-icons/io5";

export const Header = ({ categories }) => {
  const { user, signOutUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const { id } = useParams();
  let activeClass = "text-[#a3ce54] border-[#a3ce54]";
  return (
    <header className="header sticky top-0 bg-white shadow-md flex items-center lg:justify-between px-4 lg:px-8 py-02">
      {/* <!-- logo --> */}
      <h1 className="w-5/12 lg:w-3/12">
        <div className="dropdown lg:hidden">
          <label tabIndex={0} className="p-1">
            <span className="flex items-end hover:shadow-lg px-2 lg:px-3 py-1 rounded-lg hover:bg-slate-100 duration-200 ">
              <IoReorderFourOutline className="w-10 h-10 text-slate-500" />
              <img
                className=""
                src="https://i.ibb.co/Ltp4gh5/logo-2.png"
                alt=""
              />
            </span>
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu p-2 shadow bg-base-200 w-fit"
          >
            <li>
              {user?.uid ? (
                <div className="">
                  <button
                    onClick={() =>
                      signOutUser()
                        .then(() => {
                          navigate("/");
                        })
                        .catch((er) => console.error(er))
                    }
                    href="#"
                    className="w-full px-4 py-2 pb-4 hover:bg-gray-100 flex"
                  >
                    <AiOutlineLogout className="h-4 w-4 text-gray-800 fill-current mr-2" />
                    <p className="text-xs lg:textsm font-medium text-gray-800 leading-none">
                      Logout{" "}
                      <span className="inline lg:hidden">
                        {user?.displayName || "User"}
                      </span>
                    </p>
                  </button>
                </div>
              ) : (
                <>
                  <span className="flex gap-1">
                    <Link
                      className="w-full px-4 py-2 pb-4 text-black hover:bg-gray-100 flex"
                      to={"/login"}
                    >
                      Login
                    </Link>
                  </span>
                  <span className="flex gap-1">
                    <Link
                      className="w-full px-4 py-2 pb-4 text-black hover:bg-gray-100 flex"
                      to={"/signup"}
                    >
                      Register
                    </Link>
                  </span>
                </>
              )}
            </li>
            <div className="divider"></div>
            {categories.map((category) => (
              <LeftSideNav key={category.id} category={category} />
            ))}
          </ul>
        </div>
        <NavLink to={"/"} className="hidden lg:block ">
          <img
            className="hover:shadow-lg px-2 lg:px-3 py-1 rounded-lg hover:bg-slate-100 duration-200 "
            src="https://i.ibb.co/Ltp4gh5/logo-2.png"
            alt=""
          />
        </NavLink>
      </h1>

      {/* <!-- navigation --> */}
      <nav className=" nav text-lg">
        <ul className="flex items-center">
          <li className="p-4 pl-2 lg:pl-0 border-b-4 border-[#a3ce54] border-opacity-0 hover:border-opacity-100 hover:text-[#a3ce54] duration-200 cursor-pointer">
            <NavLink
              to={"/courses"}
              className={({ isActive }) => (isActive ? activeClass : undefined)}
            >
              Courses
            </NavLink>
          </li>
          <li className="p-4 pl-2 lg:pl-0 border-b-4 border-[#a3ce54] border-opacity-0 hover:border-opacity-100 hover:text-[#a3ce54] duration-200 cursor-pointer">
            <NavLink
              to={"faq"}
              className={({ isActive }) => (isActive ? activeClass : undefined)}
            >
              FAQ
            </NavLink>
          </li>
          <li className="p-4 pl-2 lg:pl-0 border-b-4 border-[#a3ce54] border-opacity-0 hover:border-opacity-100 hover:text-[#a3ce54] duration-200 cursor-pointer">
            <NavLink
              to={"blog"}
              className={({ isActive }) => (isActive ? activeClass : undefined)}
            >
              Blog
            </NavLink>
          </li>
        </ul>
      </nav>

      {/* <!-- buttons ---> */}
      <div className="w-3/12 hidden lg:flex justify-end items-center gap-5">
        <a href="" className=" h-8">
          <label className="swap swap-rotate">
            {/* <!-- this hidden checkbox controls the state --> */}
            <input type="checkbox" />

            {/* <!-- sun icon --> */}
            <svg
              className="swap-on fill-current w-8 h-8"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
            </svg>

            {/* <!-- moon icon --> */}
            <svg
              className="swap-off fill-current w-8 h-8"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
            </svg>
          </label>
        </a>
        <div className="dropdown dropdown-end">
          <button
            tabIndex={0}
            className=" hover:text-[#a3ce54] duration-200 cursor-pointer rounded-full tooltip tooltip-bottom"
            data-tip={user?.displayName ? user.displayName : "N/A"}
          >
            {user?.photoURL ? (
              <img
                className="w-10 h-10 duration-200 rounded-full p-1 bg-[#a3ce54]"
                src={user.photoURL}
              />
            ) : (
              <FaUser className="w-10 h-10 p-1 rounded-full hover:bg-base-300 hover:text-[#a3ce54] duration-200" />
            )}
          </button>
          <ul
            tabIndex={0}
            className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <ProfileCard />
            </li>
          </ul>
        </div>
      </div>
      {/* Mobile only */}
    </header>
  );
};
