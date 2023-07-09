"use client";
import React, { useContext } from "react";
import { ShoppingContext } from "@/contexts/ShoppingContext";

function CardTotal() {
  const { total } = useContext(ShoppingContext);

  return (
    <div className="flex items-center space-x-4 p-4 bg-gray-500 shadow rounded-lg justify-center">
      <div>
        <h2 className="text-xl font-bold">PAGAR</h2>
        <p className="text-gray-600">TOTAL: S/.{total}</p>
        <button
          className="text-white bg-cyan-600 rounded-lg px-5 py-1"
          onClick={() => {}}
        >
          PAGAR
        </button>
      </div>
    </div>
  );
}

export default CardTotal;
