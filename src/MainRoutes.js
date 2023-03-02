import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/UI/Navbar/Navbar";
import ProductList from "./components/products/ProductList/ProductList";
import Header from "./components/UI/Header/Header";
import AboutUs from "./components/UI/About Us/AboutUs";
import Footer from "./components/UI/Footer/Footer";
import OrderForm from "./components/UI/OrderForm/OrderForm";

const MainRoutes = () => {
  return (
    <>
      <Navbar/>
      <Header/>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/" element={<AboutUs />} />
        {/* <Route path="/" element={<OrderForm />} /> */}
        </Routes>
      <OrderForm />
      <Footer />
    </>
  );
};

export default MainRoutes;
