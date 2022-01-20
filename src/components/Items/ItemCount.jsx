import React, { useState } from "react";
import { Button } from "react-bootstrap";
import "./Items.css";

export default function ItemCount(props) {
  const [count, setCount] = useState(props.stock > 0 ? 1 : props.initial);

  return (
    <>
      <div style={{ width: "250px" }}>
        <div className="btn1">
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
            className="btn1"
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
          <Button
            className="ItemCount"
            variant="outline-success"
            onClick={() => props.onAdd()}
          >
            Agregar al carrito
          </Button>
        </div>
      </div>
    </>
  );
}
