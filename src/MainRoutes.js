import React from "react";
import { Routes, Route } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import AboutUs from "./components/UI/About Us/AboutUs";
import OrderForm from "./components/UI/OrderForm/OrderForm";
import ProductList from "./components/products/ProductList/ProductList";
import Header from "./components/UI/Header/Header";
import Navbar from "./components/UI/Navbar/Navbar";
import Footer from "./components/UI/Footer/Footer";
import AdminPage from "./pages/AdminPage/AdminPage";
import ProductsContextProvider from "./context/ProductsContext";
import EditProduct from "./components/products/EditProduct/EditProduct";
import ProductDetails from "./components/products/ProductsDetails/ProductDetails";
import CartPage from "./pages/CartPage/CartPage";
import CartContextProvider from "./context/CartContextProvider";

const MainRoutes = () => {
  const PUBLIC_ROUTES = [
    {
      link: "/register",
      element: <RegisterPage />,
      id: 1,
    },
    {
      link: "/login",
      element: <LoginPage />,
      id: 2,
    },
    {
      link: "/admin",
      element: <AdminPage />,
      id: 3,
    },
    {
      link: "/edit/:id",
      element: <EditProduct />,
      id: 4,
    },
    {
      link: "/details/:id",
      element: <ProductDetails />,
      id: 5,
    },
    {
      link: "/",
      element: (
        <>
          <Navbar />
          <Header />
          <ProductList />
          {/* <AboutUs />
          <OrderForm /> */}
          <Footer />
        </>
      ),
      id: 5,
    },
    {
      link: "/about",
      element: (
        <>
          <Navbar />
          <AboutUs />
          <OrderForm />
          <Footer />
        </>
      ),
      id: 6,
    },
    {
      link: "/cart",
      element: (
        <>
          {/* <Navbar /> */}
          <CartPage />
        </>
      ),
      id: 7,
    },
  ];

  return (
    <CartContextProvider>
      <ProductsContextProvider>
        <Routes>
          {PUBLIC_ROUTES.map((item) => (
            <Route path={item.link} element={item.element} key={item.id} />
          ))}
        </Routes>
      </ProductsContextProvider>
    </CartContextProvider>
  );
};

export default MainRoutes;
