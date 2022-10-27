import React from "react";
import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";

export const CourseCard = ({
  course: {
    category_id,
    title,
    images: { small },
    instructor,
    badges,
    rating,
  },
}) => {
  return (
    <div className="max-w-2xl mx-auto ">
      <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img className="rounded-t-lg" src={small} alt="" />
        </a>
        <div className="p-5">
          <a href="#">
            <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2 dark:text-white">
              {title}
            </h5>
          </a>
          <div className="font-normal text-gray-700 mb-3 dark:text-gray-400">
            {" "}
            <p>
              Instructor: <strong>{instructor}</strong>
            </p>
            <p className="flex gap-2">
              Rating: <strong>{rating}</strong>
              <AiFillStar className="w-6 h-6 text-[#FFD700]" />
            </p>
            {badges.length
              ? badges.map((badge, idx) => (
                  <p
                    key={idx}
                    className="badge badge-sm md:badge-md lg:badge-lg border-[#FFD700] bg-[#FFD700] text-white mr-2"
                  >
                    {badge}
                  </p>
                ))
              : ""}
          </div>
          <Link
            to={`/categories/${category_id}`}
            className="text-white hover:text-[#a3ce54] bg-[#a3ce54] hover:bg-base-100 focus:ring-4 focus:ring-[#a3ce54] border border-[#a3ce54] font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center duration-200"
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
};
/* 
<!-- component -->
<!-- This is an example component -->

*/
