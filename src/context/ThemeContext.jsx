import { useState, createContext } from 'react'

const themes = {
  light: {
    name: 'light',
    fontColor: "#000000",
    background: "#FFFFFF",
    headerLinkFontColor: "rgb(85, 85, 85)",
    headerShadow: "0 5px 5px rgb(233, 233, 233)",
    iconFill: "#000000",
    iconStroke: "#000000"
  },
  dark: {
    name: 'dark',
    fontColor: "#FFFFFF",
    background: "#121212",
    headerLinkFontColor: "#FFFFFF",
    headerShadow: "0 5px 5px #000000",
    cartBackGround: "#383838",
    footerBackGround: "#333333",
    iconFill: "#FFFFFF",
    iconStroke: "#FFFFFF"
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
