import React from "react";
import { Routes, Route } from "react-router-dom";
import AboutUs from "./components/UI/About Us/AboutUs";
import Footer from "./components/UI/Footer/Footer";
import OrderForm from "./components/UI/OrderForm/OrderForm";

const MainRoutes = () => {
  // const ROUTES = [
  //     {
  //         link: '/',
  //         element: < />
  //     }
  // ]

  return (
    <>
      <Routes>
        <Route path="/" element={<AboutUs />} />
        {/* <Route path="/" element={<OrderForm />} /> */}
      </Routes>
      <OrderForm />
      <Footer />
    </>
  );
};

export default MainRoutes;
