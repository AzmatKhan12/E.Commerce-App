import React, { Fragment } from "react";
import Heading from "./Heading";
import { Data } from "../../utils/Data";
import Items from "./items";
import Footer from "./Footer";


const Store = () =>{
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
        <Heading Heading={"The Generics"} />
        <main>
          <ul>{product}</ul>
        </main>

        <Footer title={"The Generics"} />
      </Fragment>
    );
}

export default Store;