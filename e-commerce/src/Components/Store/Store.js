import React, { Fragment } from "react";
import Heading from "./Heading";
import { Data } from "../../utils/Data";
import Items from "./items";

const Store = props =>{
  const product = Data.map((item) => (
    <Items 
    id={item.id}
    key= {item.id}
    imageUrl={item.imageUrl}
    title ={item.title}
    quantity ={item.quantity}
    price ={item.price} 
    />
  ));
  
  
    return (
      <Fragment>
        <Heading />
        <ul>{product}</ul>
      </Fragment>
    );
}

export default Store;