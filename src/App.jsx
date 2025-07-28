import './App.css'
import Home from './components/Home'
import Cart from './components/Cart'
import { Route, Routes } from 'react-router'
import Item from './components/Item'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="item/:id" element={<Item/>} />
        </Route>
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </>
  )
}

export default App
