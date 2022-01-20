import React, { useEffect, useState } from "react";
import ItemCount from "./ItemCount";
import ItemList from "./ItemList";
import "./Items.css";

export default function ItemListContainer(props) {
  function onAdd() {
    console.log("Item added");
  }
  let ItemListJson = [
    {
      id: "producto1",
      title: "Camiseta Miami Heat Temporada 2019",
      description: "Descripcion",
      price: "5.000",
      stock: 5,
      pictureUrl:
        "https://camisetas.win/image/cache/o/wade-miami-heat-2020-city-edition-jersey-rdc-max-1200x1200.jpg",
    },
    {
      id: "producto2",
      title: "Camiseta Miami Heat Temporada 2022",
      description: "Descripcion",
      price: "10,000",
      stock: 10,
      pictureUrl: "https://cf.shopee.cl/file/a48bb3423b69a0adcab95ecb4bc31c8d",
    },
    {
      id: "producto3",
      title: "Camiseta Nueva York Knicks Temporada 2022",
      description: "Descripcion",
      price: "15,000",
      stock: 8,
      pictureUrl:
        "https://images.footballfanatics.com/new-york-knicks/new-york-knicks-nike-association-swingman-jersey-custom-youth_ss4_p-11897224+u-18veearhho4ptl99wyza+v-64ef6da992ee4effb05a59f441e7bb2f.jpg?_hv=1&w=600",
    },
  ];

  const [itemList, setItemList] = useState([]);

  const obtenerProductos = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(ItemListJson);
    }, 2000);
  });

  useEffect(() => {
    obtenerProductos.then((res) => {
      setItemList(res);
    });
  });

  return (
    <>
      <h3 className="Catalogo"> {props.greeting} </h3>
      {<ItemCount stock={5} initial={1} onAdd={onAdd} />}
      <ItemList itemList={itemList} />
    </>
  );
}
