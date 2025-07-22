import './App.css'
import Home from './components/Home'
import Cart from './components/Cart'
import { Route, Routes } from 'react-router'

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path='/cart' element={<Cart/>}/>
    </Routes>
    </>
  )
}

export default App
