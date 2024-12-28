import { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";

// Create ThemeContext
// eslint-disable-next-line react-refresh/only-export-components
export const ThemeContext = createContext();

// ThemeProvider component
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    // Initialize theme from localStorage or default to "dark"
    return localStorage.getItem("theme") || "dark";
  });

  // Function to toggle theme
  const toggleTheme = (newTheme) => {
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme); // Persist the theme
  };

  // Apply the theme class to the body
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// PropTypes validation
ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
