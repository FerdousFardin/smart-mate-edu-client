import React from "react";
import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";

export const CourseCard = ({
  course: {
    _id,
    title,
    images: { small, large },
    instructor,
    badges: [badge],
    rating,
  },
}) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img className="" src={small} alt="" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>
          Instructor: <strong>{instructor}</strong>
        </p>
        <p className="flex gap-2">
          Rating: <strong>{rating}</strong>
          <AiFillStar className="w-6 h-6 text-[#FFD700]" />
        </p>
        {badge && (
          <p className="badge badge-sm md:badge-md lg:badge-lg border-[#FFD700] bg-[#FFD700] text-white">
            {badge}
          </p>
        )}
        <div className="card-actions justify-end">
          <Link
            to={`/course/${_id}`}
            className="bg-[#a3ce54] rounded-full border border-[#a3ce54] hover:bg-base-100 hover:text-[#a3ce54] text-white font-bold py-1 lg:py-2 px-1 md:px-2 lg:px-4 focus:outline-none focus:shadow-outline duration-200"
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
};
