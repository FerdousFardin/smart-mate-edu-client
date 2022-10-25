import { createBrowserRouter } from "react-router-dom";
import { Main } from "../Components/Main/Main";
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
        // element
      },
      { path: "/login", element: <Login /> },
      { path: "/signup", element: <SignUp /> },
    ],
  },
]);
