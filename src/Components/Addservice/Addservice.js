import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import "./Addservice.css";
const Addservice = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    // console.log(data);
    axios.post("http://localhost:7000/addservice", data).then((res) => {
      //   console.log(res);
      reset();
    });
  };
  return (
    <div className="add-service">
      <h1>add service</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("Name", { required: true, maxLength: 20 })}
          placeholder="Name"
        />
        <textarea {...register("discription")} placeholder="discription" />
        <input type="number" {...register("price")} placeholder="price" />
        <input {...register("img")} placeholder="image" />
        <input type="submit" />
      </form>
    </div>
  );
};

export default Addservice;
