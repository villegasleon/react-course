import { useContext } from 'react';
import { IconX } from '@tabler/icons-react';
import './styles.css'
import { ShoppingCartContext } from '../../Context';
import OrderCard from '../../Components/OrderCard';

const CheckOutSideMenu = ()=>{
    const context= useContext(ShoppingCartContext)
    console.log('CART: ', context.cartProducts)

    return(
        <aside 
        className={`${context.isCheckOutSideMenuOpen ? 'flex' : 'hidden'} checkout-side-menu flex-col fixed right-0 border border-black rounded-lg bg-white`}>
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>My Order</h2>
                <div>
                    <IconX color="black" size={10} className='h-6 w-6 text-black cursor-pointer'
                    onClick={()=> context.closeCheckOutSideMenu()}></IconX>
                </div>
            </div>
            <div className='px-6'>   
            {
                context.cartProducts.map(product =>(
                    <OrderCard 
                    key={product.id}
                    title ={product.title}
                    imageUrl={product.images}
                    price={product.price}
                    />
                ))
            }
            </div>
        </aside>

    )
}
export default CheckOutSideMenu
