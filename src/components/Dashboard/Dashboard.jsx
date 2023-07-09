import React from "react";
import Button from "./Button/Button";
import CardProduct from "../CardProduct/CardProduct";
import ProductList from "./ProductList/ProductList";

function Dashboard() {
  const products = [
    {
      id: 1,
      title: "PS5",
      category: "Video Juegos",
      price: 500,
      description: "Consola de video juegos",
    },
    {
      id: 2,
      title: "Monitor",
      category: "PC",
      price: 200,
      description: "Monitor de 24 pulgadas",
    },
    {
      id: 3,
      title: "Nintendo Switch",
      category: "Video Juegos",
      price: 300,
      description: "Consola de video juegos",
    },
    {
      id: 4,
      title: "Placa Madre",
      category: "PC",
      price: 100,
      description: "Placa madre para PC",
    },
    // Agrega más productos aquí
  ];

  const filters = [
    "Categoría",
    "Precio",
    "Marca",
    "Ofertas",
    // Agrega más filtros aquí
  ];

  return (
    <div className="flex">
      <div className="w-1/4 p-4">
        {/* Filtros */}
        <h2 className="text-xl mb-2">Filtrar</h2>
        <ul className="space-y-2">
          {filters.map((filter, index) => (
            <li key={index}>
              <Button filter={filter} />
            </li>
          ))}
        </ul>
      </div>
      <ProductList />
    </div>
  );
}

export default Dashboard;
