"use client";
import React from "react";
import { useState } from "react";

function Button({ filter }) {
  const [count, setCount] = useState(0);

  const handleClick = (v) => {
    setCount(count + 1);
  };

  return (
    <div>
      <button
        onClick={() => handleClick("hola")}
        className="bg-gray-200 px-4 py-2 rounded w-full text-left"
      >
        {filter}
      </button>
    </div>
  );
}

export default Button;
