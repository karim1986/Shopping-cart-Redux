import React from "react";
import "./style/app.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, Router } from "react-router-dom";
import GetProduct from "./components/GetProduct";
import Product from "./pages/Product";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import ShopList from "./pages/ShopList";

const App = () => {
  return (
    <>
      <Navbar />
      <GetProduct />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<ShopList />} />
        <Route path="/" element={<Product />} />
      </Routes>
    </>
  );
};

export default App;
