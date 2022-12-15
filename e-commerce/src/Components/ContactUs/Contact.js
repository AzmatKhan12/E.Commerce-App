/** @format */

import React from "react";

import classes from "./Movie.module.css";

const Contact= (props) => {
  return (
    <li className={classes.movie}>
      <h2>{props.name}</h2>
      <h3>{props.email}</h3>
      <p>{props.number}</p>
    </li>
  );
};

export default Contact;
