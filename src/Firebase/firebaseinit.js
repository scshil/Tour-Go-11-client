import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebaseConfic";
const FirrebaseAuthentication = () => {
  initializeApp(firebaseConfig);
};
export default FirrebaseAuthentication;
