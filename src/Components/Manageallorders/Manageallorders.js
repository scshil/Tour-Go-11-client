import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Col, Container, Row, Table, Button } from "react-bootstrap";
import useAuth from "../../hooks/useAuth";
const Manageallorders = () => {
  const { user } = useAuth();
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    fetch("https://pure-crag-33813.herokuapp.com/purchesitem")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [user]);
  const deleteorder = (id) => {
    fetch(`https://pure-crag-33813.herokuapp.com/delete/${id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.deletedCount > 0) {
          alert("Click Ok for Delete");
          const remaining = orders.filter((order) => order._id !== id);
          setOrders(remaining);
        }
      });
    console.log(id);
  };
  //   console.log(orders);
  return (
    <div className="min-vh-100">
      <Container>
        <h1 className="my-3">Total Ordres {orders.length}</h1>
        <Row lg={12} md={12} sm={12} className="my-5">
          <Col>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Package Name</th>
                  <th>Client</th>
                  <th>Email</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => (
                  <tr key={order?._id}>
                    <td>{orders.indexOf(order) + 1}</td>
                    <td>{order?.packagename}</td>
                    <td>{order?.name}</td>
                    <td>{order?.email}</td>
                    <td>{`${order?.price}TK`}</td>
                    <td>
                      <Button
                        onClick={() => deleteorder(order?._id)}
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

export default Manageallorders;
