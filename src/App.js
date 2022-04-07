import React from 'react';
import { Navbar } from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {

  return (
    <>
      <Navbar/>
      <ItemListContainer greeting={"Nuestros vinos"}/>
      <ItemDetailContainer/>
    </>
  );
}

export default App;
