import React from "react";
import { Routes, Route } from "react-router-dom";
import ProductList from "./components/ProductList/ProductList";

const MainRoutes = () => {
  // const ROUTES = [
  //     {
  //         link: '/',
  //         element: < />
  //     }
  // ]

  return (
    <Routes>
      <Route path="/products" element={<ProductList />} />
    </Routes>
  );
};

export default MainRoutes;
