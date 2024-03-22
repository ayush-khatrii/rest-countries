import React, { useContext, useEffect, useState } from "react";
import { FaSun, FaMoon, FaSearch } from "react-icons/fa";
import { CountryContext } from "../context/CountryContext";

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const darkModePreference = localStorage.getItem("dark_mode");
    return darkModePreference === "true";
  });

  const { darkMode, setDarkMode } = useContext(CountryContext);

  useEffect(() => {
    localStorage.setItem("dark_mode", isDarkMode.toString());
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <nav
      style={{
        backgroundColor: "var(--bg-color)",
        color: "var(--text-color)",
      }}
      className={`px-5 py-4 fixed w-full top-0 z-50 shadow`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center lg:px-10">
        <div className="lg:text-lg text-base  font-light ">
          Where in the world?
        </div>
        <div className="flex justify-center items-center">
          <button
            onClick={toggleDarkMode}
            className="flex items-center  justify-center  lg:mx-4"
          >
            {isDarkMode ? (
              <>
                <FaSun
                  className={`lg:size-9 size-4 mx-2 lg:p-2 rounded-full `}
                />
                <span className=" lg:text-base md:text-sm text-xs">
                  Light Mode
                </span>
              </>
            ) : (
              <>
                <FaMoon
                  className={`lg:size-8 size-4 mx-2 lg:p-2 rounded-full `}
                />
                <span className=" lg:text-base md:text-sm text-xs">
                  Dark Mode
                </span>
              </>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
