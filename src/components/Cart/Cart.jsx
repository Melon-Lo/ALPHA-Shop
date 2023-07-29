import styles from './Cart.module.css'
import { ReactComponent as PlusButton } from 'assets/icons/plus.svg'
import { ReactComponent as MinusButton } from 'assets/icons/minus.svg'
import { useContext } from 'react'
import { CartContext } from 'context/CartContext'
import { ShippingContext } from 'context/ShippingContext'

function ProductList({ items, totalPlus, totalMinus }) {
  const totalItems = items.map(item => (
    <section className={styles.productContainer} key={item.id} >
      <div className={styles.productItem}>
        <img src={item.img} alt={item.name} className={styles.imgContainer}/>
        <div className={styles.productInfo}>
          <p className={styles.productName}>{item.name}</p>
          <div className={styles.productControl}>
            <MinusButton 
              className={styles.controlButton}
              onClick={() =>totalMinus(item.id)}
            />
            <span className={styles.productCount}>
              {item.quantity}
            </span>
            <PlusButton 
              className={styles.controlButton} 
              onClick={() =>totalPlus(item.id)}
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
  const { currentItems, setCurrentItems, calcTotal } = useContext(CartContext)
  const { shipping } = useContext(ShippingContext)

  function handlePlusClick(id) {
    setCurrentItems(
      currentItems.map(item => {
        if(item.id === id) {
          return {
            ...item,
            quantity: item.quantity + 1
          }
        } else {
          return item
        }
      })
    )
  }

  function handleMinusClick(id) {
    setCurrentItems(
      currentItems.map(item => {
        if(item.id === id && item.quantity > 0) {
          return {
            ...item,
            quantity: item.quantity - 1
          }
        } else {
          return item
        }
      })
    )
  }

  return (
    <section className={styles.cartContainer}>
      <h3 className={styles.cartTitle}>購物籃</h3>
      <section className={styles.productList}>
      <ProductList
        value = {{ currentItems, setCurrentItems }}
        items={currentItems}
        totalPlus={handlePlusClick}
        totalMinus={handleMinusClick}
      />
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
          <div className={styles.cartPrice}>${calcTotal()}</div>
        </section>
      </section>
    </section>
  )

}