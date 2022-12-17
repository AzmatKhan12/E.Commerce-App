/** @format */

import { Route, Redirect, Switch } from "react-router-dom";

import React, { Fragment, useState } from "react";
import NavBar from "../Components/Layout/NavBar";
import Store from "../Components/Store/Store";
import ProductDetails from "../Components/Store/ProductDetails";
import BtnCart from "../Components/Button/BtnCart";
import Cart from "../Components/Cart/Cart";
import CartProvider from "../Components/ContexApi/CartProvider";
import Home from "../Components/Home/Home";
import ContactUs from "../Components/ContactUs/ContactUs";
import About from "../Components/About/About";


const HomePage = () => {
  const [isShown, setIsShown] = useState(false);

  const ShowCartHandlar = () => {
    setIsShown(true);
  };

  const RemoveCartHandlar = () => {
    setIsShown(false);
  };
  return (
    <CartProvider>
      <Fragment>
        
        <header>
          {isShown && <Cart onRemoveCart={RemoveCartHandlar} />}
          <NavBar
            brand="E-Commerce"
            homePage="Home"
            store="Store"
            about="About-Us"
            contact="Contact-Us"
            cart={<BtnCart onShowCart={ShowCartHandlar} />}
          />
        </header>

        <main>
          <Switch>
            <Route path="/Home">
              <Home />
            </Route>
            <Route path="/store" exact>
              <Store />
            </Route>
            <Route path="/store/:productId">
              <ProductDetails />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/contact">
              <ContactUs />
            </Route>
          </Switch>
        </main>
      </Fragment>
    </CartProvider>
  );
};

export default HomePage;
