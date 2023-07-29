import { useState, createContext } from 'react'

const themes = {
  light: {
    name: 'light',
    header: {
      headerStyle: {
        background: "#FFFFFF",
        color: "rgb(85, 85, 85)",
        boxShadow: "0 5px 5px rgb(233, 233, 233)",
      },
      iconStyle: {
        fill: "#000000",
        stroke: "#000000"
      }
    },
  },
  dark: {
    name: 'dark',
    header: {
      headerStyle: {
        background: "#121212",
        color: "#FFFFFF",
        boxShadow: "0 5px 5px #000000",
      },
      iconStyle: {
        fill: "#FFFFFF",
        stroke: "#FFFFFF"
      }
    },
    cartBackGround: "#383838",
    footerBackGround: "#333333",
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
