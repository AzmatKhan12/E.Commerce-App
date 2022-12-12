
import { Route, Router } from 'react-router-dom';
import React,{Fragment,useState} from 'react';
import NavBar from './Components/Layout/NavBar';
import Store from './Components/Store/Store';
import BtnCart from './Components/Button/BtnCart';
import Cart from './Components/Cart/Cart';
import CartProvider from './Components/ContexApi/CartProvider';
import Home from './Components/Home/Home';


const App =() => {

  const [isShown , setIsShown] = useState(false);

  const ShowCartHandlar = () => {
    setIsShown(true);
  };

  const RemoveCartHandlar = ()=>{
     
      setIsShown(false)
  }

  return (
    <CartProvider>
      <Fragment>
        <header>
          {isShown && <Cart onRemoveCart={RemoveCartHandlar} />}
          <NavBar
            brand="E-Commerce"
            homePage="Home"
            store="Store"
            about="About Us"
            cart={<BtnCart onShowCart={ShowCartHandlar} />}
          />
          
        </header>
        <main>
          <Route path="/Home">
            <Home />
          </Route>
          <Route path="/store">
            <Store />
          </Route>
        </main>
      </Fragment>
    </CartProvider>
  );
}

export default App;
