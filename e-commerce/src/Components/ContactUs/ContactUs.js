import React,{useRef} from "react";
import classes from './ContactUs.module.css';
import { Card, Container } from "react-bootstrap";
const ContactUs = props =>{

    const nameRef = useRef("");
    const emailRef = useRef("");
    const numberRef = useRef("");

    function submitHandler(event) {
      event.preventDefault();

      // could add validation here..
      const userDetails = {
        name: nameRef.current.value,
        email: emailRef.current.value,
        number: numberRef.current.value,
      };

      
    }
    //  addDetailsHandler(userDetails);
    async function addDetailsHandler(...userDetails) {
      const response = await fetch(
        "https://e-commerce-ca6c1-default-rtdb.asia-southeast1.firebasedatabase.app/customer.json",
        {
          method: "POST",
          body: JSON.stringify(userDetails),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      console.log(data);
    }

    return (
      <Container className="mt-4" >
        <Card style={{ width: "50rem", marginLeft: "16rem" }}>
          <form onSubmit={submitHandler}>
            <div className={classes.control}>
              <label htmlFor="name">Name</label>
              <input type="text" id="name" ref={nameRef} />
            </div>
            <div className={classes.control}>
              <label htmlFor="email">E-mail id</label>
              <input type="email" id="email" ref={emailRef} />
            </div>

            <div className={classes.control}>
              <label htmlFor="number">Phone Number</label>
              <input type="number" id="number" ref={numberRef} />
            </div>

            <button>Submit</button>
          </form>
        </Card>
      </Container>
    );
}
export default ContactUs;