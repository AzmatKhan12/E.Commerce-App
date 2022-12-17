
import { Route, Redirect ,Switch} from 'react-router-dom';
import { useContext } from "react";
import AuthContext from "./Components/Store/Auth-context";
import React,{Fragment,useState} from 'react';
import NavBar from './Components/Layout/NavBar';
import Store from './Components/Store/Store';
import ProductDetails from './Components/Store/ProductDetails';
import BtnCart from './Components/Button/BtnCart';
import Cart from './Components/Cart/Cart';
import CartProvider from './Components/ContexApi/CartProvider';
import Home from './Components/Home/Home';
import ContactUs from './Components/ContactUs/ContactUs';
import About from './Components/About/About';


import HomePage from './pages/HomePage';
import Layout from "./Components/Layout/Layout";
import AuthPage from "./pages/AuthPage";
import UserProfile from "./Components/Profile/UserProfile";

const App =() => {
 const [isShown , setIsShown] = useState(false);
 /*const[details, setDetails] = useState([]);

 
  const fetchMoviesHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        "https://e-commerce-ca6c1-default-rtdb.asia-southeast1.firebasedatabase.app/customer.json"
      );
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await response.json();

      const loadedMovies = [];

      for (const key in data) {
        loadedMovies.push({
          id: key,
          tittle: data[key].title,
          openingText: data[key].openingText,
          releaseDate: data[key].releaseDate,
        });
      }

      setMovies(loadedMovies);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler]);*/


  const authCtx = useContext(AuthContext);
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
            about="About-Us"
            contact="Contact-Us"
            cart={<BtnCart onShowCart={ShowCartHandlar} />}
          />
        </header>
        <main>
          <Layout>
            <Switch>
              <Route path="/" exact>
                <Redirect to="/HomePage" />
              </Route>
              <Route path="/HomePage">
                <HomePage />
              </Route>

              {!authCtx.isLoggedIn && (
                <Route path="/auth">
                  <AuthPage />
                </Route>
              )}

              <Route path="/profile">
                {authCtx.isLoggedIn && <UserProfile />}
                {!authCtx.isLoggedIn && <Redirect to="/auth" />}
              </Route>

              <Route path="/*">
                <Redirect to="/" />
              </Route>

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
          </Layout>
        </main>
      </Fragment>
    </CartProvider>
  );
}

export default App;
