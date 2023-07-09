"use client";

import React, { useContext, useEffect } from "react";
import CardProductHorizontal from "./CardProductHorizontal";
import { ShoppingContext } from "@/contexts/ShoppingContext";

function CardProductHorizontalList() {
  const { cart } = useContext(ShoppingContext);

  return (
    <div>
      {cart.map((product) => (
        <CardProductHorizontal key={product.id} product={product} />
      ))}
    </div>
  );
}

export default CardProductHorizontalList;
