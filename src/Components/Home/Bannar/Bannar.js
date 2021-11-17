import React from "react";
import { Image } from "react-bootstrap";
import bannar from "../../../Picture/bannar1.jpg";
const Bannar = () => {
  return (
    <div>
      <Image src={bannar} fluid />
    </div>
  );
};

export default Bannar;
