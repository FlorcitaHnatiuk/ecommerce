import React from 'react';
// import { useState, createContext } from 'react'
import { Navbar } from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Form from './components/Form/Form';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartContextProvider } from './context/CartContext'

function App() {
  
  return (
    <>
      <CartContextProvider>
        <BrowserRouter>
          <Navbar/>
            <Routes>
              <Route path="/" element={<ItemListContainer greeting={<p>Nuestros vinos</p>}/>} />
              <Route path="/category/:categoryId" element={<ItemListContainer/>} />
              <Route path='/detail/:productId' element={<ItemDetailContainer />} />
              <Route path='*' element={<h1>NOT FOUND 404</h1>}/>
              <Route path='/form' element={<Form/>}/>
            </Routes>
          </BrowserRouter>
      </CartContextProvider>
    </>
  );
}

export default App;
