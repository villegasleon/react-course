import { NavLink } from "react-router-dom"
import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'
import { IconShoppingCartHeart } from '@tabler/icons-react';

const Navbar = () => {
    const context = useContext(ShoppingCartContext)
    const activeStyle = 'underline underline offset-4'
    return(
        <nav className='flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light'>
            <ul className='flex items-center gap-3'>
                <li className='font-semibold text-lg'>
                    <NavLink 
                        to="/">
                        Shopi
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/'
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? activeStyle: undefined
                        }>        
                        All
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/clothes'
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? activeStyle: undefined
                            }>  
                        Clothes
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/electronics'
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? activeStyle: undefined
                            }>  
                        Electronics
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/fornitures'
                            className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? activeStyle: undefined
                            }>  
                        Fornitures
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to='/toys'
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? activeStyle: undefined
                    }>  
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to='/others'
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? activeStyle: undefined
                    }>  
                        Others
                    </NavLink>
                </li>
            </ul>
            <ul className='flex items-center gap-3'>
                <li>
                    hvill@gmail.com
                </li>
                <li>
                    <NavLink 
                        to='/my-orders'
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? activeStyle: undefined
                            }>  
                        My Orders
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/my-account'
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? activeStyle: undefined
                        }>  
                        My Account
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/sign-in'
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? activeStyle: undefined
                        }>  
                        Sign In
                    </NavLink>
                </li>
                <li className='flex items-center'>
                    <IconShoppingCartHeart color="black" size={25}></IconShoppingCartHeart>
                        <div>{context.count}</div>
                </li>
            </ul>
        </nav>
    )
}
export default Navbar