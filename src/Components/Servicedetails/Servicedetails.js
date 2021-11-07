import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useForm } from "react-hook-form";

import "./Servicedetails.css";

import axios from "axios";
import useFirebase from "../../hooks/useFirebase";

const Servicedetails = () => {
  const { user } = useFirebase();
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    axios.post("http://localhost:7000/purchesitem", data).then((res) => {
      // console.log(data);

      reset();
    });
    /* 
    
     console.log(data); console.log(user);
    console.log(service);  */
  };
  const { id } = useParams();
  const [service, setService] = useState({});

  useEffect(() => {
    const url = `http://localhost:7000/services/${id}`;
    // console.log(url);
    fetch(url)
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);
  return (
    <div className=" ">
      <section className="container mb-5">
        <h1>{service.Name}</h1>
        <div className="row row-cols-1">
          <div className="">
            <img className="img-fluid" src={service.img} alt="" />
          </div>
        </div>
      </section>
      {/* form */}
      <section className="mt-5 confirm-booking">
        <h1>Booking</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          Name:
          <input
            {...register("name", { required: true, maxLength: 20 })}
            defaultValue={user.displayName}
          />
          Your Plan:
          <input {...register("porductname")} defaultValue={service.Name} />
          Email:
          <input {...register("email")} defaultValue={user.email} />
          Price:
          <input
            type="text"
            {...register("price")}
            defaultValue={service.price}
          />
          <input type="submit" />;
        </form>
      </section>
    </div>
  );
};

export default Servicedetails;
