import styles from './Check.module.css'
import Form from "./components/Form/Form"

export default function Check() {
  return(
    <div className={styles.checkContainer}>
      <h1 className={styles.checkTitle}>結帳</h1>
      <Form />
    </div>
  )
}