import React from "react";
import { createContext } from "react";
import useFirebase from "../../hooks/useFirebase";

export const AuthContext = createContext();
const Authprovider = ({ children }) => {
  const allcontext = useFirebase();
  return (
    <AuthContext.Provider value={allcontext}>{children}</AuthContext.Provider>
  );
};

export default Authprovider;