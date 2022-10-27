import React from "react";
import { useLoaderData } from "react-router-dom";
import { CourseCard } from "../CourseCard/CourseCard";

export const CoursesContainer = () => {
  const courses = useLoaderData();
  return (
    <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 m-5 lg:items-start">
      {courses.map((c) => (
        <CourseCard key={c._id} course={c} />
      ))}
    </section>
  );
};
