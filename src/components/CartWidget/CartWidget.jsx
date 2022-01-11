import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const CartWidget = () => {
  return (
    <div>
      <FontAwesomeIcon icon={faShoppingCart} />
      <p>5</p>
    </div>
  );
};

export default CartWidget;
