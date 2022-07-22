
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import React, { useState, useEffect } from "react";
import { CssBaseline } from "@material-ui/core";
import Header from './components/Header'
import Footer from './components/Footer'
import Login from './components/Login'
import Men from './components/Men'
import Women from './components/Women'
import Jewelery from './components/Jewelery'
import Electronics from './components/Electronics'
import { Navbar, Products, Cart } from "./components";
import { commerce } from "./lib/commerce";

function App() {
  const [token, setToken] = useState('')

  /*const tests= 
  [{name: "Men"},
  {name:"Women"},
  {name:"Jewelery"},
  {name:"Electronics"}]*/

  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});
  const [productsCategory, setProductsCategory] = useState([]);
  const [categories, setCategories] = useState([]);

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();

    setProducts(data);
  };

  const fetchCategories = async () => {
    const { data } = await commerce.categories.list();

    setCategories(data);
  };

  const fetchProductsCategory = async (slug) => {
    const { data } = await commerce.products.list({
      category_slug:[slug],
    }).then(setProductsCategory(data))

    console.log(productsCategory);
  };

  

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  };

  const handleAddToCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity);

    setCart(item.cart);
  };

  const handleUpdateCartQty = async (lineItemId, quantity) => {
    const response = await commerce.cart.update(lineItemId, { quantity });

    setCart(response.cart);
  };

  const handleRemoveFromCart = async (lineItemId) => {
    const response = await commerce.cart.remove(lineItemId);

    setCart(response.cart);
  };

  const handleEmptyCart = async () => {
    const response = await commerce.cart.empty();

    setCart(response.cart);
  };

  useEffect(() => {
    fetchProducts();
    fetchCart();
    fetchCategories();
  }, []);

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  return (

    <div className="App">
      <Header>
        <ul className="list_category">
          {categories.map(category =>
            <li>
              <Link to={"/" + category.name}>{category.name}</Link>
            </li>
          )}
        </ul>
      </Header>
      {/*
      <Navbar
          totalItems={cart.total_items}
          handleDrawerToggle={handleDrawerToggle}
        />
      */}
      <Footer />
      <Routes>
        <Route path="/Login" element={<Login token={token} setToken={setToken} />} />
        <Route path="/Men" element={<Men  clickCategory={fetchProductsCategory('men')} 
          onAddToCart={handleAddToCart}
          handleUpdateCartQty />} />
        <Route path="/Women" element={<Women />} />
        <Route path="/Jewelery" element={<Jewelery />} />
        <Route path="/Electronics" element={<Electronics />} />
        <Route
          path="/"
          element={
            <Products
              products={products}
              onAddToCart={handleAddToCart}
              handleUpdateCartQty
            />
          }
        ></Route>
        <Route
          path="/cart"
          element={
            <Cart
              cart={cart}
              onUpdateCartQty={handleUpdateCartQty}
              onRemoveFromCart={handleRemoveFromCart}
              onEmptyCart={handleEmptyCart}
            />
          }
        ></Route>
      </Routes>
    </div>




    /*
    const App = () => {
      const [mobileOpen, setMobileOpen] = React.useState(false);
      const [products, setProducts] = useState([]);
      const [cart, setCart] = useState({});
    
      const fetchProducts = async () => {
        const { data } = await commerce.products.list();
    
        setProducts(data);
      };
    
      const fetchCart = async () => {
        setCart(await commerce.cart.retrieve());
      };
    
      const handleAddToCart = async (productId, quantity) => {
        const item = await commerce.cart.add(productId, quantity);
    
        setCart(item.cart);
      };
    
      const handleUpdateCartQty = async (lineItemId, quantity) => {
        const response = await commerce.cart.update(lineItemId, { quantity });
    
        setCart(response.cart);
      };
    
      const handleRemoveFromCart = async (lineItemId) => {
        const response = await commerce.cart.remove(lineItemId);
    
        setCart(response.cart);
      };
    
      const handleEmptyCart = async () => {
        const response = await commerce.cart.empty();
    
        setCart(response.cart);
      };
    
      useEffect(() => {
        fetchProducts();
        fetchCart();
      }, []);
    
      console.log(products);
    
      const handleDrawerToggle = () => setMobileOpen(!mobileOpen);
    
      return (
          <div style={{ display: "flex" }}>
            <CssBaseline />
            <Navbar
              totalItems={cart.total_items}
              handleDrawerToggle={handleDrawerToggle}
            />
            <Routes>
              <Route
                path="/"
                element={
                  <Products
                    products={products}
                    onAddToCart={handleAddToCart}
                    handleUpdateCartQty
                  />
                }
              ></Route>
              <Route
                path="/cart"
                element={
                  <Cart
                    cart={cart}
                    onUpdateCartQty={handleUpdateCartQty}
                    onRemoveFromCart={handleRemoveFromCart}
                    onEmptyCart={handleEmptyCart}
                  />
                }
              ></Route>
            </Routes>
          </div>
    
    */
  );
};

export default App;
