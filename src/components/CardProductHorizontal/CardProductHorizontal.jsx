import React, { useContext } from "react";
import { ShoppingContext } from "@/contexts/ShoppingContext";

function CardProductHorizontal({ product }) {
  const { removeFromCart, increaseQuantity, decreaseQuantity } =
    useContext(ShoppingContext);

  return (
    <div className="flex items-center space-x-4 p-4 bg-gray-500 shadow rounded-lg mb-2">
      <img
        src={product.imagen}
        alt={product.nombre}
        className="w-24 h-24 object-contain"
      />
      <div>
        <h2 className="text-xl font-bold">{product.nombre}</h2>
        <p>{product.descripcion}</p>
        <p className="text-gray-600">Precio: ${product.precio}</p>
        <div className="flex ">
          <p className="text-gray-600">Cantidad: {product.quantity}</p>
          <button
            className="text-green-500 bg-gray-300 rounded-lg px-2 mx-2"
            onClick={() => {
              increaseQuantity(product);
            }}
          >
            +
          </button>
          <button
            className="text-red-500 bg-gray-300 rounded-lg px-2 mx-2"
            onClick={() => {
              decreaseQuantity(product);
            }}
          >
            -
          </button>
        </div>

        <button
          className="text-red-500"
          onClick={() => removeFromCart(product)}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
}

export default CardProductHorizontal;
