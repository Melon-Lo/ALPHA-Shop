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
    <CartContext.Provider
      value={{
        currentItems,
        setCurrentItems,
        total,
        handlePlusClick,
        handleMinusClick
      }}
    >
      {children}
    </CartContext.Provider>
  )
}