import React from "react";
import Item from "./Item";
import "./Items.css";

export default function ItemList(props) {
  return (
    <>
      {props.itemList.length > 0 ? (
        <div className="d-flex">
          {props.itemList.map((item) => {
            return <Item key={item.id} item={item} />;
          })}
        </div>
      ) : (
        <div className="inicio">Cargando productos espere...</div>
      )}
    </>
  );
}
