import { createContext, useState } from "react"

export const ShippingContext = createContext()

export function ShippingContextProvider({ children }) {
  const [shipping, setShipping] = useState(0)
  function handleShipping(price) {
    setShipping(price)
    console.log(shipping)
  }

  return (
    <ShippingContext.Provider
      value={{
        shipping,
        setShipping,
        handleShipping,
      }}
    >
      {children}
    </ShippingContext.Provider>
  )
}