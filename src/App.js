import "./App.css";
import Navbars from "./components/Navbars";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Popup from "./components/Popup";
import { useState, useEffect } from "react";
// import Data from "./components/Data";
import { createContext } from "react";


export const AppContext = createContext(null);
// random api created with mockApi
const url = "https://657976501acd268f9af911f3.mockapi.io/bbs/cartitem/books";


function App() {
  // const { productItems } = Data;
  const [cartItems, setCartItems] = useState([]);
  const [urll, seturll] = useState([]);



  useEffect(() => {
    const fetchData = async () => {
      try {
        const respons = await fetch(url);
        const api = await respons.json();
        seturll(api);
        // console.log(api)
      } catch (error) {
        console.log("something went wrong");
      }
    };
    fetchData();
  }, []);



  const handleclick = (item) => {
    const exist = cartItems.find((items) => items.id === item.id);
    if (exist) {
      setCartItems(
        cartItems.map((items) =>
          items.id === item.id
            ? { ...item, quantity: item.quantity + 1 }
            : items
        )
      );
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };


  
  const handlesubproduct = (item) => {
    const exist = cartItems.find((items) => items.id === item.id);
    if (exist.quantity === 1) {
      setCartItems(cartItems.filter((items) => items.id === item.id));
    } else {
      setCartItems(
        cartItems.map((items) =>
          items.id === item.id
            ? { ...exist, quantity: exist.quantity - 1 }
            : items
        )
      );
    }
  };


  const cartdelete = () => {
    setCartItems([]);
  };
  return (
    <>
      <Router>
        <AppContext.Provider
          value={{ handleclick, urll, cartItems, handlesubproduct, cartdelete }}
        >
          <Navbars />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pop" element={<Popup />} />
          </Routes>
        </AppContext.Provider>
      </Router>
    </>
  );
}

export default App;
