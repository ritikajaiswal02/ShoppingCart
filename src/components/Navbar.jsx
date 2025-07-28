import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router'

function Navbar() {
    const cartItems = useSelector(state=> state.add)

    const totalCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

    return (
        <>
            <div className='flex justify-evenly bg-gray-800 p-7 text-white text-2xl fixed top-0 w-full z-1'>
                <NavLink to="/" className={({ isActive }) => (isActive ? " border-b-4 border-t-amber-50" :"")}>Home</NavLink>
                <NavLink to="/cart" className={({ isActive }) => (isActive ? "border-b-4 border-t-amber-50 " : "")}>Cart <sup>({totalCount})</sup></NavLink>
            </div>
        </>
    )
}

export default Navbar