import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import {Badge} from "react-bootstrap";
import CartContex from "../ContexApi/CartContext";


const BtnCart = props =>{

  const CartCtx = useContext(CartContex)
  const numberOFCartItems = CartCtx.items.reduce((curNumber,item)=>{
    return curNumber + item.quantity;
  },0)
  
    return (
      <Button variant="primary" onClick={props.onShowCart}>
        Cart <Badge bg="secondary">{numberOFCartItems}</Badge>
      </Button>
    );
}

export default BtnCart