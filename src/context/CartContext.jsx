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
  const { shipping } = useContext(ShippingContext)
  function calcTotal() {
    let total = 0
    currentItems.map(item => {
      total = total + item.price * item.quantity
    })
    return (
      total = total + shipping
    )
  }

  return (
    <CartContext.Provider
      value={{
        currentItems,
        setCurrentItems,
        calcTotal
      }}
    >
      {children}
    </CartContext.Provider>
  )
}