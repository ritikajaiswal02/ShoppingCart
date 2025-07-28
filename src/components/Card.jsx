import React from 'react'
import { NavLink } from 'react-router'

function Card({ item ,onclick,description,children}) {
    return (
        <div className='w-[80%] md:w-80 h-[400px] shadow-2xl shadow-gray-400 text-center flex flex-col justify-between relative m-4'>
            <NavLink to={`item/${item.id}`} className='flex-grow'>
                <div className='p-2'>
                    <img src={item.image} alt="Something went wrong" className='h-48 object-contain mx-auto' />
                </div>
                <div className='px-3'>
                    <h4 className='font-bold text-2xl'>{item.brand}</h4>
                    <h3 className='font-semibold'>Price: {item.price} Rs.</h3>
                    <p className='overflow-hidden text-ellipsis line-clamp-2'>
                        {item.title.length > 100 ? `${item.title.substring(0, 100)}...` : item.title}
                    </p>
                </div>
            </NavLink>
            {children}

            <div className='p-3'>
                <button
                    onClick={onclick}
                    className='bg-blue-950 text-white py-2 px-5 rounded-2xl hover:bg-blue-800 w-[60%]'
                >
                    {description}
                </button>
            </div>
        </div>
    );

}

export default Card