import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'
import { IconExposurePlus1 } from '@tabler/icons-react';
import {IconCheck}from '@tabler/icons-react';


const Card=(data) =>{
    //aqui lo q le estamos diciendo es que lea el estado global
    const context = useContext(ShoppingCartContext)
    
    const showProduct = (ProductDetail) => {
        context.openProductDetail()
        context.setProductToShow(ProductDetail)
    }    
    //vamos a crear otra funcion para agregar el producto al carrito
//A esta funcion le estamos diciendo que tendra un elementonuevo que ProductData, haces setCartProducts
// y ademas agregas el elemento nuevo q tenemos que es ProductData 
    const addProductsToCart=(event, ProductData)=>{
        //stopPropagation solo limita a que exista un evento al clickear en el signo +
        event.stopPropagation()
        context.setCount(context.count + 1)
        context.setCartProducts([...context.cartProducts, ProductData])
        context.openCheckOutSideMenu()
        context.closeProductDetail()
        
    }
    const renderIcon = (id)=> {
{/* Para saber si el producto ya fue agregado, usamos la funcion filter */}
        const isInCart = context.cartProducts.filter( product => product.id === id).length > 0

        if (isInCart){
            return(
            <div 
                className='absolute top-0 right-0 flex justify-center items-center bg-black w-6 h-6 rounded-full m-2 p-1'>
                <IconCheck color="green" size={20}></IconCheck>
            </div>
            )
        } else {
            return(            
            <div 
                className='absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1'
                onClick={(event)=>addProductsToCart(event, data.data)}>
                <IconExposurePlus1 color="black" size={20}></IconExposurePlus1>
            </div>     )
      
        }
 
    }
    return (
        <div 
        className='bg-white cursor-pointer w-56 h-60 rounded-lg'
            onClick = {()=>showProduct(data.data)}>
            <figure className='relative mb-2 w-full h-4/5'>
                <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5'>{data.data.category.name}</span>
                <img className='w-full h-full object-cover rounded-lg' src={data.data.images[0]} alt={data.data.title[0]} />
{/* Para saber si el producto ya fue agregado, usamos la funcion filter */}
                {renderIcon(data.data.id)}
            </figure>
            <p className='flex justify-between'>
                <span className='text-sm font-medium'>{data.data.title}</span>
                <span className='text-lg font-medium '>${data.data.price}</span>
            </p>
        </div>
    )
}

export default Card