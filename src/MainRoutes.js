import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/UI/Navbar/Navbar";
import ProductList from "./components/products/ProductList/ProductList";
import Header from "./components/UI/Header/Header";
import AboutUs from "./components/UI/About Us/AboutUs";
import Footer from "./components/UI/Footer/Footer";
import OrderForm from "./components/UI/OrderForm/OrderForm";
import AdminPage from "./pages/AdminPage/AdminPage";
import ProductsContextProvider from "./context/ProductsContext";
import EditProduct from "./components/products/EditProduct/EditProduct";
import ProductDetails from "./components/products/ProductsDetails/ProductDetails";

const MainRoutes = () => {
  return (
    <>
    <ProductsContextProvider>
      <Navbar/>
      <Header/>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/about" element={<OrderForm />} />
        <Route path="/admin" element={<AdminPage/>} />
        <Route path="/edit/:id" element={<EditProduct/>} />
        <Route path="/details/:id" element={<ProductDetails/>} />
        </Routes>
      <Footer />
    </ProductsContextProvider>
    </>
  );
};

export default MainRoutes;
