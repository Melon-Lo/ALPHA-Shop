import './Checkout.scss'
import Form from 'components/Form/Form'
import Cart from 'components/Cart/Cart'
import { useContext } from 'react'
import { ThemeContext } from 'context/ThemeContext'

export default function Checkout() {
  const { theme } = useContext(ThemeContext)

  return(
    <section
      className="checkSection"
      style={theme.checkout.checkoutStyle}
    >
      <h1 className="checkTitle">結帳</h1>
      <div className="checkContainer">
        <Form />
        <Cart />
      </div>
    </section>
  )
}