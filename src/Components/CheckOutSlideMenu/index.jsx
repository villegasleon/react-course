import { useContext } from 'react';
import { IconX } from '@tabler/icons-react';
import './styles.css'
import { ShoppingCartContext } from '../../Context';

const CheckOutSideMenu = ()=>{
    const context= useContext(ShoppingCartContext)

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
        </aside>

    )
}
export default CheckOutSideMenu
