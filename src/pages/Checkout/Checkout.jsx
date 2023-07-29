import styles from './Checkout.module.css'
import Form from 'components/Form/Form'
import Cart from 'components/Cart/Cart'
import { useContext } from 'react'
import { ThemeContext } from 'context/ThemeContext'

export default function Checkout() {
  const { theme } = useContext(ThemeContext)

  return(
    <section
      className={styles.checkSection}
      style={{
        background: theme.background,
        color: theme.fontColor,
      }}
    >
      <h1 className={styles.checkTitle}>結帳</h1>
      <div className={styles.checkContainer}>
        <Form />
        <Cart />
      </div>
    </section>
  )
}