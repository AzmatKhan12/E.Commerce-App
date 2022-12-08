import React from "react";
import classes from './CartItem.module.css';

const CartItems = props =>{
    return (
      <li className={classes["cart-item"]}>
        <div>
          <span className={classes.summary}>{props.title}</span>
          <div className={classes.summary}>
            <span>
              <img src={props.imageUrl} style={{ width: "40px" }} />
            </span>

            <span className={classes.price}>{props.price}</span>
            <span className={classes.amount}>x {props.quantity}</span>
          </div>
        </div>
        <div className={classes.actions}>
          <button  onClick={props.onRemove}>−</button>
          <button  onClick={props.onAdd}>+</button>
        </div>
      </li>
    );
}

export default CartItems;