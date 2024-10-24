import React, { useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Pages/Layout";
import Home from "./Pages/Home";
import Category from "../src/Pages/Category";
import About from "../src/Pages/About";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import Admin from "./Auth/Admin"

function App() {
  const[product , setProduct] = useState(null);
  const [item, setItem] = useState([]);
  const [quantity , setQuantity] = useState(null);
  const [price  ,  setPrice] = useState([]);
  const [order , setOrder] = useState([]);
console.log(order);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout></Layout>}></Route>
        <Route index element={<Home></Home>}></Route>
        <Route path="/Pages/Category" element={<Category setProduct={setProduct}></Category>}></Route>
        <Route path="/Pages/Product" element={<Product item={item} setItem={setItem} order={order} setOrder={setOrder} product={product} setProduct={setProduct} quantity={quantity} setQuantity={setQuantity} price={price} setPrice={setPrice}></Product>}> </Route>
        <Route path ="/Pages/Cart" element={<Cart item={item} setItem={setItem} quantity={quantity} setQuantity={setQuantity} price={price} setPrice={setPrice}  order={order} setOrder={setOrder}></Cart>}></Route>
        <Route path="/Auth/Admin" element={<Admin order={order}></Admin>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
