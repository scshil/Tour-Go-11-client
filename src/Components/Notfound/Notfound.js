import React from "react";
import { Image } from "react-bootstrap";
import error from "../../Picture/errorPage.png";
import "./Notfound.css";
const Notfound = () => {
  return (
    <div className="min-vh-100 d-flex justify-content-center align-items-center errorpage">
      <Image src={error} fluid />
    </div>
  );
};

export default Notfound;
