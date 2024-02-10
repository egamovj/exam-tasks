import * as React from 'react';
import { Theme, ThemeContextType } from '../types/theme';

export const ThemeContext = React.createContext<ThemeContextType | null>(null);

const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [themeMode, setThemeMode] = React.useState<Theme>('light');
  return (
    <ThemeContext.Provider
      value={{ theme: themeMode, changeTheme: setThemeMode }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
