import {createContext, useState } from 'react'
export const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({children})=>{
    //aqui insertamos la funcion que teniamos del state en Home
    //solo q ya no necesitamos items, sino un contador (count) y no setItems, sino setCount.
    //en useState no llevara null, sera 0 porque ahi va a ir almacenando el conteo
    const [count, setCount] = useState(0)
    console.log('COUNT: ', count)
    return(
        <ShoppingCartContext.Provider value={{
            count,
            setCount
        }}>
        {children}
        </ShoppingCartContext.Provider>
    )
}


