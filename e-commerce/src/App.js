
import { Route, Redirect } from 'react-router-dom';
import React,{Fragment,useState} from 'react';
import NavBar from './Components/Layout/NavBar';
import Store from './Components/Store/Store';
import BtnCart from './Components/Button/BtnCart';
import Cart from './Components/Cart/Cart';
import CartProvider from './Components/ContexApi/CartProvider';
import Home from './Components/Home/Home';
import ContactUs from './Components/ContactUs/ContactUs';

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

  async function addDetailsHandler(details) {
    const response = await fetch(
      "https://e-commerce-ca6c1-default-rtdb.asia-southeast1.firebasedatabase.app/customer.json",
      {
        method: "POST",
        body: JSON.stringify(details),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    console.log(data);
  }


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
          <Route path="/Home">
            <Home />
          </Route>
          <Route path="/store">
            <Store />
          </Route>
          <Route path="/contact">
            <ContactUs onContact={addDetailsHandler} />
          </Route>
        </main>
      </Fragment>
    </CartProvider>
  );
}

export default App;
