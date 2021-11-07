import React, { useEffect, useState } from "react";
import Searvice from "../Searvice/Searvice";

const Services = () => {
  const [service, setService] = useState([]);
  useEffect(() => {
    fetch("http://localhost:7000/services")
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);
  return (
    <div className="container">
      <h1>services</h1>
      <div className="row row-cols-3  g-5 mt-5 ">
        {" "}
        {service.map((ser) => (
          <Searvice key={ser._id} service={ser}></Searvice>
        ))}
      </div>
    </div>
  );
};

export default Services;
