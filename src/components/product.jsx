import React, { useState, useEffect } from "react";
import axios from "axios";
import Rating from "./Rating";

const Product = () => {
  const [items, setItems] = useState([]);
  const [cart, setCart] = useState([]);
  const url = "https://fakestoreapi.com/products";

  const getAllItems = async () => {
    await axios.get(url).then((result) => {
      setItems(result.data);
    });
  };

  useEffect(() => {
    getAllItems();
  }, []);

  const addToCart = (item) => {
    let canAdd = true;
    for (let idxCart = 0; idxCart < cart.length; idxCart++) {
      if (cart[idxCart].id === item.id) {
        canAdd = false;
        item.qty += 1;
      }
    }
    if (canAdd && !item.qty) {
      item.qty = 0;
      setCart([...cart, item]);
      item.qty += 1;
      //console.log(cart);
    }
  };

  const ListItems = items.map((item) => (
    <div key={item.id} className="product-container">
      <div className="product-card">
        <div className="product-image">
          <img src={item.image} className="product-thumb" alt="" />
        </div>
        <div className="product-info">
          <h2 className="product-name">{item.title}</h2>
          <p className="product-short-des">{item.description}</p>
          <span className="price">{item.price}€</span>
          <input
            type="submit"
            value="ADD TO CART"
            className="card-btn"
            onClick={() => addToCart(item)}
          />
        </div>
      </div>
      <Rating ratingValue="rate" value={item.rating.rate} />
      <Rating ratingValue="count" value={item.rating.count} />
    </div>
  ));

  return (
    <div>
      <div className="catalog">{ListItems}</div>
    </div>
  );
};

export default Product;
