"use client";
import React, { useContext } from "react";
import { ShoppingContext } from "@/contexts/ShoppingContext";

function CardProduct({ product }) {
  const { addToCart } = useContext(ShoppingContext);

  const handleAddToCart = () => {
    // Lógica para agregar el producto al carrito
    addToCart(product);
  };
  return (
    <div className="card rounded-lg border border-cyan-800 p-3">
      <img
        src={product.imagen}
        alt={product.nombre}
        className="card-image pb-2"
      />
      <div className="card-content">
        <h3 className="card-title">{product.nombre}</h3>
        <p className="card-description">{product.descripcion}</p>
        <p className="card-price">${product.precio}</p>
      </div>
      <div className="flex justify-center">
        <button
          onClick={handleAddToCart}
          className="card-button bg-fuchsia-700 rounded-lg px-3 py-1 :hover:bg-fuchsia-500"
        >
          Agregar
        </button>
      </div>
    </div>
  );
}

export default CardProduct;
