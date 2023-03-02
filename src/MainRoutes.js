import React from "react";
import { Routes, Route } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import AdminPage from "./pages/AdminPage/AdminPage";
import EditPage from "./pages/EditPage/EditPage";
import AboutUs from "./components/UI/About Us/AboutUs";
import OrderForm from "./components/UI/OrderForm/OrderForm";
import ProductList from "./components/products/ProductList/ProductList";
import Header from "./components/UI/Header/Header";
import Navbar from "./components/UI/Navbar/Navbar";
import Footer from "./components/UI/Footer/Footer";

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
      element: <EditPage />,
      id: 4,
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
    },
  ];

  return (
    <Routes>
      {PUBLIC_ROUTES.map((item) => (
        <Route path={item.link} element={item.element} key={item.id} />
      ))}
    </Routes>
  );
};

export default MainRoutes;
