import React from "react";
import { createTheme } from "../utils/theme";

export const ThemeProvider = ({ darkMode, children }) => {
  const theme = createTheme(darkMode);

  return (
    <>
      <div style={theme}>{children}</div>
      <style>{`
      body {
        background-color: ${darkMode ? "#202c37" : "#ffffff"};
        color: ${darkMode ? "#ffffff" : "#000000"};
      }
    `}</style>
    </>
  );
};
