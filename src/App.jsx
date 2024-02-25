import React, { useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Pages/Layout";
import Home from "./Pages/Home";
import Category from "../src/Pages/Category";
import About from "../src/Pages/About";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart"

function App() {
  const[product , setProduct] = useState(null);
  const [item, setItem] = useState([]);
  const [quantity , setQuantity] = useState(null);
  const [price  ,  setPrice] = useState([]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout></Layout>}></Route>
        <Route index element={<Home></Home>}></Route>
        <Route path="/Pages/Category" element={<Category setProduct={setProduct}></Category>}></Route>
        <Route path="/Pages/Product" element={<Product item={item} setItem={setItem}  product={product} setProduct={setProduct} quantity={quantity} setQuantity={setQuantity} price={price} setPrice={setPrice}></Product>}> </Route>
        <Route path ="/Pages/Cart" element={<Cart item={item} setItem={setItem} quantity={quantity} setQuantity={setQuantity} price={price}></Cart>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
