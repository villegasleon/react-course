import { useContext } from 'react';
import { IconX } from '@tabler/icons-react';
import './styles.css'
import { ShoppingCartContext } from '../../Context';

const ProductDetail = ()=>{
    const context= useContext(ShoppingCartContext)
    // console.log('PRODUCT TO SHOW :', context.productToShow)

    return(
        <aside 
        className={`${context.isProductDetailOpen ? 'flex' : 'hidden'} product-detail flex-col fixed right-0 border border-black rounded-lg bg-white`}>
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>Detail</h2>
                {/* En el icono de la "x" para cerrar la vista detallada, agregamos un onClick que trae del contexto
                la logica para cerrar la ventana  */}
                <div>
                    <IconX color="black" size={10} className='h-6 w-6 text-black'
                    onClick={()=> context.closeProductDetail()}></IconX>
                </div>
            </div>
                {/*Aqui creamos nuestra figure, aqui va a pintar el titulo y la imagen  */}
                <figure className='px-6'>
                    <img className='w-full h-full rounded-lg' 
                    src= {context.productToShow.images} 
                    alt={context.productToShow.title}/> 
                </figure>
                {/*Aqui creamos el texto q llevara la card como precio, titulo y descripcion  */}
                <p className='flex flex-col p-6'>
                    <span className='font-medium text-2xl'>${context.productToShow.price}</span>
                    <span className='font-medium text-md'>${context.productToShow.title}</span>
                    <span className='font-light text-sm'>${context.productToShow.description}</span>
                </p>


        </aside>

    )
}
export default ProductDetail
