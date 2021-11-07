import React from "react";

import useFirebase from "../../hooks/useFirebase";

import login from "../../Picture/login.jpg";
const Login = () => {
  const { googleSignin } = useFirebase();

  return (
    <div>
      <h1>Unlock Yourself</h1>
      <div className="d-flex justify-content-evenly mt-5 ">
        <div className="d-flex align-items-center ">
          <button onClick={googleSignin}>Gmail</button>
        </div>
        <div>
          <img height="200px" src={login} alt="" srcset="" />
        </div>
      </div>
    </div>
  );
};

export default Login;
