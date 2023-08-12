import { createContext, useContext, useState } from "react";
import initailData from "components/Cart/itemsData";
import { ShippingContext } from "./ShippingContext";
export const CartContext = createContext()

export default function CartContextProvider({ children }) {
  const [currentItems, setCurrentItems] = useState(initailData)
  const { shipping } = useContext(ShippingContext)

  const total = currentItems.reduce((acc, curr) => {
    return acc + curr.price * curr.quantity
  }, shipping)

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
        handleClick
      }}
    >
      {children}
    </CartContext.Provider>
  )
}