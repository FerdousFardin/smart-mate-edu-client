import React from "react";
import { Link } from "react-router-dom";

export const Error = () => {
  return (
    <section className="w-full h-screen flex justify-center text-center lg:text-left lg:items-center flex-col gap-2">
      <h1 className="text-[9rem] font-extralight text-[#a0ce4e]">404</h1>
      <h1 className="text-4xl font-bold mb-3">Oops! Page Not Found!</h1>
      <h3 className="font-light text-[#a0ce4e] mb-5">
        Either Something Get Wrong or the Page Doesn't Exist Anymore.
      </h3>
      <Link
        to="/"
        className="uppercase py-4 px-12 border-2 border-[#a3ce54] border-opacity-0 rounded-full hover:border-opacity-100 font-medium text-base-100 bg-[#a0ce4e] hover:bg-base-100 hover:text-[#a3ce54] duration-200 cursor-pointer w-fit self-center lg:self-auto"
      >
        Take me Home
      </Link>
    </section>
  );
};
