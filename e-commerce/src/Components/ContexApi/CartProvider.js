import React from "react";
import CartContex from "./CartContext";

const CartProvider = props =>{
    return (
        <CartContex.Provider>
          {props.children}
        </CartContex.Provider>
    );
}

export default CartProvider;