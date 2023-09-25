import { useContext } from 'react';
import { IconBrandX } from '@tabler/icons-react';
import './styles.css'
import { ShoppingCartContext } from '../../Context';

const ProductDetail = ()=>{
    const context= useContext(ShoppingCartContext)
    console.log('PRODUCT TO SHOW :', context.productToShow)

    return(
        <aside 
        className={`${context.isProductDetailOpen ? 'flex' : 'hidden'} product-detail flex flex-col fixed right-0 border border-black rounded-lg bg-white`}>
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>Detail</h2>
                <div>
                    <IconBrandX color="black" size={15}></IconBrandX>
                </div>
            </div>

        </aside>

    )
}
export default ProductDetail
