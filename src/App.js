import React from 'react';
import { Navbar } from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/list' element={<ItemListContainer greeting={"Nuestros vinos"}/>} />
          <Route path='/detail' element={<ItemDetailContainer />} />
          <Route path='*' element={<h1>NOT FOUND 404</h1>}/>
        </Routes>
      </BrowserRouter>
      <ItemDetailContainer/>
    </>
  );
}

export default App;
