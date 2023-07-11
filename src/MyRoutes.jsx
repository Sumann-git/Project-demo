import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Layouts from './components/Layouts'
import Show from './context/Show'
import Datafetch from './hooks/Datafetch'
import Effect from './hooks/Effect'
import IncrementDecrement from './hooks/IncrementDecrement'
import Cart from './pages/Cart'
import Homepage from './pages/Homepage'
import Login from './pages/Login'
import ProductDetails from './pages/ProductDetails'
import Products from './pages/Products'
import Register from './pages/Register'
import TestNav from './redux/TestNav'


const MyRoutes = () => {
  return (
    <Router>
        <Routes>
            <Route path='/' element={<Layouts/>}>
            <Route index element={<Homepage/>}/>
            <Route path='login' element={<Login/>}/>
            <Route path='products' element={<Products/>}/>
            <Route path='productdetails/:productid' element={<ProductDetails/>}/>
            <Route path='cart' element={<Cart/>}/>
            <Route path='signup' element={<Register/>}/>
            </Route>
            <Route path='/hooks/first' element={<IncrementDecrement/>}/>
            <Route path='/hooks/second' element={<Effect/>}/>
            <Route path='/hooks/data'  element={<Datafetch/>}/>
            <Route path='/context/show' element={<Show/>}/>
            <Route path='/redux/cart' element={<TestNav/>}/>
        </Routes>
    </Router>
  )
}

export default MyRoutes