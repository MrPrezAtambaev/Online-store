import React from "react";
import MainRoutes from "./MainRoutes";
import Navbar from "./components/UI/Navbar/Navbar";
import AuthContextProvider from "./contexts/AuthContextProvider";
import Footer from "./components/UI/Footer/Footer";

function App() {
  return (
    <AuthContextProvider>
      <MainRoutes />
    </AuthContextProvider>
  );
}

export default App;
