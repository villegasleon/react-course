import {createContext, useState } from 'react'
export const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({children})=>{
    //aqui insertamos la funcion que teniamos del state en Home
    //solo q ya no necesitamos items, sino un contador (count) y no setItems, sino setCount.
    //en useState no llevara null, sera 0 porque ahi va a ir almacenando el conteo
    const [count, setCount] = useState(0)
    //vamos a hacer uso del state para el Detail, y ponerlo en false para q cuando iniciemos no este activado
    const [isProductDetailOpen, setIsProductDetailOpen]= useState(false) 
    //funcion para modificar para abrir y cerrar el product detail
    const openProductDetail = ()=>setIsProductDetailOpen(true)
    const closeProductDetail = ()=>setIsProductDetailOpen(false)

    //Product detail  Show product, debemos traer lo que esta en la card q por defecto sera un objeto vacio
    const [productToShow, setProductToShow]= useState({})

    return(
        <ShoppingCartContext.Provider value={{
            count,
            setCount,
            openProductDetail,
            closeProductDetail,
            isProductDetailOpen,
            productToShow,
            setProductToShow             
        }}>
        {children}
        </ShoppingCartContext.Provider>
    )
}


