import React from "react";
import notfound from "../../Picture/banner_error_404.jpg";
import "./Notfound.css";
const Notfound = () => {
  return (
    <div className=" notfound-bg ">
      <div>
        <img src={notfound} alt="" srcset="" />
      </div>
    </div>
  );
};

export default Notfound;
