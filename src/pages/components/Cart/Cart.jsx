import styles from './Cart.module.css'
import itemsData from './itemsData'
import { ReactComponent as PlusButton } from 'assets/icons/plus.svg'
import { ReactComponent as MinusButton } from 'assets/icons/minus.svg'
import { useState } from 'react'
<<<<<<< HEAD
import { useContext } from 'react'
=======
>>>>>>> ed6e7d3f8deb93db53088b5f584b2d5bb6d5453c

function ProductList({ id, name, img, price, totalPlus, totalMinus }) {

  const [quantity, setQuantity] = useState(0)

  function handlePlusClick() {
    setQuantity(quantity + 1)
    totalPlus(price)
  }

  function handleMinusClick() {
    if(quantity > 0) {
      setQuantity(quantity - 1)
      totalMinus(price)
    } 
  }

  return (
    <section className={styles.productContainer} key={id} >
      <div className={styles.productItem}>
        <img src={img} alt={name} className={styles.imgContainer}/>
        <div className={styles.productInfo}>
          <p className={styles.productName}>{name}</p>
          <div className={styles.productControl}>
            <MinusButton 
              className={styles.controlButton}
              onClick={handleMinusClick}
            />
            <span className={styles.productCount}>
              {quantity}
            </span>
            <PlusButton 
              className={styles.controlButton} 
              onClick={handlePlusClick}
            />
          </div>
        </div>
        <div className={styles.price}>{price * quantity}</div>
      </div>
    </section>
  )
}

<<<<<<< HEAD
export default function Cart({ total, setTotal }) {
=======
export default function Cart() {
  const [total, setTotal] = useState(0)
>>>>>>> ed6e7d3f8deb93db53088b5f584b2d5bb6d5453c

  function totalPlus(price) {
    setTotal(total + price)
  }

  function totalMinus(price) {
    setTotal(total - price)
  }

  return (
    <section className={styles.cartContainer}>
      <h3 className={styles.cartTitle}>購物籃</h3>
      <section className={styles.productList}>
        {itemsData.map((item) => (
        <ProductList
          key = {item.id}
          img = {item.img}
          price = {item.price}
          name = {item.name}
          quantity = {item.quantity}
          totalPlus = {totalPlus}
          totalMinus = {totalMinus}
        />
      ))}
      </section>
      <section className={styles.cartInfoContainer}>
        <section className={styles.cartInfo}>
          <div className={styles.text}>運費</div>
          <div className={styles.cartPrice}>免費</div>
        </section>
        <section className={styles.cartInfo}>
          <div className={styles.text}>小計</div>
          <div className={styles.cartPrice}>{total}</div>
        </section>
      </section>
    </section>
  )
}