import React, { useContext } from "react";
import { useLoaderData, useLocation, useNavigate } from "react-router-dom";
import { MdLibraryBooks } from "react-icons/md";
import { AiTwotoneTrophy, AiOutlineCheck, AiTwotoneLock } from "react-icons/ai";
import { BiDevices } from "react-icons/bi";
import { linkWithCredential } from "firebase/auth";
import { AuthContext } from "../../Auth/AuthProvider";
import { BsFillPlayCircleFill } from "react-icons/bs";

export const CourseDetails = ({
  course: {
    _id,
    category_name,
    title,
    images: { large },
    instructor,
    badges,
    total_hours,
    rating,
    certificate,
    accessible: {
      full_time,
      device: { mobile, PC, TV },
    },
    about,
    price,
  },
}) => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const handleNavigate = () => {
    if (user?.uid) navigate(`/checkout/${_id}`);
    else navigate("/login");
    console.log(_id);
  };
  return (
    <section className="flex flex-col justify-center gap-5 lg:gap-10">
      <img className="w-3/4 rounded-lg" src={large} alt="" />
      <div className="flex items-center gap-3">
        <img
          className="rounded-full w-10"
          src="https://images.unsplash.com/photo-1485206412256-701ccc5b93ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=894&q=80"
          alt=""
        />
        <h4>
          Instructor: <span className="font-semibold">{instructor}</span>
        </h4>
        <span className="border border-l-2 border-slate-600"></span>
        <span className="flex gap-2 items-center">
          <MdLibraryBooks />
          <h4>{category_name}</h4>
        </span>
        <span className="border border-l-2 border-slate-600"></span>
        <span className="flex gap-2 items-center">
          {certificate && (
            <>
              <BsFillPlayCircleFill />
              <h4>{total_hours} hours of video</h4>
            </>
          )}
        </span>
        <span className="border border-l-2 border-slate-600"></span>
        <span className="flex gap-2 items-center">
          {certificate && (
            <>
              <AiTwotoneTrophy />
              <h4>
                <span className="font-semibold">Certificate</span> of completion
              </h4>
            </>
          )}
        </span>
        <span className="border border-l-2 border-slate-600"></span>
        <span className="flex gap-2 items-center">
          {full_time && (
            <>
              <BiDevices />
              <h4>
                <span className="font-semibold"> Full Lifetime</span> Accessible
                With {mobile && "Mobile"}
                {PC && ", PC "}
                {TV && ", TV"}
              </h4>
            </>
          )}
        </span>
      </div>
      <div className="flex justify-between">
        <h1 className="text-3xl font-bold">{title}</h1>
        <span className="text-[#fe3f4c] hover:text-base-100 hover:bg-[#fe3f4c] px-4 py-2 border border-[#fe3f4c] rounded duration-200">
          {price || "Free"}
        </span>
      </div>
      <div className="uppercase text-sm bg-[#a0ce4e] w-fit px-8 py-4 rounded-lg text-white">
        Overview
      </div>
      <div className="border border-gray-300 rounded p-5">
        <h3 className="text-xl font-semibold">What you'll learn</h3>
        <ul className="grid lg:grid-cols-2 mt-5 gap-5">
          {about.map((a) => (
            <li className="flex items-center gap-3">
              <AiOutlineCheck />
              {a}
            </li>
          ))}
        </ul>
      </div>
      <h3 className="text-xl font-semibold">
        Log In / Register now to unlock this Course
      </h3>
      <button
        onClick={handleNavigate}
        className="bg-[#a3ce54] rounded-full border border-[#a3ce54] hover:bg-base-100 hover:text-[#a3ce54] text-white font-bold py-2 lg:py-4 px-4 lg:px-8 focus:outline-none focus:shadow-outline duration-200 w-96 flex items-center gap-3 justify-center"
        type="submit"
      >
        <AiTwotoneLock /> Get Access Now!
      </button>
    </section>
  );
};
