import React, { useReducer } from "react";
import CartContex from "./CartContext";
 
const defaultCartState ={
  items :[],
  totalAmount :0
}

const cartReducer = (state, action) =>{
  if (action.type === 'ADD'){
    const updatedTotalAmount = state.totalAmount + action.item.price * action.item.quantity;
   
    const existingCartItemIndex = state.items.findIndex((item)=>{
      return item.id === action.item.id
    });


    const existingItem = state.items[existingCartItemIndex];
    let updatedItems;
    if(existingItem){
      const updateditem=
      {...existingItem,
          quantity : existingItem.quantity + action.item.quantity

      }

      updatedItems = [...state.items]
      updatedItems[existingCartItemIndex] = updateditem;
    }
    else{
     updatedItems = [...state.items,action.item]
    }
    return {
      items:  updatedItems,
      totalAmount:updatedTotalAmount
    };

  }

  if(action.type === 'REMOVE'){

    const existingCartItemIndex = state.items.findIndex((item) => 
      item.id === action.id
    );

    const existingItem = state.items[existingCartItemIndex];

    const updatedTotalAmount = state.totalAmount - existingItem.price;
      
    let updatedItems;
    if (existingItem.quantity === 1){
        updatedItems = state.items.filter((item) => item.id !== action.id);
    }
    else{
      const updateditem = {
        ...existingItem,
        quantity: existingItem.quantity - 1
      }
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updateditem;
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount
    };
  }
  return defaultCartState;
}

const CartProvider = props =>{

  const [CartState , dispatchCartAction] =useReducer(cartReducer,defaultCartState)

    const addToCartHandlar =  (item) =>{
      dispatchCartAction({type :"ADD" ,item :item})
    }

    const removeCartHandlar =(id) =>{
      dispatchCartAction({ type: "REMOVE", id: id });
    }

    const CartContext = {
      items: CartState.items,
      totalAmount: CartState.totalAmount,
      addItem: addToCartHandlar,
      removeItem: removeCartHandlar,
    };

    return (
      <CartContex.Provider value={CartContext}>
        {props.children}
      </CartContex.Provider>
    );
}

export default CartProvider;