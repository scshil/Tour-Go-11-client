import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
} from "@firebase/auth";
import { useEffect, useState } from "react";
import FirrebaseAuthentication from "../Firebase/firebaseinit";

FirrebaseAuthentication();
const useFirebase = () => {
  const [user, setUser] = useState({});
  const [errors, setError] = useState("");
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();
  //   google signin
  const googleSignin = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        setUser(result.user);
        // console.log(result.user);
        //   console.log(user);
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  //   track on current user
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      }
    });
  }, []);
  //   logout
  /* const logout = () => {
    signOut(auth).then(() => {
      setUser("");
    });
  }; */
  return {
    errors,
    user,
    googleSignin,
    // logout,
  };
};
export default useFirebase;
