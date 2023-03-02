import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/UI/Navbar/Navbar";
import ProductList from "./components/products/ProductList/ProductList";
import Header from "./components/UI/Header/Header";

const MainRoutes = () => {
  return (
    <>
      <Navbar/>
      <Header/>
      <Routes>
        <Route path="/" element={<ProductList />} />
      </Routes>
      {/* <Search/> */}
    </>
  );
};

export default MainRoutes;
