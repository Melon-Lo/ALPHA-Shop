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
      },
      mobileNavbarStyle: {
        background: "#FFFFFF",
        color: "rgb(85, 85, 85)",
        boxShadow: "0 5px 5px rgb(233, 233, 233)",
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
      },
      mobileNavbarStyle: {
        background: "#121212",
        color: "#FFFFFF",
        boxShadow: "0 5px 5px #000000",
      },
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

export const ThemeContext = createContext()

export default function ThemeProvider({ children }) {
  const storageTheme = localStorage.getItem('theme') || 'light'
  const [theme, setTheme] = useState(themes[storageTheme])

  function toggleTheme() {
    if(storageTheme === 'light') {
      setTheme(themes.dark)
      localStorage.setItem('theme', 'dark')
    } else if(storageTheme === 'dark') {
      setTheme(themes.light)
      localStorage.setItem('theme', 'light')
    }
  }
  
  return (
    <ThemeContext.Provider
      value={{ 
        theme, 
        toggleTheme 
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}
