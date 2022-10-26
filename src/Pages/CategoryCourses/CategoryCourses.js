import React from "react";
import { useLoaderData } from "react-router-dom";
import { CourseDetails } from "../../Components/CourseDetails/CourseDetails";

export const CategoryCourses = () => {
  const courses = useLoaderData();
  //   console.log(courses);
  return (
    <div className="m-5 lg:m-10">
      {courses.map((course) => (
        <CourseDetails key={course._id} course={course} />
      ))}
    </div>
  );
};
