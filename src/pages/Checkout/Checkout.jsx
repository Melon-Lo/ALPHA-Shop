import './Checkout.scss'
import Form from 'components/Form/Form'
import Cart from 'components/Cart/Cart'
import ProgressControl from 'components/Form/ProgressControl/ProgressControl'
import { useContext } from 'react'
import { ThemeContext } from 'context/ThemeContext'
import { WindowWidthContext } from 'context/WindowWidthContext'

export default function Checkout() {
  const { theme } = useContext(ThemeContext)
  const { windowWidth } = useContext(WindowWidthContext)

  return(
    <section
      className="checkSection"
      style={theme.checkout.checkoutStyle}
    >
      <h1 className="checkTitle">結帳</h1>
      <div className="checkContainer">
        <Form />
        <Cart />
        {windowWidth <= 576 && <ProgressControl />}
      </div>
    </section>
  )
}