import React from "react";
import { useParams } from "react-router-dom";


const ProductDetails = props=>{
    const param =useParams()
    console.log(param.productId)
    return (
      <section>
        <p>
          <h1>Product details</h1>
        </p>
        <p>{param.productId}</p>
       
      </section>
    );
}

export default ProductDetails;