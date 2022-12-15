import React,{useRef} from "react";
import classes from './Contact.module.css';
const ContactUs = props =>{

    const nameRef = useRef("");
    const emailRef = useRef("");
    const numberRef = useRef("");

    function submitHandler(event) {
      event.preventDefault();

      // could add validation here...

      const details = {
        name: nameRef.current.value,
        email: emailRef.current.value,
        number: numberRef.current.value,
      };

       props.onContact(details);
    }
    return (
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
    );
}
export default ContactUs;