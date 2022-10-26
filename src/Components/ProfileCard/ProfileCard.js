import React, { useContext } from "react";
import { AiOutlineLogout } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Auth/AuthProvider";

export const ProfileCard = () => {
  const { user, signOutUser } = useContext(AuthContext);
  console.log(user);
  return (
    // <!-- component -->
    <div className="mx-auto right-0 mt-2 w-60 dropdown-content menu p-2 shadow bg-base-300 rounded-box">
      <div className="bg-base-200 rounded overflow-hidden shadow-lg">
        <div className="text-center p-6 bg-[#a3ce54] border-b">
          {user?.photoURL ? (
            <img
              className="h-24 w-24 text-white rounded-full mx-auto"
              src={user.photoURL}
              alt=""
            />
          ) : (
            <FaUserCircle className="h-24 w-24 text-white rounded-full mx-auto" />
          )}
          <p className="pt-2 text-lg font-semibold text-gray-800">
            {user?.displayName ? user.displayName : "Name not available"}
          </p>
          <p className="text-sm text-gray-800">
            {user?.email ? user.email : "Email not available"}
          </p>
          {user?.uid && (
            <div className="mt-5">
              <a className="border rounded-full py-2 px-4 text-xs font-semibold text-gray-800">
                Manage your Account
              </a>
            </div>
          )}
        </div>

        {user?.uid ? (
          <div className="">
            <button
              onClick={() =>
                signOutUser()
                  .then(() => {})
                  .catch((er) => console.error(er))
              }
              href="#"
              className="w-full px-4 py-2 pb-4 hover:bg-gray-100 flex"
            >
              <AiOutlineLogout className="h-4 w-4 text-gray-800 fill-current mr-2" />
              <p className="text-sm font-medium text-gray-800 leading-none">
                Logout
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
      </div>
    </div>
  );
};
