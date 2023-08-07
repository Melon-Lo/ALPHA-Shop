import './Cart.scss'

import { ReactComponent as PlusButton } from 'assets/icons/plus.svg'
import { ReactComponent as MinusButton } from 'assets/icons/minus.svg'
import { useContext } from 'react'
import { CartContext } from 'context/CartContext'
import { ShippingContext } from 'context/ShippingContext'
import { ThemeContext } from 'context/ThemeContext'

function ProductList() {
  const { currentItems, handleClick } = useContext(CartContext)

  const totalItems = currentItems.map(item => (
    <section className="productContainer" key={item.id}>
      <div className="productItem">
        <img src={item.img} alt={item.name} className="imgContainer"/>
        <div className="productInfo">
          <p className="productName">{item.name}</p>
          <div className="productControl">
            <MinusButton 
              className="controlButton"
              onClick={() => {
                handleClick(item.id, -1)
              }}
            />
            <span className="productCount">
              {item.quantity}
            </span>
            <PlusButton 
              className="controlButton" 
              onClick={() => {
                handleClick(item.id, 1)
              }}
            />
          </div>
        </div>
        <div className="price">${item.price}</div>
      </div>
    </section>
  ))

  return totalItems
}

export default function Cart() {
  const { total } = useContext(CartContext)
  const { shipping } = useContext(ShippingContext)
  const { theme } = useContext(ThemeContext)

  return (
    <section 
      className="cartContainer"
      style={theme.checkout.cartStyle}  
    >
      <h3 className="cartTitle">購物籃</h3>
      <section className="productList">
      <ProductList />
      </section>
      <section className="cartInfoContainer">
        <section className="cartInfo">
          <div className="text">運費</div>
          <div className="cartPrice">
            {shipping === 0 ? "免費" : '$' + shipping}
          </div>
        </section>
        <section className="cartInfo">
          <div className="text">小計</div>
          <div className="cartPrice">${total}</div>
        </section>
      </section>
    </section>
  )
}