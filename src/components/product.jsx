import React, { useState, useEffect } from "react";
import axios from "axios";

const Product = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [url, setUrl] = useState("https://fakestoreapi.com/products");
  //console.log(cart);

  const getAllItems = async () => {
    setLoading(true);
    await axios.get(url).then((result) => {
      setItems(result.data);
    });
    setLoading(false);
  };

  useEffect(() => {
    getAllItems();
  }, []);

  console.log(items);
};

export default Product;
