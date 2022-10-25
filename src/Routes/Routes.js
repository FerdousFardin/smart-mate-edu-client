import { createBrowserRouter } from "react-router-dom";
import { Main } from "../Components/Main/Main";
import { Courses } from "../Pages/Courses/Courses";
import { Login } from "../Pages/Login/Login";
import { SignUp } from "../Pages/SIgnUp/SignUp";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    // errorElement,
    children: [
      {
        path: "/",
        element: <Courses />,
      },
      { path: "/login", element: <Login /> },
      { path: "/signup", element: <SignUp /> },
    ],
  },
]);
