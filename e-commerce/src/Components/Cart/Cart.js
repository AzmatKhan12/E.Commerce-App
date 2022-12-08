import React from "react";
import classes from './Cart.module.css';
import CartItems from "./CartItems";
import { Button, Card } from "react-bootstrap";
import Modal from "../UI/Modal";
import cartElements from "../../utils/CartData";


const Cart = props =>{

     const Cartitems = (
       <ul className={classes["cart-items"]}>
         {cartElements.map((crt) => (
           <CartItems
             id={crt.id}
             title={crt.title}
             imageUrl={crt.imageUrl}
             price={crt.price}
             quantity={crt.quantity}
             //  onAdd = {}
             //  onRemove = {}
           />
         ))}
       </ul>
     );

     console.log(Cartitems);
        
    
    return (
      <Modal>
        <Card>
          {Cartitems}
          <div className={classes.total}>
            <sapan>Total Amount</sapan>
            <span> 300</span>
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