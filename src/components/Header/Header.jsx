import './Header.scss'
import { ReactComponent as Logo } from 'assets/icons/logo_s.svg'
import { ReactComponent as Search } from 'assets/icons/search.svg'
import { ReactComponent as Cart } from 'assets/icons/cart.svg'
import { ReactComponent as Moon } from 'assets/icons/moon.svg'
import { ReactComponent as Sun } from 'assets/icons/sun.svg'
import { ReactComponent as Toggle } from 'assets/icons/toggle.svg'
import { useContext, useEffect, useState } from 'react'
import { ThemeContext } from 'context/ThemeContext'
import { WindowWidthContext } from 'context/WindowWidthContext'
import navLinksData from './linksData'
import { CSSTransition } from 'react-transition-group'

export default function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext)
  const { windowWidth } = useContext(WindowWidthContext)
  const [ isToggled, setIsToggled ] = useState(false)

  function Links() {
    return (
      navLinksData.map(link => 
        <a key={link.id} className="navLink" href={link.href}>{link.title}</a>
      )
    )
  }

  function FunctionBox({ className, iconClassName }) {
    return (
      <div className={className}>
        <Search 
          className={iconClassName} 
          style={theme.header.iconStyle}
        />
        <Cart 
          className={iconClassName}
          style={theme.header.iconStyle}
        />
        { theme.name === 'dark' ? 
          <Sun 
            className={iconClassName}
            onClick={toggleTheme}
            style={theme.header.iconStyle} 
          /> : 
          <Moon 
            className={iconClassName}
            onClick={toggleTheme}
            style={theme.header.iconStyle} 
          /> 
        }
      </div>
    )
  }

  function NavBar() {
    return (
      <>
        <nav className='navBar'>
          <Links />
        </nav>
        <a className="logoBox" href="*">
          <Logo 
            className="logo"
          />
        </a>
        <FunctionBox className={'functionBox'} iconClassName={'function'}/>
      </>
    )
  }

  function ToggleNavBar() {
    return (
      <>
        {/* <CSSTransition
          in={true}
          timeout={1000}
          classNames="test"
          onEnter={() => console.log('Enter')}
          onExit={() => console.log('Exit')}
        >
          <div>test</div>
        </CSSTransition> */}
        <Toggle 
          style={theme.header.iconStyle} 
          className="toggle" 
          onClick={() => setIsToggled(!isToggled)}
        />
        <a className="logoBox" href="*">
        <Logo className="logo"/>
        </a>
        {isToggled && 
          <CSSTransition
            in={true}
            timeout={1000}
            classNames="showItem"
            unmountOnExit
          >
            <nav style={theme.header.mobileNavbarStyle} className='navBar'>
              <Links />
              <FunctionBox className={'navFunctionBox'} iconClassName={'navFunction'}/>
            </nav>
          </CSSTransition>
        }
      </>
    )
  }

  return (
    <header className="headerContainer"
      style={theme.header.headerStyle}
    >
      {windowWidth > 576 ? <NavBar /> : <ToggleNavBar />}
    </header>
  )
}