import { useState, createContext } from 'react'

const themes = {
  light: {
    name: 'light',
    foreground: "#000000",
    background: "white",
  },
  dark: {
    name: 'dark',
    foreground: "#ffffff",
    background: "#222222"
  }
};

export const ThemeContext = createContext({
  theme: themes.light,
  toggleTheme: () => {}
})

export default function ThemeProvider({ children }) {
  const [dark, setDark] = useState(false)
  const toggleTheme = () => setDark(!dark)
  const theme = dark ? themes.dark : themes.light

  return (
    <ThemeContext.Provider
      value={{ theme, toggleTheme }}
    >
      {children}
    </ThemeContext.Provider>
  )
}
