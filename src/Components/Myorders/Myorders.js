import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Col, Container, Row, Table, Button } from "react-bootstrap";
import useAuth from "../../hooks/useAuth";

const Myorders = () => {
  const [orders, setOrders] = useState([]);
  const { user } = useAuth();
  useEffect(() => {
    fetch(`https://pure-crag-33813.herokuapp.com/purchesitem/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [user]);
  const deletePackage = (id) => {
    fetch(`https://pure-crag-33813.herokuapp.com/delete/${id}`, {
      method: "DELETE",
      // headers:{
      //   "content-tupe" : "application/json"
      // }
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.deletedCount > 0) {
          alert("Click OK to confirm Delete");
          const remaining = orders.filter((order) => order._id !== id);
          setOrders(remaining);
        }
      });

    // console.log(id);
  };
  return (
    <div className="min-vh-100">
      <Container>
        <h1 className="my-3">Total Ordres {orders.length}</h1>
        <Row className="my-5">
          <Col>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Package Name</th>
                  <th>Price</th>
                  <th>Contact No</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => (
                  <tr key={order?._id}>
                    <td>{orders.indexOf(order) + 1}</td>
                    <td>{order?.packagename}</td>
                    <td>{`${order?.price}TK`}</td>

                    <td>{order?.phoneNo}</td>
                    <td>
                      <Button
                        onClick={() => deletePackage(order?._id)}
                        variant="danger"
                      >
                        Delete
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Myorders;
