import React from "react";
import MainRoutes from "./MainRoutes";
import AuthContextProvider from "./contexts/AuthContextProvider";

function App() {
  return (
    <AuthContextProvider>
      <MainRoutes />
    </AuthContextProvider>
  );
}

export default App;
