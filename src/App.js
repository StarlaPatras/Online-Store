import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Cart from "./components/Cart/Cart";
import Heels from "./Pages/Heels";
import Product from "./Pages/Product";
import Dresses from "./Pages/Dresses";
import Fashion from "./Pages/Fashion";
import Shoes from "./Pages/Shoes";
import Shorts from "./Pages/Shorts";
import { useSelector } from "react-redux";
const App = () => {
  const cartIsShown = useSelector((state) => state.ui.cartIsVisible);
  return (
    <>
      <Router>
        <Header />
        {cartIsShown && <Cart />}
        <Routes>
          <Route path="/" element={<Product />} />
          <Route path="/heels" element={<Heels />} />
          <Route path="/dresses" element={<Dresses />} />
          <Route path="/fashion" element={<Fashion />} />
          <Route path="/shoes" element={<Shoes />} />
          <Route path="/shorts" element={<Shorts />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
