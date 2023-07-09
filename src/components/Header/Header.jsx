"use client";
import React from "react";
import Modal from "../Modal/Modal";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Link from "next/link";

function Header() {
  return (
    <header className="flex items-center justify-between bg-gray-800 text-white p-4">
      <div>
        <Link href="/">
          <h1>LimaGeek</h1>
        </Link>
      </div>
      <div>
        {/* Barra de búsqueda */}
        <input type="text" placeholder="Buscar" className="p-2 rounded" />
      </div>

      <div className="flex justify-center gap-2">
        {/* Botón */}
        <div className="flex justify-center items-center h-100">
          <Link href="/SalePage">
            {" "}
            <AiOutlineShoppingCart size={30} />
          </Link>
        </div>

        <Modal />
      </div>
    </header>
  );
}

export default Header;
