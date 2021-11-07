import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router";
import Orders from "./orders/Orders";

const Purchesitem = () => {
  const { email } = useParams();
  const [order, setOrder] = useState([]);
  // console.log(email);
  useEffect(() => {
    const url = `http://localhost:7000/purchesitem/${email}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setOrder(data));
  }, [email]);
  // console.log(order);
  return (
    <div>
      <h1>your plans</h1>

      {order.map((or) => (
        <Orders key={or._id} or={or}></Orders>
      ))}
    </div>
  );
};

export default Purchesitem;
