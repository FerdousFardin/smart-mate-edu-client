import React, { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";

export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const auth = getAuth(app);
  const signUpUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const signInWithProvider = (provider) => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };
  const signOutUser = () => {
    setLoading(true);
    return signOut(auth);
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      //|| currentUser.emailVerified

      setUser(currentUser);

      setLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);
  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        signUpUser,
        signInUser,
        signInWithProvider,
        signOutUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
