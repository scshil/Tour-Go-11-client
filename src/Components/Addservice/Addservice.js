import React from "react";
import { useForm } from "react-hook-form";
import "./Servicedetails.css";
const Addservice = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    fetch("https://pure-crag-33813.herokuapp.com/addservice", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((service) => {
        if (service?.insertedId) {
          alert("Sucessfully Addaded");
          reset();
        }
      });
  };
  return (
    <div className="min-vh-100">
      <h1 className="my-3">Add a Package</h1>
      <form className="addService my-5" onSubmit={handleSubmit(onSubmit)}>
        <input {...register("serviceName")} placeholder="enter a Package" />
        <textarea
          {...register("details")}
          placeholder="enter Package details"
        />
        <input {...register("picture")} placeholder="enter a picture" />
        <input
          type="number"
          {...register("price")}
          placeholder="enter a price"
        />
        <input type="submit" value="ADD" />
      </form>
    </div>
  );
};

export default Addservice;
