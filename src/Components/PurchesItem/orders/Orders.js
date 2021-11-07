import React, { useState } from "react";

const Orders = (props) => {
  // const [deletedData, setDeletedData] = useState([]);
  const { or } = props;
  const deleteItem = (id) => {
    fetch(`http://localhost:7000/delete/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        // setDeletedData(data);
        if (data.deletedCount > 0) {
          alert("sucessfull");
          /*     const remaining = or.filter((dt) => dt._id !== id);
          setDeletedData(remaining); */
        }
      });
    /*  .then((res) => res.json())
      .then((data) => {
        setDeletedData(data);
          if(data.deletedCount>0){
        alert("sucessfull")
        const remaning= deletedData.filter(delete => delete._id !== id)
        setDeletedData(remaning) 
      }
      });  */
  };
  return (
    <div className="container ">
      <table className="table">
        <tbody>
          <tr>
            {/* <td> Email:{or.email}</td> */}
            <td> Ordered Item:{or.porductname}</td>
            <td> Price:{or.price}</td>
            <button onClick={() => deleteItem(or._id)}>Delete</button>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Orders;
