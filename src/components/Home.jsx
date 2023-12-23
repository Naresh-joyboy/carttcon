import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./total.css";
import { useContext } from "react";
import { AppContext } from "../App";

const Cart = ({ item, handleclick }) => {
  return (
    <div className="col-md-4 mb-3">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={item.img} />
        <Card.Body>
          <Card.Title>{item.name}</Card.Title>
          <Card.Text>{item.price}</Card.Text>
          <Button
            className="btnn"
            variant="primary"
            onClick={() => {
              handleclick(item);
            }}
          >
            Add cart
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

const Home = () => {
  // context
  const { handleclick, urll } = useContext(AppContext);

  //  Array.from({ length: Math.ceil(productItems.length / 3) } -----> create a create /object with how many threes present in whole cart,
  // (_, index) => productItems.slice(index * 3, index * 3 + 3)); -----> "_"  unused or empty parameted and index of productitems
  const chunkedProductItems = Array.from(
    { length: Math.ceil(urll.length / 3) },
    (_, index) => urll.slice(index * 3, index * 3 + 3)
  );

  return (
    <div className="container">
      {chunkedProductItems.map((row, rowIndex) => (
        <div key={rowIndex} className="row">
          {row.map((item) => (
            <Cart key={item.id} item={item} handleclick={handleclick} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Home;
