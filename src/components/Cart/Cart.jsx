import styles from './Cart.module.css'
import { ReactComponent as PlusButton } from 'assets/icons/plus.svg'
import { ReactComponent as MinusButton } from 'assets/icons/minus.svg'
import { useContext } from 'react'
import { CartContext } from 'context/CartContext'
import { ShippingContext } from 'context/ShippingContext'

function ProductList() {
  const { currentItems, handleClick } = useContext(CartContext)

  const totalItems = currentItems.map(item => (
    <section className={styles.productContainer} key={item.id} >
      <div className={styles.productItem}>
        <img src={item.img} alt={item.name} className={styles.imgContainer}/>
        <div className={styles.productInfo}>
          <p className={styles.productName}>{item.name}</p>
          <div className={styles.productControl}>
            <MinusButton 
              className={styles.controlButton}
              onClick={() => {
                handleClick(item.id, -1)
              }}
            />
            <span className={styles.productCount}>
              {item.quantity}
            </span>
            <PlusButton 
              className={styles.controlButton} 
              onClick={() => {
                handleClick(item.id, 1)
              }}
            />
          </div>
        </div>
        <div className={styles.price}>${item.price}</div>
      </div>
    </section>
  ))

  return totalItems
}

export default function Cart() {
  const { total } = useContext(CartContext)
  const { shipping } = useContext(ShippingContext)

  return (
    <section className={styles.cartContainer}>
      <h3 className={styles.cartTitle}>購物籃</h3>
      <section className={styles.productList}>
      <ProductList />
      </section>
      <section className={styles.cartInfoContainer}>
        <section className={styles.cartInfo}>
          <div className={styles.text}>運費</div>
          <div className={styles.cartPrice}>
            {shipping === 0 ? "免費" : '$' + shipping}
          </div>
        </section>
        <section className={styles.cartInfo}>
          <div className={styles.text}>小計</div>
          <div className={styles.cartPrice}>${total}</div>
        </section>
      </section>
    </section>
  )
}