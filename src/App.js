import React from 'react'
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import Form from './components/Form/Form'
import Cart from './components/Cart/Cart'
import Footer from './components/Footer/Footer'
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
                <Route path="/" element={<ItemListContainer greeting={<p>Nuestros vinos</p>}/>} />
                <Route path="/category/:categoryId" element={<ItemListContainer/>} />
                <Route path='/detail/:productId' element={<ItemDetailContainer />} />
                <Route path='*' element={<h1>NOT FOUND 404</h1>}/>
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
