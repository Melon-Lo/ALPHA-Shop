import styles from './Header.module.css'
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
    <header 
      className={styles.headerContainer}
      style={theme.header.headerStyle}
    >
      <nav className={styles.navBar}>
        <a className={styles.navLink} href="">男款</a>
        <a className={styles.navLink} href="">女款</a>
        <a className={styles.navLink} href="">最新消息</a>
        <a className={styles.navLink} href="">客製商品</a>
        <a className={styles.navLink} href="">聯絡我們</a>
      </nav>
      <a className={styles.logoBox} href="">
        <Logo 
          className={styles.logo}
          style={theme.header.iconStyle}
        />
      </a>
      <div className={styles.functionBox}>
        <Search 
          className={styles.function} 
          style={theme.header.iconStyle}
        />
        <Cart 
          className={styles.function} 
          style={theme.header.iconStyle}
        />
        { theme.name === 'dark' ? 
          <Sun 
            className= {styles.function} 
            onClick={toggleTheme}
            style={theme.header.iconStyle} 
          /> : 
          <Moon 
            className={styles.function} 
            onClick={toggleTheme}
            style={theme.header.iconStyle} 
          /> 
        }
      </div>
    </header>
  )
}