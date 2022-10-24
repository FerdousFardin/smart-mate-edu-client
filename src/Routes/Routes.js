import { createBrowserRouter } from "react-router-dom";
import { Main } from "../Components/Main/Main";

export const routes = createBrowserRouter([
  { path: "/", element: <Main />, children: [] },
]);
