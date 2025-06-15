import React, { createContext, useContext, useReducer, useEffect } from 'react';

const AppContext = createContext();

// Get initial theme based on localStorage or system preference
const getInitialTheme = () => {
  if (typeof window !== 'undefined' && window.localStorage) {
    const savedTheme = localStorage.getItem('gate-theme');
    if (savedTheme) {
      return savedTheme;
    }
    return 'system';
  }
  return 'light';
};

// Get system theme preference
const getSystemTheme = () => {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

// Resolve theme - returns actual theme (light/dark) based on theme setting
const resolveTheme = (themeState) => {
  if (themeState === 'system') {
    return getSystemTheme();
  }
  return themeState;
};

const initialThemeState = getInitialTheme();

// Theme reducer
const themeReducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_THEME':
      if (state === 'system') {
        const systemTheme = getSystemTheme();
        const newTheme = systemTheme === 'light' ? 'dark' : 'light';
        if (typeof window !== 'undefined' && window.localStorage) {
          localStorage.setItem('gate-theme', newTheme);
        }
        return newTheme;
      } else {
        const newTheme = state === 'light' ? 'dark' : state === 'dark' ? 'system' : 'light';
        if (typeof window !== 'undefined' && window.localStorage) {
          localStorage.setItem('gate-theme', newTheme);
        }
        return newTheme;
      }
    case 'SET_THEME':
      if (typeof window !== 'undefined' && window.localStorage) {
        localStorage.setItem('gate-theme', action.payload);
      }
      return action.payload;
    default:
      return state;
  }
};

export const AppProvider = ({ children }) => {
  const [themeState, themeDispatch] = useReducer(themeReducer, initialThemeState);
  const resolvedTheme = resolveTheme(themeState);

  // Apply theme class when theme changes
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      
      const applyTheme = () => {
        const currentResolvedTheme = resolveTheme(themeState);
        
        if (currentResolvedTheme === 'dark') {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
      };

      applyTheme();
      
      const handleSystemThemeChange = () => {
        if (themeState === 'system') {
          applyTheme();
        }
      };
      
      mediaQuery.addEventListener('change', handleSystemThemeChange);
      
      return () => {
        mediaQuery.removeEventListener('change', handleSystemThemeChange);
      };
    }
  }, [themeState]);

  const toggleTheme = () => {
    themeDispatch({ type: 'TOGGLE_THEME' });
  };

  const setTheme = (theme) => {
    if (['light', 'dark', 'system'].includes(theme)) {
      themeDispatch({ type: 'SET_THEME', payload: theme });
    }
  };

  const value = {
    theme: {
      current: themeState,
      resolved: resolvedTheme,
      toggleTheme,
      setTheme,
      isDark: resolvedTheme === 'dark'
    }
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};