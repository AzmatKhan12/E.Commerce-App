import React, { Fragment } from "react";
import Heading from "./Heading";

import Items from "./items";

const Store = props =>{
    return (
      <Fragment>
        <Heading/>
        <Items/>
      </Fragment>
      
    );
}

export default Store;