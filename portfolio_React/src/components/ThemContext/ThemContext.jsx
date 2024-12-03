// import { createContext, useState, useEffect } from "react";

// export const ThemeContext = createContext();

// export const ThemeProvider = ({ children }) => {
//   const [theme, setTheme] = useState("dark");

//   // Sync with localStorage for persistent theme
//   useEffect(() => {
//     const storedTheme = localStorage.getItem("theme") || "dark";
//     setTheme(storedTheme);
//     document.documentElement.className = storedTheme; // Set initial theme class
//   }, []);

//   const toggleTheme = () => {
//     const newTheme = theme === "dark" ? "light" : "dark";
//     setTheme(newTheme);
//     localStorage.setItem("theme", newTheme);
//     document.documentElement.className = newTheme; // Update theme class
//   };

//   return (
//     <ThemeContext.Provider value={{ theme, toggleTheme }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// };
