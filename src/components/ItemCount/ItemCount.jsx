import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";
import "../styles/ItemCount.css";

export default function ItemCount(props) {
  const [count, setCount] = useState(props.stock > 0 ? 1 : props.initial);

  return (
    <>
      <Card className="card" style={{ width: "18rem" }}>
        <Card.Img
          variant="ce"
          src="http://d3ugyf2ht6aenh.cloudfront.net/stores/001/291/743/products/img-20210210-wa00481-72566baadb34c9997616130040760753-640-0.jpg"
        />
        <Card.Body className="CardBody">
          <Card.Title className="title">Camiseta Miami Heat</Card.Title>
          <div className="d-flex flex-row justify-content-between">
            <Card.Text>Edicion Miami Vice Temporada 2019</Card.Text>
          </div>
          <div style={{ width: "250px" }}>
            <div className="d-flex flex-row justify-content-between">
              <Button
                variant="success"
                disabled={count < 1}
                onClick={() => {
                  setCount(count - 1);
                }}
              >
                -
              </Button>
              <div>{count}</div>
              <Button
                variant="warning"
                disabled={count >= props.stock}
                onClick={() => {
                  setCount(count + 1);
                }}
              >
                +
              </Button>
            </div>
            <div className="d-flex justify-content-center">
              <Button variant="outline-success" onClick={() => props.onAdd()}>
                Agregar al carrito
              </Button>
            </div>
          </div>
        </Card.Body>
      </Card>
    </>
  );
}
