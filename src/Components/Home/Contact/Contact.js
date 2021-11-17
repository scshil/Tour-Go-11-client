import React from "react";
import { useForm } from "react-hook-form";
import "./Contact.css";
const Contact = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    // console.log(data);
    if (data) {
      alert("Send");
      reset();
    }
  };
  return (
    <div>
      <div className="">
        <h6 className="my-3">Contact us</h6>
        <form className="contact my-5" onSubmit={handleSubmit(onSubmit)}>
          <input {...register("Your name")} placeholder="enter your Name" />
          <input {...register("Your email")} placeholder="enter your Email" />

          <textarea {...register("Message")} placeholder="Write Your Message" />

          <input type="submit" value="Send" />
        </form>
      </div>
    </div>
  );
};

export default Contact;
