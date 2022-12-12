import React,{useRef, useState} from "react";

import Input from "../UI/Input";

const ItemsForm = props =>{
  const [isQuantityValid, setIsQuantityValid] = useState(true)
  const quantityInputRef = useRef()
    
  const submitHandler= (event)=>{
    
      event.preventDefault()
      const enteredQuantity = quantityInputRef.current.value;
      const enteredQuantityNumber = +enteredQuantity;
      console.log('submit')

      if (enteredQuantity.trim().length === 0 ||enteredQuantityNumber > 5 ||enteredQuantityNumber < 0) {
        setIsQuantityValid(false);
        return;
      }

      props.onAddToCart(enteredQuantityNumber);
      
      console.log(enteredQuantityNumber);
    }
    
      
    
      return (
        <form onSubmit={submitHandler}>
          <Input
            ref={quantityInputRef}
            label="Quantity"
            input={{
              id: "quantity" + props.id,
              type: "number",
              min: "1",
              max: "5",
              step: "1",
              defaultValue: "1",
            }}
          />
          <button > Add To Cart</button>
          {!isQuantityValid && <p>Please EnterValid Quantity(1-5) </p>}
        </form>
      );
}
export default ItemsForm;