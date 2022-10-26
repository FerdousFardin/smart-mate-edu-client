import React, { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";

export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      // if(user===null||)
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

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
      value={{ user, loading, signUpUser, signInUser, signInWithProvider }}
    >
      <>{children}</>
    </AuthContext.Provider>
  );
};
