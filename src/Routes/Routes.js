import { createBrowserRouter } from "react-router-dom";
import { CourseDetails } from "../Components/CourseDetails/CourseDetails";
import { Main } from "../Components/Main/Main";
import { Blog } from "../Pages/Blog/Blog";
import { CategoryCourses } from "../Pages/CategoryCourses/CategoryCourses";
import { Checkout } from "../Pages/Checkout/Checkout";
import { Courses } from "../Pages/Courses/Courses";
import { CoursesContainer } from "../Pages/CoursesContainer/CoursesContainer";
import { Error } from "../Pages/Error/Error";
import { Login } from "../Pages/Login/Login";
import { SignUp } from "../Pages/SIgnUp/SignUp";
import { PrivateRoute } from "./Private/PrivateRoute";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    loader: () => fetch("https://smart-mate-edu.vercel.app/categories"),
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Courses />,
      },
      {
        path: "/courses",
        element: <CoursesContainer />,
        loader: () => fetch("https://smart-mate-edu.vercel.app/courses"),
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      { path: "/login", element: <Login /> },
      { path: "/signup", element: <SignUp /> },
      {
        path: "/categories/:id",
        element: <CategoryCourses />,
        loader: ({ params }) =>
          fetch(`https://smart-mate-edu.vercel.app/categories/${params.id}`),
      },
      {
        path: "/checkout/:id",
        loader: ({ params }) =>
          fetch(`https://smart-mate-edu.vercel.app/course/${params.id}`),
        element: (
          <PrivateRoute>
            <Checkout />
          </PrivateRoute>
        ),
      },
    ],
  },
]);
