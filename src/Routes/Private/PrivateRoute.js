import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { HashLoader } from "react-spinners";
import { AuthContext } from "../../Auth/AuthProvider";

export const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (user?.uid) return <>{children}</>;
  if (loading)
    return (
      <div className="h-screen w-full grid place-items-center">
        <HashLoader color="#a0ce4e" size={100} speedMultiplier={1.45} />
      </div>
    );
  else <Navigate to={"/login"} state={{ from: location }} replace />;
};
