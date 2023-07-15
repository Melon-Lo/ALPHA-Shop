import styles from './Check.module.css'
import Form from "./components/Form/Form"
import Cart from './components/Cart/Cart'

export default function Check() {
  return(
    <section className={styles.checkSection}>
      <h1 className={styles.checkTitle}>結帳</h1>
      <div className={styles.checkContainer}>
        <Form />
        <Cart />
      </div>
    </section>

  )
}