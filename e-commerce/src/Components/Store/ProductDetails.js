import React from "react";
import { useParams } from "react-router-dom";
import Items from "./items";

const ProductDetails = props=>{
    const param =useParams()
    console.log(param.productId)
    return (
      <section>
        <p>
          <h1>Product details</h1>
        </p>
        <p>{param.productId}</p>
        <Items />
      </section>
    );
}

export default ProductDetails;