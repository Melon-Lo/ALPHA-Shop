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
    checkout: {
      checkoutStyle: {
        background: "#FFFFFF",
        color: "#000000",
      },
      labelStyle: {
        color: "rgb(149, 149, 149)"
      },
      cartStyle: {
        background: "#FFFFFF",
      },
    },
    footer: {
      footerStyle: {
        background: "#e4e4e4",
        color: "#000000",
      },
      iconStyle: {
        fill: "#FFFFFF",
        stroke: "#FFFFFF"
      },
      linkStyle: {
        color: "rgb(85, 85, 85)"
      }
    }
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
    checkout: {
      checkoutStyle: {
        background: "#121212",
        color: "#FFFFFF",
      },
      labelStyle: {
        color: "#FFFFFF"
      },
      cartStyle: {
        background: "#383838",
      }
    },
    footer: {
      footerStyle: {
        background: "#383838",
      },
      titleStyle: {
        color: "#FFFFFF",
      },
      linkStyle: {
        color: "#9E9E9E"
      }
    }
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
      value={{ 
        theme, 
        toggleTheme, 
        dark 
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}
