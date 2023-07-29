import { createContext, useContext, useState } from "react";
import { ShippingContext } from "./ShippingContext";

export const CartContext = createContext()

const initailData = [
  {
    id: '1',
    name: '貓咪罐罐',
    img: 'https://picsum.photos/300/300?text=1',
    price: 100,
    quantity: 2,
  },
  {
    id: '2',
    name: '貓咪干干',
    img: 'https://picsum.photos/300/300?text=2',
    price: 200,
    quantity: 1,
  },
]

export function CartContextProvider({ children }) {
  const [currentItems, setCurrentItems] = useState(initailData)

  let itemTotal = []
  currentItems.map(item => {
    itemTotal.push(item.price * item.quantity)
  })

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