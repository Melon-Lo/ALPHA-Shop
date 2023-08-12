import { createContext, useState } from "react"

export const ShippingContext = createContext()

export default function ShippingContextProvider({ children }) {
  const [shipping, setShipping] = useState(0)

  return (
    <ShippingContext.Provider
      value={{
        shipping,
        setShipping,
      }}
    >
      {children}
    </ShippingContext.Provider>
  )
}