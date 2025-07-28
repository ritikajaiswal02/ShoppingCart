import React from 'react';
import Navbar from './Navbar';
import { useDispatch, useSelector } from 'react-redux';
import Card from './Card'
import { removeitem } from '../redux/slice/AdditemSlice'
import { nanoid } from '@reduxjs/toolkit';


function Cart() {
  const detail = useSelector(state => state.add); 

  const price = detail.reduce((sum,item)=>sum+item.price* item.quantity,0)

  console.log(detail);
  const dispatch = useDispatch()

  return (
    <div>
      <Navbar />
      <div className='h-full container flex flex-col items-center mt-20 md:flex-row gap-6 md:flex-wrap md:justify-evenly relative'>
        {
          detail.length > 0 ? (
            detail.map(item => 
              <Card item={item} onclick={()=>dispatch(removeitem(item.id))} key={nanoid()} description="Remove from Cart" >
                <p className='font-bold text-blue-600' >Quantity: {item.quantity}</p>
                </Card>
            )
          ) : (
            <div className="mt-[10%] text-xl text-center font-semibold">Add something to cart</div>
          )
        }
      </div>
      <div className='fixed bottom-0 left-1/2 transform -translate-x-1/2 text-2xl md:text-4xl p-4 w-[90%] md:w-[50%] bg-blue-950 text-white text-center z-50 shadow-lg'>
  Total: Rs. {price}
</div>
      
    </div>
    
  );
}

export default Cart;
