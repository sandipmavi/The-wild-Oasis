import React, { createContext, useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useLocalStorageState } from "../hooks/useLocalStorageState";

const DarkModeContext = createContext();
function DarkModeProvider({ children }) {
  const [isDarkMode, setIsDarkMode] = useLocalStorageState(
    window.matchMedia("(prefers-color-schema: dark)").matches,
    "isDarkMode"
  );

  useEffect(
    function () {
      if (isDarkMode) {
        document.documentElement.classList.add("dark-mode");
        document.documentElement.classList.remove("light-mode");
      } else {
        document.documentElement.classList.add("light-mode");
        document.documentElement.classList.remove("dark-mode");
      }
    },
    [isDarkMode]
  );
  function toggleDarkMode() {
    setIsDarkMode((dark) => !dark);
  }

  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}
function useDarkMode() {
  const context = useContext(DarkModeContext);
  if (context === undefined)
    throw new Error("DarkMode Context was used outside the provider ");
  return context;
}
export { DarkModeProvider, useDarkMode };
