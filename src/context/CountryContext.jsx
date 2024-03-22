import { createContext, useEffect, useState, useCallback } from "react";

export const CountryContext = createContext();

export const CountryProvider = ({ children }) => {
  const [countryData, setCountryData] = useState([]);
  const [error, setError] = useState(null);
  const [loader, setLoader] = useState(true);

  const [darkMode, setDarkMode] = useState(() => {
    const darkModePreference = localStorage.getItem("dark_mode");
    return darkModePreference === "true";
  });

  const allCountryData = async () => {
    try {
      const response = await fetch("https://restcountries.com/v3.1/all");
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      setLoader(false);
      const result = await response.json();

      setCountryData(result);
    } catch (error) {
      setLoader(false);
      setError(error);
      console.log(error);
    }
  };

  useEffect(() => {
    allCountryData();
    localStorage.setItem("dark_mode", darkMode.toString());
  }, []);

  return (
    <CountryContext.Provider
      value={{
        countryData,
        error,
        loader,
        setError,
        setLoader,
        setCountryData,
        darkMode,
        setDarkMode,
      }}
    >
      {children}
    </CountryContext.Provider>
  );
};
