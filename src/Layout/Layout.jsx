import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { ThemeProvider } from "../utils/ThemeProvider";
import { CountryContext } from "../context/CountryContext";

const Layout = () => {
  const { darkMode } = useContext(CountryContext);

  return (
    <ThemeProvider darkMode={darkMode}>
      <>
        <Navbar />
        <Outlet />
      </>
    </ThemeProvider>
  );
};

export default Layout;
