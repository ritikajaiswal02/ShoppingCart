import React, { useEffect } from 'react'
import Navbar from './Navbar'
import { useDispatch, useSelector } from 'react-redux'
import { fetchData } from "../redux/slice/LoadDataSlice"
import { additem } from '../redux/slice/AdditemSlice'
import Card from './Card'
import { nanoid } from '@reduxjs/toolkit'
import { Outlet } from 'react-router'

function Home() {
  const data = useSelector(state => state.load.data)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchData())
  }, [])

  return (
    <>
    <Navbar/>
      <div className='h-full container flex flex-col items-center mt-20 md:flex-row gap-6 md:flex-wrap md:justify-evenly'>
        {
          data?.products?
          data.products.map(item => 
            <Card item={item} onclick={()=>dispatch(additem(item))} key={nanoid()} description="Add to Cart"/>
          )
          : <div className='mt-[10%] text-xl text-center font-semibold'>Loading.....</div>
        }
      </div>
      <Outlet/>
    </>
  )
}

export default Home