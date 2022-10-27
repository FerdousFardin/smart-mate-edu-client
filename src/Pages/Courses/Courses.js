import React from "react";

export const Courses = () => {
  return (
    <div className="bg-[url(https://i.ibb.co/V3zsLDZ/bg7.jpg)] w-full h-full bg-cover flex flex-col gap-2 justify-center items-center">
      <h1 className="font-extralight text-2xl lg:text-4xl text-white text-center">
        Choose From A Range Of{" "}
        <strong className="font-semibold">Online Courses</strong>
      </h1>
      <h1 className="hidden lg:block font-extralight text-4xl text-white text-center">
        Trusted by Over <strong className="font-semibold">5000+</strong>Students
      </h1>
      <h3 className="text-lg lg:text-2xl text-white text-center my-5">
        We have a fully qualified and very well educated teaching staff,
        continuous student counseling, and a very effective and enthusiastic
        student support staff.
      </h3>
      <button
        className="bg-[#a3ce54] rounded-full border border-[#a3ce54] hover:bg-base-100 hover:text-[#a3ce54] text-white font-medium py-1  lg:py-4 px-2 lg:px-8 focus:outline-none focus:shadow-outline duration-200 my-5 lg:my-0"
        type="submit"
      >
        Browse All Courses
      </button>
    </div>
  );
};
//https://i.ibb.co/V3zsLDZ/bg7.jpg
