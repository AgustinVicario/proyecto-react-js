import React from "react";
import ItemCount from "../ItemCount/ItemCount";

export default function ItemListContainer() {
  function onAdd() {
    console.log("Item added");
  }
  return (
    <>
      <ItemCount stock={5} initial={1} onAdd={onAdd} />
    </>
  );
}
