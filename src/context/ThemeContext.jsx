import { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

export function ThemeProvider({ children, defaultTheme= 'light' }) {
  const [theme, setTheme] = useState(defaultTheme);

    const themes = ['light', 'dark', 'pink']
  
  const toggleTheme = () => {
    setTheme((prev) => {
        const currInd = themes.indexOf(prev)
        const nextInd = (currInd + 1) % themes.length
        return themes[nextInd]
    });
  };

  const themeStyles = {
    light: {
        backgroundColor: '#fff',
        color: '#000'
    },
    dark: {
        backgroundColor: '#333',
        color: '#fff'
    },
    pink: {
        backgroundColor: '#e723c6',
        color: '#000'
    },
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div
        style={{
          backgroundColor: themeStyles[theme].backgroundColor,
          color: themeStyles[theme].color,
          minHeight: '100vh',
        //   padding: '1rem', //was a white border because of this
        }}
      >
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

export function useTheme() {
    return useContext(ThemeContext);
  }

