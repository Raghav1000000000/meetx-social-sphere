
import React, { createContext, useContext, useEffect, useState } from 'react';

type Mode = 'professional' | 'social';
type Theme = 'light' | 'dark';

interface ThemeContextType {
  mode: Mode;
  setMode: (mode: Mode) => void;
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Initialize with stored values or defaults
  const [mode, setMode] = useState<Mode>(() => {
    const savedMode = localStorage.getItem('meetx-mode');
    return (savedMode as Mode) || 'professional';
  });
  
  const [theme, setTheme] = useState<Theme>(() => {
    const savedTheme = localStorage.getItem('meetx-theme');
    if (savedTheme) return savedTheme as Theme;
    
    // Check system preference
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    
    return 'light';
  });

  useEffect(() => {
    // Save mode to localStorage
    localStorage.setItem('meetx-mode', mode);
    
    // Apply appropriate class to body for mode-specific styling
    document.body.classList.remove('professional-mode', 'social-mode');
    document.body.classList.add(`${mode}-mode`);
    
    // Update CSS variables for mode-specific colors
    const root = document.documentElement;
    if (mode === 'professional') {
      root.style.setProperty('--mode-primary', '#007BFF');
      root.style.setProperty('--mode-secondary', '#00cc99');
    } else {
      root.style.setProperty('--mode-primary', '#FF4E8D');
      root.style.setProperty('--mode-secondary', '#ffd700');
    }
  }, [mode]);

  useEffect(() => {
    // Save theme to localStorage
    localStorage.setItem('meetx-theme', theme);
    
    // Apply appropriate class to document for light/dark theming
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ mode, setMode, theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
