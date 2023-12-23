// import React from 'react'
import "./total.css";
import { useContext } from "react";
import { AppContext } from "../App";

const Popup = () => {
  // context
  const { cartItems, handleclick, handlesubproduct, cartdelete } =
    useContext(AppContext);

  const totalprice = cartItems.reduce(
    (price, item) => price + item.quantity * item.price,
    0
  );

  return (
    <div className="cartitem">
      <h2 className="cartitemhea">cart item</h2>
      <div className="clearcart">
        {cartItems.length >= 1 && (
          <button className="claerbtn" onClick={cartdelete}>
            clear cart
          </button>
        )}
      </div>
      {cartItems.length === 0 && (
        <div className="cartitemem">cart is empty</div>
      )}
      <div>
        {cartItems.map((item) => (
          <div key={item.id} className="cartitemlist">
            <img className="cartitemimage" src={item.img} alt={item.name} />
            <div className="cartitemname">{item.name}</div>
            <div className="cartitemfun">
              <button
                className="cartitemadd"
                onClick={() => {
                  handleclick(item);
                }}
              >
                +
              </button>
              <button
                className="cartitemsub"
                onClick={() => {
                  handlesubproduct(item);
                }}
              >
                -
              </button>
            </div>
            <div className="cartitemprice">
              {item.quantity}*{item.price}
            </div>
          </div>
        ))}
      </div>
      <div className="cartitemtotal">
        total price
        <div className="cartitemtotprice">${totalprice}</div>
      </div>
    </div>
  );
};

export default Popup;
