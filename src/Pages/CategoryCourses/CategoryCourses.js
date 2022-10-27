import React from "react";
import { useLoaderData } from "react-router-dom";
import { CourseDetails } from "../../Components/CourseDetails/CourseDetails";

export const CategoryCourses = () => {
  const [course] = useLoaderData();
  return (
    <div className="m-5 lg:m-10">
      <CourseDetails course={course} />
    </div>
  );
};
