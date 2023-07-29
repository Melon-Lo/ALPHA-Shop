import styles from './Checkout.module.css'
import Form from "./components/Form/Form"
import Cart from './components/Cart/Cart'
import { useState } from 'react'

export default function Checkout() {
  const [total, setTotal] = useState(0)

  return(
    <section className={styles.checkSection}>
      <h1 className={styles.checkTitle}>結帳</h1>
      <div className={styles.checkContainer}>
        <Form />
        <Cart total={total} setTotal={setTotal}/>
      </div>
    </section>
<<<<<<< HEAD
=======

>>>>>>> ed6e7d3f8deb93db53088b5f584b2d5bb6d5453c
  )
}