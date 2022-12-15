/** @format */

import React from "react";

import Contact from "./Contact";
import classes from "./ContactList.module.css";

const ContactList = (props) => {
  return (
    <ul className={classes["movies-list"]}>
      {props.details.map((elem) => (
        <Contact
          key={elem.id}
          name={elem.name}
          email={elem.email}
          number={elem.number}
        />
      ))}
    </ul>
  );
};

export default ContactList;
