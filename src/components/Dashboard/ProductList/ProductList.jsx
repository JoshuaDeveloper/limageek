"use client";

import React, { useEffect, useState } from "react";
import { getDispositivos } from "@/utils/dispositivos";
import CardProduct from "../../CardProduct/CardProduct";

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getDispositivosData = async () => {
      const data = await getDispositivos();
      if (data) {
        setProducts(data);
      }
    };
    getDispositivosData();
  }, []);

  return (
    <div className="w-3/4 p-4">
      {/* Productos filtrados */}
      <h2 className="text-xl mb-2">Productos</h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {products.map((product) => (
          <li key={product.id}>
            <CardProduct product={product} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
