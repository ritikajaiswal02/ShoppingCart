import React from 'react'
import { NavLink } from 'react-router'

function Navbar() {
    return (
        <>
            <div className='flex justify-center items-center bg-gray-800 p-4 text-white text-2xl'>
                <NavLink to="/" className={({ isActive }) => (isActive ? "ml-20 border-2 border-t-amber-50 p-2" : "ml-20")}>Home</NavLink>
                <NavLink to="/cart" className={({ isActive }) => (isActive ? "ml-20 border-2 border-t-amber-50 p-2" : "ml-20")}>Cart</NavLink>
            </div>
        </>
    )
}

export default Navbar