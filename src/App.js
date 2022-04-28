import React from 'react'
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import Index from './components/Index/Index'
import Form from './components/Form/Form'
import Cart from './components/Cart/Cart'
import Footer from './components/Footer/Footer'
import NotFound from './components/NotFound/NotFound'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartContextProvider } from './context/CartContext'
import { NotificationProvider } from './notification/Notification'
import { Navbar } from "./components/Navbar/Navbar"


function App() {
  
  return (
    <>
      <NotificationProvider>
        <CartContextProvider>
          <BrowserRouter>
            <Navbar/>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/category/:categoryId" element={<ItemListContainer/>} />
                <Route path='/detail/:productId' element={<ItemDetailContainer />} />
                <Route path='*' element={<NotFound />}/>
                <Route path='/form' element={<Form />}/>
                <Route path='/cart' element={<Cart />} />
              </Routes>
              <Footer/>
            </BrowserRouter>
          </CartContextProvider>
        </NotificationProvider>
      </>
    );
  }

export default App
