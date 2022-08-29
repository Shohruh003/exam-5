import { useState, createContext, useEffect } from "react";

 const ThemeContext = createContext();

 const ThemeProvider = ({children}) => {
  const localData = localStorage.getItem('theme');
  const [theme, setTheme] = useState(localData || 'dark');

  useEffect(() => {
    window.localStorage.setItem('theme', theme)
  }, [theme]);

  return (
    <ThemeContext.Provider value={{
      theme,
      setTheme
    }}>
      {children}
    </ThemeContext.Provider>
  );
};

export  {ThemeContext, ThemeProvider};