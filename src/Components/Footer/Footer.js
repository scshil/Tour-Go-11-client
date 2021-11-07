import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faPhone,
  faMobile,
  faTty,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div className="footer-color ">
      <div className="d-flex justify-content-around ">
        <div>
          <h3>
            <FontAwesomeIcon icon={faMapMarkerAlt} />
            location
          </h3>
          <h6>D.T road, 4202</h6>
          <h6>Pahartoli,Chottagong</h6>
        </div>
        <div className=" d-flex mt-5">
          <p>copoyright &#169;HealthScope </p>
        </div>
        <div>
          <h3>
            <FontAwesomeIcon icon={faPhone} />
            Contact
          </h3>
          <h6>
            <FontAwesomeIcon icon={faMobile} />
            01*******
          </h6>
          <h6>
            <FontAwesomeIcon icon={faTty} />
            +32-****
          </h6>
          <h6>
            <FontAwesomeIcon icon={faEnvelope} />
            healthscope@something.com
          </h6>
        </div>
      </div>
    </div>
  );
};

export default Footer;
