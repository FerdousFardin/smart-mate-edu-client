import { createBrowserRouter } from "react-router-dom";
import { Main } from "../Components/Main/Main";
import { CategoryCourses } from "../Pages/CategoryCourses/CategoryCourses";
import { Courses } from "../Pages/Courses/Courses";
import { Login } from "../Pages/Login/Login";
import { SignUp } from "../Pages/SIgnUp/SignUp";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    loader: () => fetch("http://localhost:5000/categories"),
    // errorElement,
    children: [
      {
        path: "/",
        element: <Courses />,
      },
      { path: "/login", element: <Login /> },
      { path: "/signup", element: <SignUp /> },
      {
        path: "/categories/:id",
        element: <CategoryCourses />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/categories/${params.id}`),
      },
    ],
  },
]);
