import './Header.scss'
import { ReactComponent as Logo } from 'assets/icons/logo_s.svg'
import { ReactComponent as Search } from 'assets/icons/search.svg'
import { ReactComponent as Cart } from 'assets/icons/cart.svg'
import { ReactComponent as Moon } from 'assets/icons/moon.svg'
import { ReactComponent as Sun } from 'assets/icons/sun.svg'

import { useContext } from 'react'
import { ThemeContext } from 'context/ThemeContext'

export default function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext)

  return (
    <header className="headerContainer"
      style={theme.header.headerStyle}
    >
      <nav className="navBar">
        <a className="navLink" href="*">男款</a>
        <a className="navLink" href="*">女款</a>
        <a className="navLink" href="*">最新消息</a>
        <a className="navLink" href="*">客製商品</a>
        <a className="navLink" href="*">聯絡我們</a>
      </nav>
      <a className="logoBox" href="*">
        <Logo 
          className="logo"
          // style={theme.header.iconStyle}
        />
      </a>
      <div className="functionBox">
        <Search 
          className="function" 
          style={theme.header.iconStyle}
        />
        <Cart 
          className="function" 
          style={theme.header.iconStyle}
        />
        { theme.name === 'dark' ? 
          <Sun 
            className="function" 
            onClick={toggleTheme}
            style={theme.header.iconStyle} 
          /> : 
          <Moon 
            className="function"
            onClick={toggleTheme}
            style={theme.header.iconStyle} 
          /> 
        }
      </div>
    </header>
  )
}