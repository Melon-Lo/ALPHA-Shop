import { createContext, useState } from "react";
import initailData from "components/Cart/itemsData";
export const CartContext = createContext()

export function CartContextProvider({ children }) {
  const [currentItems, setCurrentItems] = useState(initailData)
  const [calc, setCalc] = useState('')

  let itemTotal = []
  currentItems.map(item => {
    itemTotal.push(item.price * item.quantity)
  })

  const total = itemTotal.reduce((accumulator, currenValue) => {
    return accumulator + currenValue
  })

  function handleClick(id) {
    setCurrentItems(
      currentItems.map(item => {
        if(item.id === id) {
          return {
            ...item,
            quantity: item.quantity + Number(calc)
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
        handleClick,
        setCalc
      }}
    >
      {children}
    </CartContext.Provider>
  )
}