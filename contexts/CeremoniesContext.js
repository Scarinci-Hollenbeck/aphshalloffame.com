import React, { createContext, useState } from 'react'

export const CeremoniesContext = createContext()

export const CeremoniesProvider = ({ children }) => {
  const [ceremonies, setCeremonies] = useState([])
  const values = { ceremonies, setCeremonies }

  return (
    <CeremoniesContext.Provider value={values}>
      {children}
    </CeremoniesContext.Provider>
  )
}
