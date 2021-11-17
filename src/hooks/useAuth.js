import { useContext } from "react";
import { AuthContext } from "../Context/Authprovider/Authprovider";

const useAuth = () => {
  const context = useContext(AuthContext);
  return context;
};
export default useAuth;
