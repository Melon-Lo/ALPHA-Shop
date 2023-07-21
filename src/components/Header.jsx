import styles from './Header.module.css'
import { ReactComponent as Logo } from 'assets/icons/logo_s.svg'
import { ReactComponent as Search } from 'assets/icons/search.svg'
import { ReactComponent as Cart } from 'assets/icons/cart.svg'
import { ReactComponent as Moon } from 'assets/icons/moon.svg'
import { ReactComponent as Sun } from 'assets/icons/sun.svg'

export default function Header() {
  return (
    <header class={styles.headerContainer}>
      <nav class={styles.navBar}>
        <a class={styles.navLink} href="">男款</a>
        <a class={styles.navLink} href="">女款</a>
        <a class={styles.navLink} href="">最新消息</a>
        <a class={styles.navLink} href="">客製商品</a>
        <a class={styles.navLink} href="">聯絡我們</a>
      </nav>
      <a class={styles.logoBox} href="">
        <Logo class={styles.logo}/>
      </a>
      <div className={styles.functionBox}>
        <Search className={styles.function}/>
        <Cart className={styles.function}/>
        <Moon className={styles.function}/>
        {/* <Sun className={styles.function}/> */}
      </div>
    </header>
  )
}