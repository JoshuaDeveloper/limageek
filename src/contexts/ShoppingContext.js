"use client";

import { createContext, useEffect, useState } from "react";

const ShoppingContext = createContext();

const ShoppingProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const addToCart = (item) => {
    item.quantity = 1;
    //verificar si el item ya esta en el carrito

    const itemInCart = cart.find((cartItem) => cartItem.id === item.id);

    if (itemInCart) {
      //actualizar la cantidad
      itemInCart.quantity++;
      setCart([...cart]);
    }
    //si no esta en el carrito
    else {
      setCart([...cart, item]);
    }
  };

  const removeFromCart = (item) => {
    setCart(cart.filter((cartItem) => cartItem.id !== item.id));
  };

  const clearCart = () => {
    setCart([]);
  };

  //agregar cantidad
  //quitar cantidad

  const increaseQuantity = (item) => {
    const itemInCart = cart.find((cartItem) => cartItem.id === item.id);

    if (itemInCart) {
      //actualizar la cantidad
      itemInCart.quantity++;
      setCart([...cart]);
    }
  };

  const decreaseQuantity = (item) => {
    const itemInCart = cart.find((cartItem) => cartItem.id === item.id);

    //verificar que no sea menor a 1

    if (itemInCart.quantity > 1) {
      itemInCart.quantity--;
      setCart([...cart]);
    }
  };

  const cartContextValue = {
    increaseQuantity,
    decreaseQuantity,
    total,
    cart,
    addToCart,
    removeFromCart,
    clearCart,
  };

  useEffect(() => {
    let newTotal = 0;
    cart.forEach((item) => {
      //concertir
      newTotal += item.precio * item.quantity;
    });
    setTotal(newTotal);
  }, [cart]);

  return (
    <ShoppingContext.Provider value={cartContextValue}>
      {children}
    </ShoppingContext.Provider>
  );
};

export { ShoppingProvider, ShoppingContext };
