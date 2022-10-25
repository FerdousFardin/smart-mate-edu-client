import React, { createContext } from "react";
import app from "../firebase/firebase.config";
import { getAuth } from "firebase/auth";

export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const auth = useAuth(app);
  return (
    <AuthContext.Provider value={{}}>
      <>{children}</>
    </AuthContext.Provider>
  );
};
