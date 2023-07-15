import styles from './Cart.module.css'
import itemsData from './itemsData'
import { ReactComponent as PlusButton } from '../../../../icons/plus.svg'
import { ReactComponent as MinusButton } from '../../../../icons/minus.svg'
import { useState } from 'react'

function ProductList({ items }) {
  const totalItems = items.map((item) => (
    <section className={styles.productContainer} key={item.id} >
      <div className={styles.productItem}>
        <img src={item.img} alt={item.name} className={styles.imgContainer}/>
        <div className={styles.productInfo}>
          <p className={styles.productName}>{item.name}</p>
          <div className={styles.productControl}>
            <MinusButton 
              className={styles.controlButton}
            />
            <span className={styles.productCount}>
              {item.quantity}
            </span>
            <PlusButton 
              className={styles.controlButton} 
            />
          </div>
        </div>
        <div className={styles.price}>{item.price}</div>
      </div>
    </section>
  )) 

  return (
    <section className={styles.productList}>
      {totalItems}
    </section>
  )
}

function CartInfo() {
  

  return (
    <section className={styles.cartInfoContainer}>
      <section className={styles.cartInfo}>
        <div className={styles.text}>運費</div>
        <div className={styles.cartPrice}>60</div>
      </section>
      <section className={styles.cartInfo}>
        <div className={styles.text}>小計</div>
        <div className={styles.cartPrice}>360</div>
      </section>
    </section>
  )
}

export default function Cart() {
  return (
    <section className={styles.cartContainer}>
      <h3 className={styles.cartTitle}>購物籃</h3>
      <ProductList items={itemsData}/>
      <CartInfo />
    </section>
  )
}