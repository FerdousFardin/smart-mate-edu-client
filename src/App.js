import logo from "./logo.svg";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import { routes } from "./Routes/Routes";

function App() {
  return (
    <div className="custom-font">
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
