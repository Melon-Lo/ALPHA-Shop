import { createContext, useContext, useState } from "react";
import initailData from "components/Cart/itemsData";
import { ShippingContext } from "./ShippingContext";
export const CartContext = createContext()

export function CartContextProvider({ children }) {
  const [currentItems, setCurrentItems] = useState(initailData)
  const { shipping } = useContext(ShippingContext)

  let itemTotal = []
  currentItems.map(item => {
    itemTotal.push(item.price * item.quantity)
  })
  itemTotal.push(shipping)
  const total = itemTotal.reduce((accumulator, currenValue) => {
    return accumulator + currenValue
  })

  function handleClick(id, calc) {
    setCurrentItems(
      currentItems.map(item => {
        if(item.id === id) {
          if(calc === 1) {
            item.quantity++
          } else if(calc === -1 && item.quantity > 0) {
            item.quantity--
          }
          return item
        } else {
          return item
        }
      })
    )
  }

  return (
    <CartContext.Provider
      value={{
        currentItems,
        setCurrentItems,
        total,
        // handlePlusClick,
        // handleMinusClick,
        handleClick
      }}
    >
      {children}
    </CartContext.Provider>
  )
}