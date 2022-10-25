import React, { createContext } from "react";
import app from "../firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";

export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const auth = getAuth(app);
  const signUpUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const signInWithProvider = (provider) => {
    return signInWithPopup(auth, provider);
  };
  return (
    <AuthContext.Provider
      value={{ signUpUser, signInUser, signInWithProvider }}
    >
      <>{children}</>
    </AuthContext.Provider>
  );
};
