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
  const [isloading, setisloading] = useState(true);
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();
  //   google signin
  const googleSignin = (location, history) => {
    setisloading(true);
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const current = location?.state?.from || "/";
        history.replace(current);
        setUser(result.user);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setisloading(false));
  };
  //   track on current user
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      }
      setisloading(false);
    });
  }, []);
  //   logout
  const logout = () => {
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .finally(() => setisloading(false));
  };
  return {
    errors,
    user,
    googleSignin,
    logout,
    isloading,
  };
};
export default useFirebase;
