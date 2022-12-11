import React, { useContext } from "react";
import classes from './Cart.module.css';
import CartItems from "./CartItems";
import { Button, Card } from "react-bootstrap";
import Modal from "../UI/Modal";
import cartElements from "../../utils/CartData";
import CartContex from "../ContexApi/CartContext";


const Cart = props =>{

  const addItemHandaler = (item) =>{
    CartCtx.addItem({ ...item, quantity: 1 });
  }

  const removeCartHandlar = (id) =>{
    CartCtx.removeItem(id)
  }

  const CartCtx = useContext(CartContex)
  const totalAmount = ` $${CartCtx.totalAmount}`


     const CartItem = (
       <ul className={classes["cart-items"]}>
         {CartCtx.items.map((item) => (
           <CartItems
             key={item.id}
             id={item.id}
             title={item.title}
             imageUrl={item.imageUrl}
             price={item.price}
             quantity={item.quantity}
             onAdd={addItemHandaler.bind(null, item)}
             onRemove={removeCartHandlar.bind(null, item.id)}
           />
         ))}
       </ul>
     );

    return (
      <Modal>
        <Card>
          {CartItem}
          <div className={classes.total}>
            <span>Total Amount</span>
            <span>{totalAmount}</span>
          </div>

          <div className="ms-4">
            <Button
              className="m-1"
              variant="warning"
              onClick={props.onRemoveCart}
            >
              Close
            </Button>
            <Button className="m-1" variant="success">
              Order
            </Button>
          </div>
        </Card>
      </Modal>
    );
}

export default Cart;