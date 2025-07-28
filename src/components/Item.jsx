import React from 'react'
import { Navigate, useParams } from 'react-router'
import Navbar from './Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { additem } from '../redux/slice/AdditemSlice';
import { useNavigate } from 'react-router';



function Item() {
  const { id } = useParams();
  const dispatch = useDispatch()
  const allItems = useSelector(state => state.load.data.products);
  const navigate = useNavigate();
  const goHome = () => {
    navigate('/');
  };


  if (!allItems) return <h2 className="text-center text-xl mt-20">Loading...</h2>;

  const item = allItems.find(i => String(i.id) === id);

  if (!item) return <h2 className="text-center text-xl mt-20">Item not found</h2>;

  return (
    <>
      <Navbar />
      <div className="p-4 text-center mt-[25%] md:mt-[10%] w-200 m-auto shadow-2xl">
        <h1 className="text-2xl font-bold">{item.title}</h1>
        <img src={item.image} alt={item.title} className="mx-auto h-64 my-4 object-contain" />
        <p className='font-extrabold text-2xl'>Brand: {item.brand}</p>
        <p className='font-bold'>Price: ₹{item.price}</p>
        <p className='font-light'>Description: {item.description}</p>
        <button className='bg-blue-950 text-white p-3 rounded-2xl mt-5' onClick={() => dispatch(additem(item))}>Add to Cart</button>
        <button className='bg-blue-950 text-white p-3 rounded-2xl mt-5 ml-10 min-w-25 ' onClick={goHome}>Go to Home</button>
      </div>
    </>
  );
}

export default Item