import React from 'react';
import { Navbar } from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

function App() {

  return (
    <>
      <Navbar/>
      <ItemListContainer greeting={"La tiendita MeLi"}/>
    </>
  );
}

export default App;
