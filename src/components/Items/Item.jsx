import React from "react";
import { Button } from "react-bootstrap";
import "./Items.css";
function Item(props) {
  return (
    <>
      <div className="card">
        <div className="hTitle">{props.item.title}</div>
        <div className="img">
          <img className="img img-fluid" src={props.item.pictureUrl} alt="" />
        </div>
        <div className="descripcion">{props.item.description}</div>
        <Button className="btnItem" variant="success">
          Mas Info aca!
        </Button>
        <div className="precio">$ {props.item.price}</div>
        <div className="stock">Stock: {props.item.stock}</div>
      </div>
    </>
  );
}
export default Item;
