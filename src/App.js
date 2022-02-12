import './App.css';
import React from 'react'
import { Routes, Route} from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import HamburgerPage from './pages/HamburgerPage'
import ProductPage from './pages/ProductPage'
import GenericNotFound from './pages/GenericNotFound'
import About from './pages/About'
import Footer from './components/Footer'
import SingleProductPage from './pages/SingleProductPage'
import Cart from './pages/Cart'

function App(){

  return (
        <>
          <HamburgerPage />
          <Header />
          <Routes>
              <Route exact path='/' element={<Home />} />
              <Route path='products' element={<ProductPage />} />
              <Route  path='about' element={<About />}/>
              <Route  path='furniture/:id' element={<SingleProductPage/>} />
              <Route  path='mycart' element={ <Cart/>} />
              <Route path='*' element={<GenericNotFound />} />
          </Routes>
          <Footer />
        </>
  ); 
}

export default App;
